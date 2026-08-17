import { SectionHeading } from './SectionHeading';
import { TestimonialStack } from './TestimonialStack';

/**
 * A stacked "flick to see the next one" deck rather than a row of cards
 * or a horizontal carousel, both patterns the rest of the page already
 * uses (About and Shop are row grids, Gallery is a horizontal
 * carousel), so testimonials, the social proof a parent reads right
 * before deciding to book, get a distinct, more tactile presentation.
 * See TestimonialStack.tsx for the interaction itself.
 */
export function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Testimonials" title="What our family and students have to say" />
      </div>

      <TestimonialStack />
    </section>
  );
}
