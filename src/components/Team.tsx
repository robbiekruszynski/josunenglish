import { TEAM } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';
import { TeamAvatar } from './TeamAvatar';

export function Team() {
  return (
    <section id="team" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          {/* Decorative pair from the client's graphic pattern sheet,
              flanking the heading, the sun mascot on the right (same
              character as the logo and favicon) and a rainbow on the
              left. Both sit on the plain cream background here, so any
              of the pattern-sheet graphics "pop" fine, no particular
              color constraint like the About cards below. Hidden below
              sm so they don't crowd the heading on narrow phones. A
              slow pendulum rock (rock-left/rock-right, see index.css)
              gives them a little life instead of sitting frozen. */}
          <img
            src="/assets/graphics/decor-rainbow-cool.png"
            alt=""
            aria-hidden="true"
            className="rock-left pointer-events-none absolute top-0 left-0 hidden w-20 select-none sm:block md:w-28 lg:-left-4"
          />
          <img
            src="/assets/graphics/decor-sun.png"
            alt=""
            aria-hidden="true"
            className="rock-right pointer-events-none absolute top-0 right-0 hidden w-20 select-none sm:block md:w-28 lg:-right-4"
          />

          <SectionHeading
            eyebrow="Team"
            title="The people your kid will actually learn from"
            description="Full bios coming soon, for now, meet the team."
          />
        </div>

        {/* 6 team members now (Director, Office Manager, Office
            Administrator, 3x Teaching Team) — grid-cols-3 keeps them in
            two clean even rows instead of 4-then-2 orphaning the last row. */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {TEAM.map((member, index) => (
            <TeamAvatar key={`${member.role}-${index}`} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
