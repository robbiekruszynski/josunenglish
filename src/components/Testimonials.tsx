import { TESTIMONIALS } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-josun-blue/5 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Testimonials" title="What our families have to say" />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.quote}
              className="flex flex-col gap-4 rounded-3xl bg-white p-7 shadow-sm"
            >
              <blockquote className="text-josun-ink/85">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-auto">
                <p className="font-heading text-sm font-semibold text-josun-blue">
                  {testimonial.author}
                </p>
                <p className="text-xs text-josun-ink/50">{testimonial.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
