import { SHOP_CATEGORIES } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';
import { colorClasses } from '../utils/colors';

/**
 * Owner note: "Pls remove SNACKBAR - this will be a project for future."
 * The snack bar / cafe concept from the notes is intentionally left out
 * of SHOP_CATEGORIES (see siteContent.ts) — add it back there, not here,
 * whenever that's ready to launch.
 */
export function Shop() {
  return (
    <section id="shop" className="bg-white/60 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Coming Soon"
          title="Shop"
          description="A small shelf of things we love, workbooks, story books, and stationery, launching soon."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {SHOP_CATEGORIES.map((category) => {
            const colors = colorClasses[category.color];
            return (
              <div
                key={category.name}
                className="flex flex-col gap-3 rounded-3xl border border-josun-ink/10 bg-white p-7 shadow-sm"
              >
                <div className={`h-2 w-12 rounded-full ${colors.bg}`} />
                <h3 className="font-heading text-lg font-semibold text-josun-ink">
                  {category.name}
                </h3>
                <p className="text-josun-ink/70">{category.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
