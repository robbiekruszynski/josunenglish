interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

/**
 * Shared heading block used at the top of every section, so the
 * eyebrow / title / description pattern stays consistent site-wide
 * instead of being re-typed (and re-styled) in each section file.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`mb-12 flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="font-heading text-sm font-semibold tracking-wide text-josun-red uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-semibold text-josun-blue md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-josun-ink/75">{description}</p>
      )}
    </div>
  );
}
