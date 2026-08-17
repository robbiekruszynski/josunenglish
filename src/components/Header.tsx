import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data/siteContent';
import { Logo } from './Logo';
import { Ticker } from './Ticker';

/** Shown from md–lg; full list appears at lg+. */
const LG_ONLY_HREFS = new Set(['#shop', '#work-with-us']);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-josun-cream/95 backdrop-blur">
      <Ticker />
      <div className="relative min-h-[84px] py-4">
        <a
          href="#top"
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 md:left-4"
        >
          <Logo variant="round" className="h-[60px] md:h-[66px]" />
        </a>

        <div className="mx-auto flex max-w-6xl items-center justify-end px-6 pl-[4.25rem] md:pl-[5rem]">
          <nav
            className="hidden items-center gap-3 md:flex lg:gap-7"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-heading text-xs font-medium whitespace-nowrap text-josun-ink/80 transition hover:text-josun-blue lg:text-sm ${
                  LG_ONLY_HREFS.has(link.href) ? 'hidden lg:inline' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-josun-red px-4 py-2.5 font-heading text-xs font-semibold whitespace-nowrap text-white shadow-sm transition hover:brightness-105 lg:px-5 lg:text-sm"
            >
              Book an Assessment
            </a>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
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
        <nav
          className="flex flex-col gap-1 border-t border-josun-ink/10 bg-josun-cream px-6 pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-11 items-center py-2 font-heading text-sm font-medium text-josun-ink/80"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 flex min-h-11 items-center justify-center rounded-full bg-josun-red px-5 py-3 text-center font-heading text-sm font-semibold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Book an Assessment
          </a>
        </nav>
      )}
    </header>
  );
}
