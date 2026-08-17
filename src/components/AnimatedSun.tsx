interface AnimatedSunProps {
  className?: string;
}

/**
 * Yellow Josun sun from the brand pattern sheet (decor-sun.png) — used
 * in the hero top-right. Slow spin + corner drift; both respect
 * prefers-reduced-motion.
 */
export function AnimatedSun({ className = 'h-24 w-24' }: AnimatedSunProps) {
  return (
    <div className={`animated-sun pointer-events-none shrink-0 ${className}`}>
      <img
        src="/assets/graphics/decor-sun.png"
        alt=""
        aria-hidden="true"
        className="animated-sun-logo h-full w-full object-contain"
      />
    </div>
  );
}
