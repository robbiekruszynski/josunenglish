interface LogoProps {
  className?: string;
  /** wordmark = horizontal logo; round = circular Josun English mark */
  variant?: 'wordmark' | 'round';
}

/**
 * Josun English logos from the client's graphic assets folder.
 * - wordmark: Josun_logo.png (hero, footer)
 * - round: JOSUN_logoround_new.png (header nav)
 *
 * The round mark used to be JOSUN_logoround.png, which had a baked-in
 * white background, hence the old `mix-blend-lighten` hack to fake
 * transparency against the cream header. The replacement is a real
 * transparent PNG (trimmed and downscaled from the client's source
 * file), so that blend-mode workaround is gone, it's no longer needed
 * and would just double-darken a genuinely transparent image.
 */
export function Logo({ className = 'h-10', variant = 'wordmark' }: LogoProps) {
  const src =
    variant === 'round'
      ? '/assets/graphics/JOSUN_logoround_new.png'
      : '/assets/graphics/Josun_logo.png';

  return <img src={src} alt="Josun English" className={`w-auto object-contain ${className}`} />;
}
