import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import type { BrandColor } from '../types';
import { TESTIMONIALS } from '../data/siteContent';
import { StudentLetterLightbox } from './StudentLetter';
import { colorClasses } from '../utils/colors';

const ACCENTS: BrandColor[] = ['orange', 'blue', 'teal', 'pink', 'green', 'indigo'];

const DRAG_THRESHOLD = 90;
const EXIT_DURATION = 320;
const AUTOPLAY_MS = 6500;

interface ExitState {
  id: string;
  direction: 1 | -1;
}

/**
 * Stacked testimonial deck — drag, flick, or use the controls to cycle.
 * The student letter is the fourth card in the stack; tapping it opens a
 * lightbox instead of advancing the deck.
 */
export function TestimonialStack() {
  const [order, setOrder] = useState(() => TESTIMONIALS.map((_, i) => i));
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [exiting, setExiting] = useState<ExitState | null>(null);
  const [noTransitionKey, setNoTransitionKey] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const [openLetterId, setOpenLetterId] = useState<string | null>(null);

  const startXRef = useRef(0);
  const didDragRef = useRef(false);
  const exitTimerRef = useRef(0);

  const openLetter = TESTIMONIALS.find((t) => t.id === openLetterId);

  function cycleForward(direction: 1 | -1 = 1) {
    if (exiting) return;
    const frontId = TESTIMONIALS[order[0]].id;
    setDragging(false);
    setDragX(0);
    setExiting({ id: frontId, direction });
    window.clearTimeout(exitTimerRef.current);
    exitTimerRef.current = window.setTimeout(() => {
      setOrder((prev) => [...prev.slice(1), prev[0]]);
      setNoTransitionKey(frontId);
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

  useEffect(() => {
    if (!noTransitionKey) return;
    const id = requestAnimationFrame(() => setNoTransitionKey(null));
    return () => cancelAnimationFrame(id);
  }, [noTransitionKey]);

  useEffect(() => {
    if (paused || dragging || exiting || openLetterId) return;
    const id = window.setInterval(() => cycleForward(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, dragging, exiting, openLetterId, order]);

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

  function onCardClick(testimonial: (typeof TESTIMONIALS)[number]) {
    if (didDragRef.current) {
      didDragRef.current = false;
      return;
    }
    if (testimonial.letterImage) {
      setOpenLetterId(testimonial.id);
      return;
    }
    cycleForward(1);
  }

  function onKeyDown(e: ReactKeyboardEvent) {
    if (e.key === 'ArrowRight') cycleForward(1);
    if (e.key === 'ArrowLeft') cycleBackward();
  }

  return (
    <>
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
          aria-label="Testimonials from Josun English families and students. Drag the front card, or use the buttons below, to see more."
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {order.map((testimonialIndex, depth) => {
            if (depth > 2) return null;

            const testimonial = TESTIMONIALS[testimonialIndex];
            const accent = ACCENTS[testimonialIndex % ACCENTS.length];
            const colors = colorClasses[accent];
            const isFront = depth === 0;
            const isExiting = exiting?.id === testimonial.id;
            const skipTransition = noTransitionKey === testimonial.id;
            const isLetter = Boolean(testimonial.letterImage);

            let transform: string;
            let opacity = 1;
            if (isFront && dragging) {
              transform = `translateX(${dragX}px) rotate(${dragX * 0.04}deg)`;
            } else if (isExiting) {
              transform = `translateX(${exiting.direction * 480}px) rotate(${exiting.direction * 22}deg)`;
              opacity = 0;
            } else {
              const fan = depth === 1 ? 4 : depth === 2 ? -4 : 0;
              const shiftX = depth === 1 ? 16 : depth === 2 ? -16 : 0;
              transform = `translateY(${depth * 10}px) translateX(${shiftX}px) rotate(${fan}deg) scale(${1 - depth * 0.05})`;
            }

            return (
              <figure
                key={testimonial.id}
                aria-hidden={!isFront}
                onPointerDown={isFront ? onPointerDown : undefined}
                onPointerMove={isFront ? onPointerMove : undefined}
                onPointerUp={isFront ? onPointerUp : undefined}
                onPointerCancel={isFront ? onPointerUp : undefined}
                onClick={isFront ? () => onCardClick(testimonial) : undefined}
                className={`absolute inset-0 flex flex-col justify-center gap-3 overflow-hidden rounded-[1.75rem] ${colors.bg} p-7 shadow-xl sm:gap-4 sm:p-9 ${
                  isFront
                    ? isLetter
                      ? 'cursor-pointer'
                      : 'cursor-grab active:cursor-grabbing'
                    : 'pointer-events-none'
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
                  {isLetter ? '✉' : '“'}
                </span>

                {!isLetter && (
                  <div className="relative z-10 flex gap-1 text-white" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <StarIcon key={star} />
                    ))}
                  </div>
                )}

                {isLetter && testimonial.letterImage && (
                  <div className="relative z-10 overflow-hidden rounded-xl bg-white/20 ring-1 ring-white/25">
                    <img
                      src={testimonial.letterImage}
                      alt=""
                      aria-hidden="true"
                      className="mx-auto max-h-24 w-full object-contain object-top sm:max-h-28"
                    />
                  </div>
                )}

                <blockquote className="font-heading relative z-10 line-clamp-3 text-lg leading-snug font-semibold text-white md:text-xl">
                  {testimonial.quote}
                </blockquote>

                {isLetter && isFront && (
                  <p className="relative z-10 text-xs font-medium text-white/80">
                    Tap to read the full note
                  </p>
                )}

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
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-josun-blue shadow-md transition hover:bg-josun-cream active:scale-95"
          >
            <ChevronIcon direction="left" />
          </button>

          <div className="flex items-center gap-1">
            {TESTIMONIALS.map((testimonial, i) => (
              <button
                key={testimonial.id}
                type="button"
                aria-label={
                  testimonial.letterImage
                    ? 'Show student thank-you note'
                    : `Show testimonial from ${testimonial.author}`
                }
                aria-current={order[0] === i}
                onClick={() => jumpTo(i)}
                className="flex h-11 w-11 items-center justify-center rounded-full"
              >
                <span
                  className={`block rounded-full transition-all ${
                    order[0] === i
                      ? 'h-2.5 w-6 bg-josun-red'
                      : 'h-2.5 w-2.5 bg-josun-ink/20 hover:bg-josun-ink/35'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => cycleForward(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-josun-blue shadow-md transition hover:bg-josun-cream active:scale-95"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>

      {openLetter?.letterImage && (
        <StudentLetterLightbox
          open={Boolean(openLetterId)}
          onClose={() => setOpenLetterId(null)}
          caption={openLetter.quote}
          imageAlt={openLetter.letterAlt ?? openLetter.quote}
        />
      )}
    </>
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
