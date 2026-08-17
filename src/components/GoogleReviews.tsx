import { GOOGLE_REVIEWS_HREF } from '../data/siteContent';

/**
 * Sits right after the Testimonials spotlight as a second, independently
 * verifiable form of social proof, real Google reviews, rather than
 * curated quotes we picked. Deliberately doesn't reproduce any review
 * text here: we can't keep quoted reviews in sync with what's actually
 * posted (people edit or remove reviews), so this links straight out to
 * the live Google listing instead of a snapshot that could go stale or
 * misrepresent what's currently there.
 */
export function GoogleReviews() {
  return (
    <section className="px-6 py-20">
      {/* Sized as a quieter follow-up card, not a second hero moment.
          It's a one-line nudge with a button sitting right under the
          Testimonials deck, which has actual quotes and interaction, so
          it shouldn't claim similar visual weight to that. */}
      <div className="mx-auto max-w-xl">
        <div className="flex flex-col items-center gap-4 rounded-[2rem] border-2 border-josun-blue/15 bg-white p-8 text-center shadow-sm md:p-10">
          <GoogleG className="h-8 w-8" />

          <div className="flex gap-1 text-josun-yellow" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>

          <h2 className="font-heading text-xl font-semibold text-josun-blue md:text-2xl">
            Loved by families on Google
          </h2>

          <p className="max-w-md text-sm text-josun-ink/70">
            Read what parents are saying about Josun English, straight from
            our Google reviews.
          </p>

          <a
            href={GOOGLE_REVIEWS_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-josun-blue px-6 py-2.5 font-heading text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
          >
            Read Our Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.5 5.6 6.1.6-4.6 4.1 1.4 6-5.4-3.2-5.4 3.2 1.4-6-4.6-4.1 6.1-.6z" />
    </svg>
  );
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.1 24.5c0-1.6-.1-3.1-.4-4.6H24v8.7h11.9c-.5 2.8-2.1 5.2-4.4 6.8v5.6h7.1c4.2-3.8 6.5-9.5 6.5-16.5z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.9 0 10.9-2 14.5-5.3l-7.1-5.6c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9h-7.3v5.7C7.9 40.9 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.8 28.2c-.4-1.3-.7-2.7-.7-4.2s.2-2.9.7-4.2v-5.7H4.5C3 17 2 20.4 2 24s1 7 4.5 9.9l7.3-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.8c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.2 29.9 2 24 2 15.4 2 7.9 7.1 4.5 14.1l7.3 5.7c1.7-5.2 6.5-9 12.2-9z"
      />
    </svg>
  );
}
