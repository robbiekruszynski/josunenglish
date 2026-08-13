import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import type { BrandColor } from '../types';
import { TESTIMONIALS } from '../data/siteContent';
import { colorClasses } from '../utils/colors';

const ACCENTS: BrandColor[] = ['orange', 'blue', 'teal', 'pink', 'green', 'indigo'];

const DRAG_THRESHOLD = 90; // px of horizontal drag before it counts as a flick
const EXIT_DURATION = 320; // ms — must match the transition duration below
const AUTOPLAY_MS = 6500;

interface ExitState {
  quote: string;
  direction: 1 | -1;
}

/**
 * A stacked "deck of cards" alternative to the row-of-cards pattern used
 * everywhere else on the page (About, Classes, and Shop are all flat
 * card grids), a deliberate design break for testimonials: the cards
 * sit fanned on top of one another, drag or flick the front card left
 * or right to send it to the back and reveal the next, and it loops
 * forever. Buttons, dots, and arrow keys do the same thing for anyone
 * not on a touchscreen or mouse, a gesture-only interaction isn't
 * accessible on its own.
 *
 * The reorder animation is mostly "free": cards are keyed by quote, so
 * when a card's depth in the stack changes, React reuses the same DOM
 * node and the CSS transition on transform animates it smoothly into
 * its new spot. The only card that needs custom handling is the one
 * currently being dragged or flying off screen.
 */
