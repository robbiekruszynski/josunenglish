interface AnimatedSunProps {
  className?: string;
}

/**
 * Yellow Josun sun (decor-sun.png) for the hero top-right. Position
 * and size live in index.css (.hero-sun). Spin on the image, drift on
 * the inner wrapper — separate transforms so they never fight.
 */
export function AnimatedSun({ className }: AnimatedSunProps) {
  return (
    <div className={`hero-sun ${className ?? ''}`.trim()} aria-hidden="true">
      <div className="hero-sun-drift h-full w-full">
        <img
          src="/assets/graphics/decor-sun.png"
          alt=""
          className="animated-sun-logo h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
