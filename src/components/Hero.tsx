import { AnimatedSun } from './AnimatedSun';
import { Fireworks } from './Fireworks';
import { Logo } from './Logo';

export function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip px-6 py-16 sm:py-20 md:py-28">
      <AnimatedSun />

      <div className="hero-blob-b pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-josun-sky/30 sm:h-64 sm:w-64" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 text-center sm:gap-10">
        <Logo className="h-14 sm:h-16 md:h-20" />

        <div className="relative w-full max-w-xl px-2 pr-[4.5rem] sm:max-w-2xl sm:pr-[5.5rem] md:max-w-3xl md:pr-[7rem] lg:max-w-4xl lg:px-4 lg:pr-4">
          <div className="absolute -inset-x-12 -inset-y-12 -z-10 sm:-inset-x-16 sm:-inset-y-16 md:-inset-x-24 md:-inset-y-20">
            <Fireworks intensity={0.45} />
          </div>

          <h1 className="font-heading text-3xl leading-tight font-semibold text-josun-blue sm:text-4xl md:text-5xl lg:text-6xl">
            We'd love to meet
            <br className="hidden md:block" /> your little learner.
          </h1>
        </div>

        <p className="max-w-xl px-2 text-base text-josun-ink/80 sm:text-lg">
          Josun English is a phonics and language learning studio for young
          readers and writers in Hong Kong, small classes, real
          relationships, no cookie-cutter curriculum.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 px-2 sm:gap-4">
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-josun-red px-6 py-3 font-heading text-sm font-semibold text-white shadow-sm transition hover:brightness-105 sm:px-8 sm:text-base"
          >
            Book an Assessment
          </a>
          <a
            href="#classes"
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-josun-blue px-6 py-3 font-heading text-sm font-semibold text-josun-blue transition hover:bg-josun-blue hover:text-white sm:px-8 sm:text-base"
          >
            See Our Classes
          </a>
        </div>
      </div>
    </section>
  );
}
