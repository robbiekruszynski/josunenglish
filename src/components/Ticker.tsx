import { TICKER_ITEMS } from '../data/siteContent';

/**
 * Scrolling banner ticker. Owner note: "could we add Book and Assessment
 * and have that be clickable?" — every item in TICKER_ITEMS is a real
 * link (see src/data/siteContent.ts), not static text. Snackbar/cafe
 * content is intentionally not in here — that's a future project.
 */
export function Ticker() {
  // Duplicate the items once so the CSS marquee can loop seamlessly.
  const loopItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="overflow-hidden border-y border-josun-ink/10 bg-josun-blue py-2">
      <div className="flex w-max animate-ticker gap-10 whitespace-nowrap">
        {loopItems.map((item, index) => (
          <a
            key={`${item.label}-${index}`}
            href={item.href}
            className="font-heading text-sm font-medium text-white/95 transition hover:text-josun-yellow"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
