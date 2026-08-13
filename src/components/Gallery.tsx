import { GALLERY_IMAGES } from '../data/siteContent';
import { Carousel } from './Carousel';
import { SectionHeading } from './SectionHeading';

/**
 * Photo gallery, sourced from the curated GALLERY_IMAGES list in
 * siteContent.ts (a hand-picked subset of public/assets/students, not
 * the full folder). Rendered as a Carousel (see components/Carousel.tsx),
 * which is generic — this file's only job is turning image data into
 * slides.
 */
export function Gallery() {
  return (
    <section id="gallery" className="bg-josun-blue/5 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="A peek inside class"
          description="Real moments from real students, working, writing, and having fun doing it."
        />
      </div>

      <Carousel ariaLabel="Photos from Josun English classes">
        {GALLERY_IMAGES.map((image, index) => {
          // Alternating resting tilt, straightened on hover, so each
          // photo feels like it's being picked up off a scattered pile
          // rather than sitting flat in a grid.
          const tilt = index % 2 === 0 ? '-rotate-2' : 'rotate-2';

          return (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={`aspect-[4/5] w-full rounded-3xl object-cover shadow-md transition duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:rotate-0 hover:scale-105 hover:shadow-2xl ${tilt}`}
            />
          );
        })}
      </Carousel>
    </section>
  );
}
