import type { BrandColor } from '../types';
import { colorClasses } from '../utils/colors';
import { SectionHeading } from './SectionHeading';

const PILLARS: {
  title: string;
  body: string;
  color: BrandColor;
  icon: 'heart' | 'compass' | 'people';
  rotate: string;
  // Decorative graphic from the client's pattern sheet, picked per card
  // for contrast against that card's background rather than reused
  // uniformly: a warm red/yellow flower reads as a flat blob on the
  // orange card but pops on blue, the cool blue/green hand+flower is
  // the reverse, and the pink/blue/green petals trio was chosen for
  // green because its pink and blue tones are the two colors in that
  // set furthest from the card's own green.
  decor: string;
}[] = [
  {
    title: 'Teaching Philosophy',
    body: 'We teach kids, not curricula. Every class is built around how a specific student learns, not a one-size lesson plan run on repeat.',
    color: 'orange',
    icon: 'heart',
    rotate: '-rotate-2',
    decor: 'decor-blueflower',
  },
  {
    title: 'Our Director',
    body: 'Josun English is led hands-on, not run from a distance. Our director is directly involved in how classes are shaped and taught.',
    color: 'blue',
    icon: 'compass',
    rotate: 'rotate-1',
    decor: 'decor-redflower',
  },
  {
    title: 'Our Teachers',
    body: 'A small, closely involved teaching team who actually know each student, not a rotating roster.',
    color: 'green',
    icon: 'people',
    rotate: '-rotate-1',
    decor: 'decor-petals',
  },
];

/**
 * "What makes us different" is the first thing a parent reads after the
 * hero, so these three pillars get the boldest treatment on the page:
 * full solid-color cards (not pale badges on white), a giant ghost
 * numeral for depth, an icon badge, and a slight alternating tilt at
 * rest that straightens on hover, playful energy rather than a flat
 * feature-list look.
 */
export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What makes us different"
          title="Not a volume-based, cookie-cutter learning center."
          description="Traditional centers optimize for throughput. We optimize for the kid in front of us."
        />

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const colors = colorClasses[pillar.color];

            return (
              <div
                key={pillar.title}
                className={`group relative overflow-hidden rounded-3xl ${colors.bg} p-8 shadow-lg transition duration-300 ${pillar.rotate} hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {/* Decorative graphic from the client's pattern sheet in
                    the top-right corner, replacing the ghost numeral
                    that used to sit here, picked per-card above so its
                    colors read clearly against this specific card
                    background instead of blending in. Positioned with a
                    positive top offset (not negative) on purpose: the
                    card itself is overflow-hidden for its rounded
                    corners, so a negative offset pushed the image above
                    the card's own top edge and got the top of it sliced
                    off. */}
                <img
                  src={`/assets/graphics/${pillar.decor}.png`}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute top-4 right-3 w-16 rotate-6 opacity-95 select-none md:w-20"
                />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/25 text-white">
                    <PillarIcon icon={pillar.icon} />
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-white">
                    {pillar.title}
                  </h3>

                  <p className="text-white/90">{pillar.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PillarIcon({ icon }: { icon: 'heart' | 'compass' | 'people' }) {
  if (icon === 'heart') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M12 21s-6.7-4.35-9.3-8.1C.9 10.1 1.7 6.6 4.6 5.2c2.2-1.05 4.6-.2 5.9 1.6.4.55.9 1.2 1.5 1.2s1.1-.65 1.5-1.2c1.3-1.8 3.7-2.65 5.9-1.6 2.9 1.4 3.7 4.9 1.9 7.7C18.7 16.65 12 21 12 21z" />
      </svg>
    );
  }
  if (icon === 'compass') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path
          d="M15 9l-2 6-6 2 2-6 6-2z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M2.5 19c.5-3.2 2.8-5 5.5-5s5 1.8 5.5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14.5 14.5c2.3.1 4.2 1.6 4.7 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
