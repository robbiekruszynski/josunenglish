import type { BrandColor } from '../types';
import { TESTIMONIALS } from '../data/siteContent';
import { colorClasses } from '../utils/colors';
import { Carousel } from './Carousel';
import { SectionHeading } from './SectionHeading';

// Cycled across cards so the section doesn't read as one flat block of
// same-colored panels.
const ACCENTS: BrandColor[] = ['orange', 'blue', 'teal', 'pink', 'green', 'indigo'];

/**
 * A bold, full-color "spotlight" carousel rather than a flat 3-up grid
 * of white cards, these quotes are the social proof a parent reads right
 * before deciding to book, so they get the same visual weight as the
 * Hero: one huge quote at a time, oversized type, a saturated color
 * panel, and a giant decorative quotation mark, reusing the same
 * Carousel component as the Gallery.
 */
export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Testimonials" title="What our families have to say" />
      </div>

      <Carousel ariaLabel="Testimonials from Josun English families" autoPlayMs={7000}>
        {TESTIMONIALS.map((testimonial, index) => {
          const accent = ACCENTS[index % ACCENTS.length];
          const colors = colorClasses[accent];

          return (
            <figure
              key={testimonial.quote}
              className={`relative flex h-64 flex-col justify-center gap-4 overflow-hidden rounded-[1.75rem] ${colors.bg} p-7 shadow-xl sm:h-72 md:h-80 md:p-9`}
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
      </Carousel>
    </section>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.5 5.6 6.1.6-4.6 4.1 1.4 6-5.4-3.2-5.4 3.2 1.4-6-4.6-4.1 6.1-.6z" />
    </svg>
  );
}
