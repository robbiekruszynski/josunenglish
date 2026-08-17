import { CORE_CLASSES, SUPPLEMENTARY_CLASSES } from '../data/siteContent';
import { ClassCard } from './ClassCard';
import { SectionHeading } from './SectionHeading';

export function Classes() {
  return (
    <section id="classes" className="bg-white/60 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Classes"
          title="Core classes"
          description="The foundation, phonics through to writing and grammar."
        />

        <div className="mb-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {CORE_CLASSES.map((classInfo) => (
            <ClassCard key={classInfo.name} classInfo={classInfo} />
          ))}
        </div>

        <SectionHeading
          eyebrow="Classes"
          title="Supplementary classes"
          description="For students who want to go further we offer, speaking, comprehension, and creative writing."
        />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {SUPPLEMENTARY_CLASSES.map((classInfo) => (
            <ClassCard key={classInfo.name} classInfo={classInfo} />
          ))}
        </div>
      </div>
    </section>
  );
}
