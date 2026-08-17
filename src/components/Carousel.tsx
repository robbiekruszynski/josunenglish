import { useEffect, useRef, useState, type ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode[];
  ariaLabel: string;
  autoPlayMs?: number;
}

// Above this many slides, per-dot navigation stops being usable (a wall
// of dozens of tiny dots), so the indicator switches to a progress bar.
const DOT_LIMIT = 12;

/**
 * Generic horizontal carousel: snap-scrolling track, prev/next arrows,
 * dot indicators, and gentle autoplay that pauses on hover/touch/focus.
 *
 * The "current slide" is tracked by measuring which slide is actually
 * centered in the scroll container (via a scroll listener), not by
 * IntersectionObserver — with peeking neighbor slides, multiple slides
 * can cross an intersection threshold at once mid-scroll, which made the
 * old approach occasionally pick the wrong slide and made the arrow
 * buttons feel like they moved the wrong direction. Measuring actual
 * position is unambiguous. `indexRef` is the source of truth for button
 * clicks (always current, unlike React state read inside a stale
 * closure); `activeIndex` state exists only to drive what's rendered
 * (dot highlighting).
 */
export function Carousel({ children, ariaLabel, autoPlayMs = 5000 }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = children.length;

  // Scrolls only the track's own horizontal scroll position. Computed
  // from real rendered positions (getBoundingClientRect), not
  // slide.offsetLeft: offsetLeft is relative to the nearest *positioned*
  // ancestor, which here is the outer wrapper div, not the track itself,
  // since the track has its own padding but isn't a positioned element.
  // That mismatch was silently sending the arrow buttons to the wrong
  // scroll target (sometimes off by just enough to look like nothing
  // happened). Measuring rendered rects sidesteps offsetParent entirely
  // and matches the same technique already used to track the active
  // slide below.
  //
  // Also deliberately NOT using element.scrollIntoView() here:
  // scrollIntoView walks every scrollable ancestor, including the page
  // itself, and can nudge the whole window vertically to bring the
  // target "into view," which is what caused the page to visibly jump
  // between sections during autoplay. Setting scrollLeft directly
  // touches only this track, nothing else on the page.
  // Clamps rather than wraps. Wrapping (next-at-the-end jumps back to
  // slide 0) is what was actually causing the "backwards" feeling: with
  // only 3 testimonial slides, clicking next while on the last one loops
  // all the way back to the first, a big jump in the opposite direction
  // that reads as broken, not as "the carousel looped." Autoplay still
  // wraps deliberately below; manual clicks now just stop at the ends.
  function goTo(index: number) {
    const clamped = Math.max(0, Math.min(count - 1, index));
    indexRef.current = clamped;
    setActiveIndex(clamped);

    const track = trackRef.current;
    const slide = slideRefs.current[clamped];
    if (!track || !slide) return;

    const trackRect = track.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();
    const slideOffsetWithinTrack = slideRect.left - trackRect.left + track.scrollLeft;
    const targetLeft = slideOffsetWithinTrack - (track.clientWidth - slide.clientWidth) / 2;

    track.scrollTo({ left: targetLeft, behavior: 'smooth' });
  }

  // Center the first slide immediately on mount, with no animation.
  // Without this, the track starts at scrollLeft 0, which (depending on
  // slide width vs. the track's side padding) can leave slide 0 sitting
  // left-of-center rather than truly centered, most noticeable with a
  // small slide count like Testimonials' three cards.
  useEffect(() => {
    const track = trackRef.current;
    const slide = slideRefs.current[0];
    if (!track || !slide) return;
    const trackRect = track.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();
    const slideOffsetWithinTrack = slideRect.left - trackRect.left + track.scrollLeft;
    track.scrollLeft = slideOffsetWithinTrack - (track.clientWidth - slide.clientWidth) / 2;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep indexRef/activeIndex in sync with whatever ends up centered
  // after a scroll, so a manual swipe is respected by the next button
  // click, dot, or autoplay tick, instead of jumping back to wherever a
  // button last set. This deliberately only measures once scrolling has
  // paused (debounced), not on every scroll frame: measuring mid-flight,
  // while a button-triggered smooth scroll is still animating past
  // intermediate slides, could momentarily report the wrong "current"
  // slide. A fast second click then read that bad in-flight value and
  // jumped somewhere unexpected, the "back and forth" / wrong-direction
  // feeling. Settling only after motion stops fixes that.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let settleTimer = 0;

    function measure() {
      const track = trackRef.current;
      if (!track) return;
      const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;

      let closest = 0;
      let closestDistance = Infinity;
      slideRefs.current.forEach((slide, i) => {
        if (!slide) return;
        const rect = slide.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - trackCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = i;
        }
      });

      indexRef.current = closest;
      setActiveIndex(closest);
    }

    function onScroll() {
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(measure, 120);
    }

    track.addEventListener('scroll', onScroll, { passive: true });
    measure();

    return () => {
      track.removeEventListener('scroll', onScroll);
      window.clearTimeout(settleTimer);
    };
  }, [count]);

  // Gentle autoplay, paused on hover, touch, or keyboard focus so it
  // never fights with someone actually browsing the photos. Reads
  // indexRef at fire-time rather than depending on activeIndex, so the
  // interval doesn't need to be torn down and rebuilt on every slide.
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = window.setInterval(() => {
      // Autoplay wraps on purpose (a timed background loop is expected
      // to cycle); manual clicks via goTo() above do not.
      const next = indexRef.current + 1 >= count ? 0 : indexRef.current + 1;
      goTo(next);
    }, autoPlayMs);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, count, autoPlayMs]);

  return (
    <div
      className="relative"
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[8%] py-2 sm:px-[15%]"
      >
        {children.map((child, index) => (
          <div
            key={index}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            className="w-[84%] flex-shrink-0 snap-center sm:w-[70%] md:w-[55%] lg:w-[45%]"
          >
            {child}
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            disabled={activeIndex === 0}
            onClick={() => goTo(indexRef.current - 1)}
            className="absolute top-1/2 left-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-josun-blue shadow-md transition hover:bg-white active:scale-95 disabled:pointer-events-none disabled:opacity-0 md:left-3"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            disabled={activeIndex === count - 1}
            onClick={() => goTo(indexRef.current + 1)}
            className="absolute top-1/2 right-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-josun-blue shadow-md transition hover:bg-white active:scale-95 disabled:pointer-events-none disabled:opacity-0 md:right-3"
          >
            <ChevronIcon direction="right" />
          </button>

          {count > DOT_LIMIT ? (
            // A dot per slide stops being usable once there are dozens of
            // them, so above DOT_LIMIT this switches to a slim progress
            // bar plus a numeric counter instead.
            <div className="mt-5 flex flex-col items-center gap-2">
              <div className="h-1.5 w-40 overflow-hidden rounded-full bg-josun-ink/10">
                <div
                  className="h-full rounded-full bg-josun-red transition-all duration-300"
                  style={{ width: `${((activeIndex + 1) / count) * 100}%` }}
                />
              </div>
              <p className="font-heading text-xs font-medium text-josun-ink/50">
                {activeIndex + 1} / {count}
              </p>
            </div>
          ) : (
            <div className="mt-5 flex items-center justify-center gap-1">
              {children.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to photo ${index + 1}`}
                  aria-current={index === activeIndex}
                  onClick={() => goTo(index)}
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                >
                  <span
                    className={`block rounded-full transition-all ${
                      index === activeIndex
                        ? 'h-2.5 w-6 bg-josun-red'
                        : 'h-2.5 w-2.5 bg-josun-ink/20 hover:bg-josun-ink/35'
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d={direction === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
