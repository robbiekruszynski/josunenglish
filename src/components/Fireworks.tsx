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
  { top: '10%', left: '50%', radius: 75, delay: 0.15 },
  { top: '15%', left: '12%', radius: 85, delay: 0 },
  { top: '18%', left: '85%', radius: 90, delay: 0.3 },
  { top: '30%', left: '30%', radius: 65, delay: 0.85 },
  { top: '35%', left: '68%', radius: 70, delay: 0.95 },
  { top: '48%', left: '92%', radius: 70, delay: 0.45 },
  { top: '52%', left: '5%', radius: 75, delay: 0.7 },
  { top: '60%', left: '55%', radius: 80, delay: 0.55 },
  // Lower half, previously empty — this is the area that reads as
  // "bare" on cards where the fireworks wrapper extends well below the
  // content (e.g. the student letter card).
  { top: '70%', left: '20%', radius: 75, delay: 0.1 },
  { top: '75%', left: '78%', radius: 70, delay: 0.4 },
  { top: '85%', left: '45%', radius: 85, delay: 0.65 },
  { top: '90%', left: '8%', radius: 65, delay: 0.9 },
  { top: '92%', left: '90%', radius: 70, delay: 0.2 },
];

const PARTICLES_PER_BURST = 14;

interface FireworksProps {
  /** Scales particle count per burst (e.g. 0.7 ≈ 30% fewer particles). */
  intensity?: number;
}

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
export function Fireworks({ intensity = 1 }: FireworksProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const particlesPerBurst = Math.max(
    4,
    Math.round(PARTICLES_PER_BURST * intensity),
  );
  const activeBursts =
    intensity >= 1
      ? BURSTS
      : BURSTS.slice(0, Math.max(4, Math.round(BURSTS.length * intensity)));

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
        activeBursts.map((burst, burstIndex) => (
          <div key={burstIndex} className="absolute" style={{ top: burst.top, left: burst.left }}>
            {Array.from({ length: particlesPerBurst }).map((_, i) => {
              const angle = (360 / particlesPerBurst) * i;
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
