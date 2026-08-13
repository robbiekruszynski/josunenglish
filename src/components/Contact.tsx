import { useState, type FormEvent } from 'react';
import { ASSESSMENT_FEE_NOTE, CONTACT_INFO } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend wired up yet — this just confirms the form works.
    // Swap this handler for a real submission (email service, form API,
    // etc.) when one is ready.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Book an assessment"
            description={ASSESSMENT_FEE_NOTE}
          />

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="font-heading text-josun-blue hover:underline"
            >
              {CONTACT_INFO.email}
            </a>
            <a
              href={CONTACT_INFO.whatsappHref}
              className="font-heading text-josun-blue hover:underline"
            >
              WhatsApp: {CONTACT_INFO.whatsapp}
            </a>
            <a
              href={CONTACT_INFO.instagramHref}
              className="font-heading text-josun-blue hover:underline"
            >
              {CONTACT_INFO.instagram}
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-3xl border border-josun-ink/10 bg-white p-8 shadow-sm"
        >
          <label className="flex flex-col gap-1 text-sm font-medium text-josun-ink/80">
            Parent name
            <input
              required
              type="text"
              className="rounded-xl border border-josun-ink/15 px-4 py-2 outline-none focus:border-josun-blue"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-josun-ink/80">
            Child's age
            <input
              required
              type="text"
              className="rounded-xl border border-josun-ink/15 px-4 py-2 outline-none focus:border-josun-blue"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-josun-ink/80">
            Email or WhatsApp
            <input
              required
              type="text"
              className="rounded-xl border border-josun-ink/15 px-4 py-2 outline-none focus:border-josun-blue"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-josun-ink/80">
            Anything we should know?
            <textarea
              rows={3}
              className="rounded-xl border border-josun-ink/15 px-4 py-2 outline-none focus:border-josun-blue"
            />
          </label>

          <button
            type="submit"
            className="mt-2 rounded-full bg-josun-red px-6 py-3 font-heading font-semibold text-white transition hover:brightness-105"
          >
            Send &amp; we'll get back to you
          </button>

          {submitted && (
            <p className="text-sm font-medium text-josun-green">
              Thanks! We'll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
