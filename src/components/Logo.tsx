interface LogoProps {
  className?: string;
}

/**
 * Real Josun English wordmark, from the client's graphic assets
 * (public/assets/graphics/Josun_logo.png). Transparent PNG, so it drops
 * onto any background color.
 *
 * There's also a standalone sun-only mark in the assets folder
 * (JOSUN_Sun.jpg), but it's a flattened JPG with a white background and
 * a text label baked into the same image, not a clean cropped icon, so
 * it isn't usable as-is for a small nav-bar mark. Once there's a
 * transparent, cropped, icon-only export of just the sun, swap it in
 * here for contexts (like the header) that want the icon alone.
 */
export function Logo({ className = 'h-10' }: LogoProps) {
  return (
    <img
      src="/assets/graphics/Josun_logo.png"
      alt="Josun English"
      className={`w-auto object-contain ${className}`}
    />
  );
}
