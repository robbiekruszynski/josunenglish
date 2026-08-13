import type { TeamMember } from '../types';
import { colorClasses } from '../utils/colors';

interface TeamAvatarProps {
  member: TeamMember;
}

/**
 * Owner note: "little avatars instead of pics of teachers" — this is a
 * simple illustrated placeholder (initial in a soft rounded blob) so we
 * don't need real headshots to ship the Team section. Swap for actual
 * illustrated avatars once the owner provides teacher bios/artwork.
 */
export function TeamAvatar({ member }: TeamAvatarProps) {
  const colors = colorClasses[member.avatarColor];

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div
        className={`flex h-24 w-24 items-center justify-center rounded-full ${colors.bgSoft} border-2 ${colors.border}`}
      >
        <span className={`font-heading text-3xl font-semibold ${colors.text}`}>
          {member.avatarInitial}
        </span>
      </div>
      <div>
        <p className="font-heading text-base font-semibold text-josun-ink">
          {member.name}
        </p>
        <p className="text-sm text-josun-ink/60">{member.role}</p>
      </div>
    </div>
  );
}
