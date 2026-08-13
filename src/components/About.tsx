import { SectionHeading } from './SectionHeading';

const PILLARS = [
  {
    title: 'Teaching Philosophy',
    body: "We teach kids, not curricula. Every class is built around how a specific student learns, not a one-size lesson plan run on repeat.",
    color: 'bg-josun-orange/15 text-josun-orange',
  },
  {
    title: 'Our Director',
    body: 'Josun English is led hands-on, not run from a distance, our director is directly involved in how classes are shaped and taught.',
    color: 'bg-josun-blue/15 text-josun-blue',
  },
  {
    title: 'Our Teachers',
    body: 'A small, closely-involved teaching team who actually know each student, not a rotating roster.',
    color: 'bg-josun-green/15 text-josun-green',
  },
];

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What makes us different"
          title="Not a volume-based, cookie-cutter learning center."
          description="Traditional centers optimize for throughput. We optimize for the kid in front of us."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-josun-ink/10 bg-white p-8 shadow-sm"
            >
              <span
                className={`mb-4 inline-flex rounded-full px-3 py-1 font-heading text-xs font-semibold ${pillar.color}`}
              >
                {pillar.title}
              </span>
              <p className="text-josun-ink/80">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
