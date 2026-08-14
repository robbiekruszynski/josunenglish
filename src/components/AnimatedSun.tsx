interface AnimatedSunProps {
  className?: string;
}

/**
 * Josun sun mascot from the official favicon — same mark as the site
 * icon (favicon-48). Uses larger srcSet variants so it stays crisp in
 * the hero. Slow spin + corner drift; both respect prefers-reduced-motion.
 */
export function AnimatedSun({ className = 'h-24 w-24' }: AnimatedSunProps) {
  return (
    <div className={`animated-sun pointer-events-none shrink-0 ${className}`}>
      <img
        src="/favicon-48.png"
        srcSet="/favicon-48.png 48w, /favicon-192.png 192w, /favicon-512.png 512w"
        sizes="(max-width: 768px) 291px, 291px"
        alt=""
        aria-hidden="true"
        className="animated-sun-logo h-full w-full object-contain"
      />
    </div>
  );
}
