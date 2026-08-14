import { useState } from 'react';
import type { BrandColor } from '../types';
import { SHOP_CATEGORIES } from '../data/siteContent';
import { colorClasses } from '../utils/colors';
import { Carousel } from './Carousel';
import { SectionHeading } from './SectionHeading';

// Purely decorative extra spines, no click target, no real content, so
// the shelf reads as a full row of books rather than three sparse
// blocks that give away there are only 3 real categories underneath.
const DECOY_COLORS: BrandColor[] = ['pink', 'teal', 'indigo', 'orange', 'green'];

/**
 * A playful "browse the shop" preview: a wooden shelf with book spines
 * standing on it, tap it and the real books (SHOP_CATEGORIES) pop out
 * into a carousel you can cycle through, reusing the shared Carousel
 * component so it behaves exactly like Gallery and Testimonials.
 *
 * Sits under Shop as a teaser for what's coming, not a real storefront,
 * Shop itself is still marked "coming soon."
 */
export function Bookshelf() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Take a peek"
          title="Pull a book off the shelf"
          description="A preview of what's coming to the shop, tap the shelf to flip through."
        />

        {open ? (
          <BookCarousel onClose={() => setOpen(false)} />
        ) : (
          <Shelf onOpen={() => setOpen(true)} />
        )}
      </div>
    </section>
  );
}

function Shelf({ onOpen }: { onOpen: () => void }) {
  const spineColors: BrandColor[] = [...SHOP_CATEGORIES.map((c) => c.color), ...DECOY_COLORS];

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group mx-auto flex w-full max-w-md flex-col items-center"
      aria-label="Browse the books on the shelf"
    >
      <div className="flex items-end gap-1.5">
        {spineColors.map((color, i) => {
          const colors = colorClasses[color];
          // Deterministic pseudo-random heights/widths so the row reads
          // as an uneven, lived-in stack of books rather than a uniform
          // bar chart.
          const height = 84 + ((i * 23) % 46);
          const width = 20 + ((i * 7) % 3) * 5;

          return (
            <div
              key={i}
              className={`rounded-t-sm ${colors.bg} shadow-sm transition-transform duration-300 ease-out group-hover:-translate-y-2.5`}
              style={{ height, width, transitionDelay: `${i * 25}ms` }}
            />
          );
        })}
      </div>

      {/* The shelf plank itself. */}
      <div className="mt-0 h-3.5 w-full rounded-[2px] bg-[#9a6b3f] shadow-md" />
      <div className="h-2 w-full rounded-b-[2px] bg-[#7a5230]" />

      <p className="font-heading mt-5 text-sm font-semibold text-josun-blue transition group-hover:text-josun-red">
        Tap to browse →
      </p>
    </button>
  );
}

function BookCarousel({ onClose }: { onClose: () => void }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClose}
        className="font-heading mb-6 flex items-center gap-1.5 text-sm font-semibold text-josun-blue hover:underline"
      >
        ← Back to the shelf
      </button>

      <Carousel ariaLabel="Book categories coming to the Josun English shop">
        {SHOP_CATEGORIES.map((category, index) => {
          const colors = colorClasses[category.color];

          return (
            <div
              key={category.name}
              className={`book-pop-in relative flex h-72 flex-col justify-between overflow-hidden rounded-2xl ${colors.bg} p-6 shadow-xl sm:h-80 sm:p-7`}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {/* Spine shadow down the left edge, so each card reads as
                  a book cover rather than a flat panel. */}
              <div aria-hidden="true" className="absolute inset-y-0 left-0 w-3 bg-black/15" />

              <div className="relative z-10">
                <p className="font-heading text-xs font-semibold tracking-wide text-white/70 uppercase">
                  Coming soon
                </p>
                <h3 className="font-heading mt-2 text-2xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>

              <p className="relative z-10 text-white/90">{category.description}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
