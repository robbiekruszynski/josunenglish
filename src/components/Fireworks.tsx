import { useEffect, useRef, useState, type CSSProperties } from 'react';

const COLORS = [
  'var(--color-josun-pink)',
  'var(--color-josun-orange)',
  'var(--color-josun-yellow)',
  'var(--color-josun-green)',
  'var(--color-josun-sky)',
  'var(--color-josun-indigo)',
];

// Each burst: where it sits (as % of the container), how far its
// particles travel, and how long after mount it pops. Delays are spread
// across less than one full 1.1s animation cycle (see index.css) and
// kept close together on purpose, so several bursts are near their
// "pop" peak at the same moment instead of only ever one or two being
// visible while the rest are mid-fade.
const BURSTS = [
  { top: '15%', left: '12%', radius: 85, delay: 0 },
  { top: '10%', left: '50%', radius: 75, delay: 0.15 },
  { top: '18%', left: '85%', radius: 90, delay: 0.3 },
  { top: '48%', left: '92%', radius: 70, delay: 0.45 },
  { top: '60%', left: '55%', radius: 80, delay: 0.55 },
  { top: '52%', left: '5%', radius: 75, delay: 0.7 },
  { top: '30%', left: '30%', radius: 65, delay: 0.85 },
  { top: '35%', left: '68%', radius: 70, delay: 0.95 },
];

const PARTICLES_PER_BURST = 14;

/**
 * A confetti-burst welcome that lives behind the hero heading, pure CSS
 * keyframe animation (no canvas, no animation library), matching the
 * project's dependency-free approach to decorative motion elsewhere
 * (e.g. the ticker marquee).
 *
 * Tied to the hero fold's visibility via IntersectionObserver: it cycles
 * continuously while the fold is on screen, stops (unmounts, not just
 * pauses) as soon as you scroll past it, and plays fresh from the start
 * again if you scroll back up. The particles themselves are only mounted
 * while `visible` is true, so nothing animates, and nothing costs CPU,
 * off screen.
 *
 * Respects prefers-reduced-motion: the burst animation itself only exists
 * inside a `@media (prefers-reduced-motion: no-preference)` block in
 * index.css, so motion-sensitive visitors just see a calm hero with no
 * fireworks rather than a jarring burst forced on them.
 */
export function Fireworks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Only rendered while the fold is in view, so re-entering the
          viewport always starts a brand new animation from frame zero
          instead of resuming a paused one mid-burst. */}
      {visible &&
        BURSTS.map((burst, burstIndex) => (
          <div key={burstIndex} className="absolute" style={{ top: burst.top, left: burst.left }}>
            {Array.from({ length: PARTICLES_PER_BURST }).map((_, i) => {
              const angle = (360 / PARTICLES_PER_BURST) * i;
              const radians = (angle * Math.PI) / 180;
              const tx = Math.cos(radians) * burst.radius;
              const ty = Math.sin(radians) * burst.radius;

              return (
                <span
                  key={i}
                  className="firework-particle absolute h-3 w-3 rounded-full"
                  style={
                    {
                      backgroundColor: COLORS[(burstIndex + i) % COLORS.length],
                      animationDelay: `${burst.delay}s`,
                      '--tx': `${tx}px`,
                      '--ty': `${ty}px`,
                    } as CSSProperties
                  }
                />
              );
            })}
          </div>
        ))}
    </div>
  );
}
