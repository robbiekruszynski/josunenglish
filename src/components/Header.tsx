import { useState } from 'react';
import { NAV_LINKS } from '../data/siteContent';
import { Logo } from './Logo';
import { Ticker } from './Ticker';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-josun-cream/95 backdrop-blur">
      <Ticker />
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4 pr-6 pl-1 md:pl-2">
        <div className="flex items-center gap-5 md:gap-8">
          {/* Pushed nearly flush to the left edge on purpose (minimal
              left padding vs. the right side); sized at 1.5x the
              original 40px/44px (h-10/h-11) since the round mark read
              small at its old size next to the rest of the nav. */}
          <a href="#top" className="shrink-0">
            <Logo variant="round" className="h-[60px] md:h-[66px]" />
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-sm font-medium text-josun-ink/80 transition hover:text-josun-blue"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-josun-red px-5 py-2 font-heading text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
            >
              Book an Assessment
            </a>
          </nav>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="h-0.5 w-6 bg-josun-ink" />
          <span className="h-0.5 w-6 bg-josun-ink" />
          <span className="h-0.5 w-6 bg-josun-ink" />
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-josun-ink/10 bg-josun-cream px-6 pb-4 md:hidden">
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
