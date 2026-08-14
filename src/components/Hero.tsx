import { AnimatedSun } from './AnimatedSun';
import { Fireworks } from './Fireworks';
import { Logo } from './Logo';

export function Hero() {
  return (
    <section id="top" className="relative overflow-visible px-6 py-20 md:py-28">
      {/* Josun sun mascot (official favicon mark) in the top-right. Its
          negative top offset pulls it up into the same screen space as
          the sticky Header (z-50), so it needs a higher z-index or the
          header's background paints over it and clips the top of the
          sun. Safe to sit above the header since AnimatedSun is
          pointer-events-none, it can't block clicks on the nav.
          Noticeably smaller and tucked into the actual corner on
          mobile, at the full desktop size (18.2rem, bled off the
          section edge) it was large enough to overlap the centered
          Logo/heading column on narrow screens. */}
      <AnimatedSun className="hero-sun absolute top-0 right-0 z-[60] h-16 w-16 sm:h-24 sm:w-24 md:-top-12 md:-right-[5.5rem] md:h-[18.2rem] md:w-[18.2rem]" />

      <div className="hero-blob-b pointer-events-none absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-josun-sky/30" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <Logo className="h-16 md:h-20" />

        <div className="relative">
          {/* One-time welcome burst, plays on load, sits behind the
              heading only (not the whole hero) so it reads as a little
              celebration around the words rather than page-wide noise. */}
          <div className="absolute -inset-x-16 -inset-y-16 -z-10 md:-inset-x-24 md:-inset-y-20">
            <Fireworks intensity={0.45} />
          </div>

          <h1 className="font-heading text-4xl leading-tight font-semibold text-josun-blue md:text-6xl">
            We'd love to meet
            <br className="hidden md:block" /> your little learner.
          </h1>
        </div>

        <p className="max-w-xl text-lg text-josun-ink/80">
          Josun English is a phonics and language learning studio for young
          readers and writers in Hong Kong, small classes, real
          relationships, no cookie-cutter curriculum.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-josun-red px-8 py-3 font-heading text-base font-semibold text-white shadow-sm transition hover:brightness-105"
          >
            Book an Assessment
          </a>
          <a
            href="#classes"
            className="rounded-full border-2 border-josun-blue px-8 py-3 font-heading text-base font-semibold text-josun-blue transition hover:bg-josun-blue hover:text-white"
          >
            See Our Classes
          </a>
        </div>
      </div>
    </section>
  );
}
