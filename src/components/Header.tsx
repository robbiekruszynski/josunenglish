import { useState } from 'react';
import { NAV_LINKS } from '../data/siteContent';
import { Logo } from './Logo';
import { Ticker } from './Ticker';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-josun-cream/95 backdrop-blur">
      <Ticker />
      <div className="relative min-h-[84px] py-4">
        {/* Pinned to the true left edge of the viewport, independent of
            the centered max-w-6xl content column below. With the logo
            inside that column, it could only ever get as far left as
            the column's own edge, which on wide monitors is well short
            of the actual browser edge (large empty margins on either
            side). Taking it out of that column and anchoring it to the
            full-width header directly is what gets it genuinely flush
            to the viewport regardless of screen width. Sized at 1.5x
            the original 40px/44px (h-10/h-11) since the round mark read
            small at its old size. min-h bumped up from 68px to 84px, a
            safety margin above the logo's own 66px height so it can't
            get squeezed into overlapping the Ticker above it if the nav
            row next to it ever needs more vertical room than usual. */}
        <a
          href="#top"
          className="absolute top-1/2 left-2 -translate-y-1/2 md:left-4"
        >
          <Logo variant="round" className="h-[60px] md:h-[66px]" />
        </a>

        <div className="mx-auto flex max-w-6xl items-center justify-end px-6">
          {/* Full nav only switches on at lg (1024px), not md (768px).
              With 8 links plus the "Book an Assessment" pill, md-width
              screens (tablets, smaller laptop windows) didn't have
              enough room, individual links like "Work With Us" and the
              button itself were wrapping onto two lines instead of
              cleanly hiding behind the hamburger menu. whitespace-nowrap
              is a second line of defense so nothing wraps even if a
              window gets resized to something unusually narrow within
              the lg+ range. */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-sm font-medium whitespace-nowrap text-josun-ink/80 transition hover:text-josun-blue"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-josun-red px-5 py-2 font-heading text-sm font-semibold whitespace-nowrap text-white shadow-sm transition hover:brightness-105"
            >
              Book an Assessment
            </a>
          </nav>

          <button
            type="button"
            className="flex flex-col gap-1.5 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="h-0.5 w-6 bg-josun-ink" />
            <span className="h-0.5 w-6 bg-josun-ink" />
            <span className="h-0.5 w-6 bg-josun-ink" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-josun-ink/10 bg-josun-cream px-6 pb-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 font-heading text-sm font-medium text-josun-ink/80"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 rounded-full bg-josun-red px-5 py-2 text-center font-heading text-sm font-semibold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Book an Assessment
          </a>
        </nav>
      )}
    </header>
  );
}
