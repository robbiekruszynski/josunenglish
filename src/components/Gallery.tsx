import { GALLERY_IMAGES } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

/**
 * Photo gallery, sourced from the curated GALLERY_IMAGES list in
 * siteContent.ts (a hand-picked subset of public/assets/students, not
 * the full folder). Uses a CSS column layout so photos of different
 * aspect ratios sit together naturally instead of getting cropped into
 * a rigid grid.
 */
export function Gallery() {
  return (
    <section id="gallery" className="bg-josun-blue/5 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Gallery"
          title="A peek inside class"
          description="Real moments from real students, working, writing, and having fun doing it."
        />

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {GALLERY_IMAGES.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="mb-4 w-full rounded-2xl object-cover shadow-sm transition hover:brightness-95"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
