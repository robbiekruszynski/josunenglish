import { WORK_WITH_US_HREF } from '../data/siteContent';

/**
 * Owner note: "Could we add a WORK WITH US and have it link to a job
 * description?" — WORK_WITH_US_HREF lives in siteContent.ts so the real
 * job posting link (or an internal page, later) can be dropped in
 * without touching this component.
 */
export function WorkWithUs() {
  return (
    <section id="work-with-us" className="px-6 py-16">
      {/* Sized as a quieter closing note before Contact, not a hero
          moment, same reasoning as the Google Reviews card: a one-line
          nudge with a button shouldn't claim the same visual weight as
          sections with real content above it (Testimonials, Bookshelf). */}
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-3xl bg-josun-indigo px-8 py-10 text-center text-white md:py-12">
        <span className="font-heading text-sm font-semibold tracking-wide text-white/80 uppercase">
          Join Us
        </span>
        <h2 className="font-heading text-2xl font-semibold md:text-3xl">
          Work with us
        </h2>
        <p className="max-w-xl text-sm text-white/85">
          We're always glad to hear from teachers and team members who care
          about kids as much as we do.
        </p>
        <a
          href={WORK_WITH_US_HREF}
          className="rounded-full bg-white px-6 py-2.5 font-heading text-sm font-semibold text-josun-indigo transition hover:brightness-95"
        >
          See Open Roles
        </a>
      </div>
    </section>
  );
}
