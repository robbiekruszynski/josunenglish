import { Fireworks } from './Fireworks';
import { Logo } from './Logo';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 py-20 md:py-28">
      {/* Soft decorative shapes, echoing the rainbow/sun pattern sheet.
          A slow, subtle drift (see .hero-blob-a/b in index.css) makes
          the hero feel like it's breathing instead of sitting static,
          each shape moves on its own duration so they never sync up
          into an obviously repeating loop. */}
      <div className="hero-blob-a pointer-events-none absolute -top-10 -right-16 h-56 w-56 rounded-full bg-josun-yellow/30" />
      <div className="hero-blob-b pointer-events-none absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-josun-sky/30" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <Logo className="h-16 md:h-20" />

        <div className="relative">
          {/* One-time welcome burst, plays on load, sits behind the
              heading only (not the whole hero) so it reads as a little
              celebration around the words rather than page-wide noise. */}
          <div className="absolute -inset-x-16 -inset-y-16 -z-10 md:-inset-x-24 md:-inset-y-20">
            <Fireworks />
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
