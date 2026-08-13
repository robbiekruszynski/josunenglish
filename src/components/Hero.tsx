import { Logo } from './Logo';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 py-20 md:py-28">
      {/* Soft decorative shapes, echoing the rainbow/sun pattern sheet */}
      <div className="pointer-events-none absolute -top-10 -right-16 h-56 w-56 rounded-full bg-josun-yellow/30" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-josun-sky/30" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <Logo className="h-16 md:h-20" />

        <h1 className="font-heading text-4xl leading-tight font-semibold text-josun-blue md:text-6xl">
          We'd love to meet
          <br className="hidden md:block" /> your little learner.
        </h1>

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
