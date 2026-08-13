import { TEAM } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';
import { TeamAvatar } from './TeamAvatar';

export function Team() {
  return (
    <section id="team" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Team"
          title="The people your kid will actually learn from"
          description="Full bios coming soon, for now, meet the team."
        />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {TEAM.map((member, index) => (
            <TeamAvatar key={`${member.role}-${index}`} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
