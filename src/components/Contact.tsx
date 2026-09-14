import { useState, type FormEvent } from 'react';
import { ASSESSMENT_FEE_NOTE, CONTACT_INFO, FORM_RECIPIENT_EMAIL } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

/**
 * Submissions are emailed to FORM_RECIPIENT_EMAIL via FormSubmit (recipient
 * is set in code, not the Netlify dashboard). Netlify Forms is kept as a
 * best-effort backup so entries also appear under the site's Forms tab.
 *
 * FormSubmit requires a one-time activation: on the first real submission,
 * josunenglish@gmail.com gets a confirmation link that must be clicked
 * before emails start arriving.
 *
 * The hidden static form twin in index.html is still required for Netlify
 * to register the backup form at deploy time.
 */
export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const data = new FormData(form);

    const parentName = data.get('parentName')?.toString() ?? '';
    const childAge = data.get('childAge')?.toString() ?? '';
    const contactInfo = data.get('contactInfo')?.toString() ?? '';
    const notes = data.get('notes')?.toString() ?? '';

    try {
      const emailResponse = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(FORM_RECIPIENT_EMAIL)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            'Parent name': parentName,
            "Child's age": childAge,
            'Email or WhatsApp': contactInfo,
            Notes: notes || '(none)',
            _subject: 'New assessment booking — Josun English',
            _template: 'table',
            _captcha: 'false',
          }),
        },
      );

      if (!emailResponse.ok) throw new Error(`Email delivery failed: ${emailResponse.status}`);

      const result = (await emailResponse.json()) as { success?: boolean };
      if (!result.success) throw new Error('Email delivery rejected');

      // Best-effort Netlify backup — don't block success if this fails.
      const netlifyBody = new URLSearchParams();
      data.forEach((value, key) => netlifyBody.append(key, value.toString()));
      void fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: netlifyBody.toString(),
      }).catch(() => {});

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
          <input type="hidden" name="form-name" value="contact" />

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
