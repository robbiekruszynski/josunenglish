import { TEAM } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';
import { TeamAvatar } from './TeamAvatar';

export function Team() {
  return (
    <section id="team" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          {/* Decorative pair from the client's graphic pattern sheet,
              flanking the heading (a rainbow and a rain cloud, a
              natural "for every rainbow there's a little rain" pairing).
              Both sit on the plain cream background here, so any of the
              pattern-sheet graphics "pop" fine, no particular color
              constraint like the About cards below. Hidden below sm so
              they don't crowd the heading on narrow phones. */}
          <img
            src="/assets/graphics/decor-rainbow-cool.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 hidden w-20 -rotate-6 select-none sm:block md:w-28 lg:-left-4"
          />
          <img
            src="/assets/graphics/decor-raincloud.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 hidden w-24 rotate-6 select-none sm:block md:w-32 lg:-right-4"
          />

          <SectionHeading
            eyebrow="Team"
            title="The people your kid will actually learn from"
            description="Full bios coming soon, for now, meet the team."
          />
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {TEAM.map((member, index) => (
            <TeamAvatar key={`${member.role}-${index}`} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
