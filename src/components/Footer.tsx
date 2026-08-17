import { CONTACT_INFO, NAV_LINKS } from '../data/siteContent';
import { Logo } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-josun-ink/10 bg-white px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo className="h-8" />

          <p className="max-w-xs text-sm text-josun-ink/60">
            Phonics and language learning for young readers and writers in
            Hong Kong.
          </p>
        </div>

        <nav className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center px-2 text-sm text-josun-ink/70 hover:text-josun-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-1 text-sm text-josun-ink/70">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="inline-flex min-h-11 items-center hover:text-josun-blue"
          >
            {CONTACT_INFO.email}
          </a>
          <a
            href={CONTACT_INFO.whatsappHref}
            className="inline-flex min-h-11 items-center hover:text-josun-blue"
          >
            WhatsApp: {CONTACT_INFO.whatsapp}
          </a>
          <a
            href={CONTACT_INFO.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 hover:text-josun-blue"
          >
            <InstagramIcon />
            {CONTACT_INFO.instagram}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-josun-ink/10 pt-6 text-xs text-josun-ink/40">
        <p>© {year} Josun English. All rights reserved.</p>
        {/* Owner note: josunenglish.org is available and she's okay with
            using it — left here as a quiet build note, not shown to site
            visitors, until the domain is actually set up. */}
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}
