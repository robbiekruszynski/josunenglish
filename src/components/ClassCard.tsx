import type { ClassInfo } from '../types';
import { colorClasses } from '../utils/colors';

interface ClassCardProps {
  classInfo: ClassInfo;
}

export function ClassCard({ classInfo }: ClassCardProps) {
  const colors = colorClasses[classInfo.color];

  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-josun-ink/10 bg-white p-7 shadow-sm">
      <div className={`h-2 w-12 rounded-full ${colors.bg}`} />
      <span className={`font-heading text-sm font-semibold ${colors.text}`}>
        {classInfo.tagline}
      </span>
      <h3 className="font-heading text-xl font-semibold text-josun-ink">
        {classInfo.name}
      </h3>
      <p className="text-josun-ink/75">{classInfo.description}</p>
    </div>
  );
}
