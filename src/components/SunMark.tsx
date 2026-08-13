interface SunMarkProps {
  className?: string;
}

/**
 * Stand-in for the Josun English sun mascot (smiling sun with curly rays)
 * used across the logo, bag charm, and postcards in the brand sheet.
 * This is a simplified original illustration in the same spirit — swap
 * for the real logo asset (SVG/PNG export) whenever it's available.
 */
export function SunMark({ className = 'h-10 w-10' }: SunMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Josun English sun mascot"
    >
      <g stroke="#5A87C9" strokeWidth="4" strokeLinecap="round">
        <line x1="50" y1="4" x2="50" y2="16" />
        <line x1="50" y1="84" x2="50" y2="96" />
        <line x1="4" y1="50" x2="16" y2="50" />
        <line x1="84" y1="50" x2="96" y2="50" />
        <line x1="16" y1="16" x2="24" y2="24" />
        <line x1="76" y1="76" x2="84" y2="84" />
        <line x1="84" y1="16" x2="76" y2="24" />
        <line x1="24" y1="76" x2="16" y2="84" />
      </g>
      <circle cx="50" cy="50" r="26" fill="#F2984B" />
      <circle cx="41" cy="46" r="3.2" fill="#33302A" />
      <circle cx="59" cy="46" r="3.2" fill="#33302A" />
      <path
        d="M40 58c3.5 4 16.5 4 20 0"
        stroke="#33302A"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="32" cy="54" r="4" fill="#F4A3B8" opacity="0.7" />
      <circle cx="68" cy="54" r="4" fill="#F4A3B8" opacity="0.7" />
    </svg>
  );
}
