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

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-josun-ink/70 hover:text-josun-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm text-josun-ink/70">
          <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-josun-blue">
            {CONTACT_INFO.email}
          </a>
          <a href={CONTACT_INFO.whatsappHref} className="hover:text-josun-blue">
            WhatsApp: {CONTACT_INFO.whatsapp}
          </a>
          <a href={CONTACT_INFO.instagramHref} className="hover:text-josun-blue">
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
