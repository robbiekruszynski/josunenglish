import { useEffect, useState } from 'react';

interface AnimatedSunProps {
  className?: string;
}

const RAY_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];
const BODY_RADIUS = 50;
const RAY_INNER = BODY_RADIUS + 3;
const RAY_OUTER = BODY_RADIUS + 16;

/**
 * Sun with rays fully outside the disk, orbiting slowly via SVG
 * animateTransform (rotates around 0,0 — the sun centre). Face stays
 * fixed on top. Respects prefers-reduced-motion.
 */
export function AnimatedSun({ className = 'h-24 w-24' }: AnimatedSunProps) {
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: no-preference)');
    const update = () => setMotionOk(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div className={`animated-sun pointer-events-none shrink-0 overflow-visible ${className}`}>
      <svg
        viewBox="-78 -78 156 156"
        overflow="visible"
        role="img"
        aria-label="Friendly Josun sun mascot"
        className="h-full w-full overflow-visible"
      >
        <circle cx="0" cy="0" r={BODY_RADIUS} fill="#F5C242" opacity="0.3" />
        <circle cx="0" cy="0" r={BODY_RADIUS} fill="#F5C242" />

        <g className="animated-sun-rays">
          {motionOk && (
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur="36s"
              repeatCount="indefinite"
            />
          )}
          {RAY_ANGLES.map((angle, index) => (
            <g
              key={angle}
              transform={`rotate(${angle})`}
              className="animated-sun-ray"
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              <line
                x1="0"
                y1={-RAY_INNER}
                x2="0"
                y2={-RAY_OUTER}
                stroke="#F5C242"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </g>
          ))}
        </g>

        <circle cx="-10" cy="-4" r="5" fill="#33302A" />
        <circle cx="10" cy="-4" r="5" fill="#33302A" />
        <path
          d="M-14 10c6 7 22 7 28 0"
          stroke="#33302A"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="-26" cy="8" r="7" fill="#F4A3B8" opacity="0.75" />
        <circle cx="26" cy="8" r="7" fill="#F4A3B8" opacity="0.75" />
      </svg>
    </div>
  );
}