export function TestimonialStack() {
  const [order, setOrder] = useState(() => TESTIMONIALS.map((_, i) => i));
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [exiting, setExiting] = useState<ExitState | null>(null);
  const [noTransitionKey, setNoTransitionKey] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  const startXRef = useRef(0);
  const didDragRef = useRef(false);
  const exitTimerRef = useRef(0);

  function cycleForward(direction: 1 | -1 = 1) {
    if (exiting) return;
    const frontQuote = TESTIMONIALS[order[0]].quote;
    setDragging(false);
    setDragX(0);
    setExiting({ quote: frontQuote, direction });
    window.clearTimeout(exitTimerRef.current);
    exitTimerRef.current = window.setTimeout(() => {
      setOrder((prev) => [...prev.slice(1), prev[0]]);
      setNoTransitionKey(frontQuote);
      setExiting(null);
    }, EXIT_DURATION);
  }

  function cycleBackward() {
    if (exiting) return;
    setOrder((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  }

  function jumpTo(targetIndex: number) {
    if (exiting) return;
    setOrder((prev) => {
      const pos = prev.indexOf(targetIndex);
      if (pos <= 0) return prev;
      return [...prev.slice(pos), ...prev.slice(0, pos)];
    });
  }

  // Re-enable transitions one frame after a card lands at the back of
  // the stack, so it doesn't visibly animate from its flown-off exit
  // position into its resting spot, it should just already be there.
  useEffect(() => {
    if (!noTransitionKey) return;
    const id = requestAnimationFrame(() => setNoTransitionKey(null));
    return () => cancelAnimationFrame(id);
  }, [noTransitionKey]);

  // Gentle autoplay, paused on hover, touch, drag, or keyboard focus,
  // same pause behavior as the Gallery carousel elsewhere on the page.
  useEffect(() => {
    if (paused || dragging || exiting) return;
    const id = window.setInterval(() => cycleForward(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, dragging, exiting, order]);

  useEffect(() => () => window.clearTimeout(exitTimerRef.current), []);

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (exiting) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    startXRef.current = e.clientX;
    didDragRef.current = false;
    setDragging(true);
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 4) didDragRef.current = true;
    setDragX(dx);
  }

  function onPointerUp() {
    if (!dragging) return;
    setDragging(false);
    if (Math.abs(dragX) > DRAG_THRESHOLD) {
      cycleForward(dragX > 0 ? 1 : -1);
    } else {
      setDragX(0);
    }
  }

  function onCardClick() {
    if (didDragRef.current) {
      didDragRef.current = false;
      return;
    }
    cycleForward(1);
  }

  function onKeyDown(e: ReactKeyboardEvent) {
    if (e.key === 'ArrowRight') cycleForward(1);
    if (e.key === 'ArrowLeft') cycleBackward();
  }

  return (
    <div
      className="flex flex-col items-center gap-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="relative h-64 w-full max-w-sm touch-pan-y select-none sm:h-72 sm:max-w-md md:h-80"
        role="group"
        aria-label="Testimonials from Josun English families. Drag the front card, or use the buttons below, to see more."
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {order.map((testimonialIndex, depth) => {
          if (depth > 2) return null; // only the top 3 ever need to render

          const testimonial = TESTIMONIALS[testimonialIndex];
          const accent = ACCENTS[testimonialIndex % ACCENTS.length];
          const colors = colorClasses[accent];
          const isFront = depth === 0;
          const isExiting = exiting?.quote === testimonial.quote;
          const skipTransition = noTransitionKey === testimonial.quote;

          let transform: string;
          let opacity = 1;
          if (isFront && dragging) {
            transform = `translateX(${dragX}px) rotate(${dragX * 0.04}deg)`;
          } else if (isExiting) {
            transform = `translateX(${exiting.direction * 480}px) rotate(${exiting.direction * 22}deg)`;
            opacity = 0;
          } else {
            // Fanned out slightly so the cards behind visibly peek from
            // both sides, that's what reads as "a stack" rather than
            // just one card with a shadow.
            const fan = depth === 1 ? 4 : depth === 2 ? -4 : 0;
            const shiftX = depth === 1 ? 16 : depth === 2 ? -16 : 0;
            transform = `translateY(${depth * 10}px) translateX(${shiftX}px) rotate(${fan}deg) scale(${1 - depth * 0.05})`;
          }

          return (
            <figure
              key={testimonial.quote}
              aria-hidden={!isFront}
              onPointerDown={isFront ? onPointerDown : undefined}
              onPointerMove={isFront ? onPointerMove : undefined}
              onPointerUp={isFront ? onPointerUp : undefined}
              onPointerCancel={isFront ? onPointerUp : undefined}
              onClick={isFront ? onCardClick : undefined}
              className={`absolute inset-0 flex flex-col justify-center gap-4 overflow-hidden rounded-[1.75rem] ${colors.bg} p-7 shadow-xl sm:p-9 ${
                isFront ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'
              }`}
              style={{
                transform,
                opacity,
                zIndex: 10 - depth,
                transition:
                  dragging && isFront
                    ? 'none'
                    : skipTransition
                      ? 'none'
                      : 'transform 320ms ease, opacity 320ms ease',
              }}
            >
              <span
                aria-hidden="true"
                className="font-heading absolute -top-8 left-5 text-[8rem] leading-none font-bold text-white/15 select-none"
              >
                “
              </span>

              <div className="relative z-10 flex gap-1 text-white" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, star) => (
                  <StarIcon key={star} />
                ))}
              </div>

              <blockquote className="font-heading relative z-10 line-clamp-4 text-lg leading-snug font-semibold text-white md:text-2xl">
                {testimonial.quote}
              </blockquote>

              <figcaption className="relative z-10 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/25 font-heading text-sm font-semibold text-white">
                  {testimonial.author.charAt(0)}
                </span>
                <span>
                  <p className="font-heading text-sm font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-white/75">{testimonial.detail}</p>
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={cycleBackward}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-josun-blue shadow-md transition hover:bg-josun-cream active:scale-95"
        >
          <ChevronIcon direction="left" />
        </button>

        <div className="flex items-center gap-2">
          {TESTIMONIALS.map((testimonial, i) => (
            <button
              key={testimonial.quote}
              type="button"
              aria-label={`Show testimonial from ${testimonial.author}`}
              aria-current={order[0] === i}
              onClick={() => jumpTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                order[0] === i ? 'w-6 bg-josun-red' : 'w-2.5 bg-josun-ink/20 hover:bg-josun-ink/35'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => cycleForward(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-josun-blue shadow-md transition hover:bg-josun-cream active:scale-95"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.5 5.6 6.1.6-4.6 4.1 1.4 6-5.4-3.2-5.4 3.2 1.4-6-4.6-4.1 6.1-.6z" />
    </svg>
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
