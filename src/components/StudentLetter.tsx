/**
 * A real handwritten thank-you note from a student, placed right under
 * the Testimonials spotlight as a quieter, more personal counterpart to
 * the quote carousel above it.
 *
 * Two things were redacted out of the original photo before it went
 * anywhere near this site: the student's personal phone number (written
 * inside the letter) and her surname in the signature, first name only
 * is shown. A minor's phone number and full name don't belong on a
 * public marketing site regardless of how sweet the letter is, so those
 * are blacked out in the image itself rather than just cropped or
 * hidden with CSS.
 */
export function StudentLetter() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-xl">
        <figure className="rotate-1 rounded-2xl bg-white p-3 shadow-xl transition hover:rotate-0">
          <img
            src="/assets/testimonials/student-letter.jpg"
            alt="A handwritten thank-you letter from a Josun English student to her teacher, sharing how much the support and encouragement meant to her."
            className="w-full rounded-lg"
          />
          <figcaption className="px-2 pt-3 pb-1 text-center text-sm text-josun-ink/60">
            A note we received from one of our students, name redacted for
            privacy.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
