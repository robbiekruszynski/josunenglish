import { useState, type FormEvent } from 'react';
import { ASSESSMENT_FEE_NOTE, CONTACT_INFO } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

/**
 * Wired up to Netlify Forms, no custom backend needed since the site
 * already deploys there. Two things make that work:
 *
 * 1. A hidden, plain-HTML twin of this form lives in index.html. Netlify
 *    detects forms by scanning the static HTML at deploy time, and this
 *    form only exists in the DOM after React renders it client-side, so
 *    without that static twin Netlify would never know this form
 *    exists and submissions would silently 404.
 * 2. On submit, instead of a real page navigation, this POSTs the form
 *    data to "/" as `application/x-www-form-urlencoded`, matching what
 *    a native HTML form submission to a Netlify-detected form looks
 *    like, then swaps in the confirmation message without a full page
 *    reload.
 *
 * Where submissions land: Netlify's dashboard, under this site's Forms
 * tab. Email notifications (e.g. to hello@josunenglish.com) are
 * configured there, not in code, see the notification setup steps
 * wherever this change gets handed off.
 */
export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => body.append(key, value.toString()));

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);

      setStatus('submitted');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div className="relative">
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Book an assessment"
            description={ASSESSMENT_FEE_NOTE}
          />

          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex min-h-11 items-center font-heading text-josun-blue hover:underline"
            >
              {CONTACT_INFO.email}
            </a>
            <a
              href={CONTACT_INFO.whatsappHref}
              className="inline-flex min-h-11 items-center font-heading text-josun-blue hover:underline"
            >
              WhatsApp: {CONTACT_INFO.whatsapp}
            </a>
            <a
              href={CONTACT_INFO.instagramHref}
              className="inline-flex min-h-11 items-center font-heading text-josun-blue hover:underline"
            >
              {CONTACT_INFO.instagram}
            </a>
          </div>

          {/* Decorative pattern-sheet flower filling the dead space
              between the contact links and the form, right side of this
              column, hidden below md since there isn't room to spare
              once the form drops beneath the links. */}
          <img
            src="/assets/graphics/decor-yellowflower.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-[65%] right-10 hidden w-24 -translate-y-1/2 -rotate-6 opacity-90 select-none md:block lg:right-16 lg:w-32"
          />
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-3xl border border-josun-ink/10 bg-white p-8 shadow-sm"
        >
          {/* Required so Netlify can match this submission back to the
              hidden static form of the same name in index.html. */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot: real visitors never see or fill this in (it's
              visually hidden, not just off-screen, so screen readers
              skip it too via aria-hidden), spam bots that blindly fill
              every field trip it, and Netlify silently discards the
              submission. */}
          <p className="hidden">
            <label>
              Leave this field blank
              <input name="bot-field" aria-hidden="true" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <label className="flex flex-col gap-1 text-sm font-medium text-josun-ink/80">
            Parent name
            <input
              required
              type="text"
              name="parentName"
              className="min-h-11 rounded-xl border border-josun-ink/15 px-4 py-3 outline-none focus:border-josun-blue"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-josun-ink/80">
            Child's age
            <input
              required
              type="text"
              name="childAge"
              className="min-h-11 rounded-xl border border-josun-ink/15 px-4 py-3 outline-none focus:border-josun-blue"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-josun-ink/80">
            Email or WhatsApp
            <input
              required
              type="text"
              name="contactInfo"
              className="min-h-11 rounded-xl border border-josun-ink/15 px-4 py-3 outline-none focus:border-josun-blue"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-josun-ink/80">
            Anything we should know?
            <textarea
              rows={3}
              name="notes"
              className="min-h-11 rounded-xl border border-josun-ink/15 px-4 py-3 outline-none focus:border-josun-blue"
            />
          </label>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-josun-red px-6 py-3 font-heading font-semibold text-white transition hover:brightness-105 disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending…' : "Send & we'll get back to you"}
          </button>

          {status === 'submitted' && (
            <p className="text-sm font-medium text-josun-green">
              Thanks! We'll be in touch soon.
            </p>
          )}

          {status === 'error' && (
            <p className="text-sm font-medium text-josun-red">
              Something went wrong sending that, mind trying again, or reaching out directly at{' '}
              {CONTACT_INFO.email}?
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
