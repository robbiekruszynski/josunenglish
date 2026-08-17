import { useEffect } from 'react';

interface StudentLetterLightboxProps {
  open: boolean;
  onClose: () => void;
  caption: string;
  imageAlt: string;
}

/** Full-size student letter overlay — opened from the testimonial stack. */
export function StudentLetterLightbox({
  open,
  onClose,
  caption,
  imageAlt,
}: StudentLetterLightboxProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Student thank-you letter"
    >
      <button
        type="button"
        className="absolute inset-0 bg-josun-ink/60 backdrop-blur-sm"
        aria-label="Close letter"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-josun-ink/10 font-heading text-lg leading-none text-josun-ink transition hover:bg-josun-ink/20"
          aria-label="Close"
        >
          ×
        </button>

        <div className="overflow-y-auto p-4 sm:p-6">
          <img
            src="/assets/testimonials/student-letter.jpg"
            alt={imageAlt}
            className="w-full rounded-lg"
          />
          <p className="pt-4 text-center text-sm text-josun-ink/60">{caption}</p>
        </div>
      </div>
    </div>
  );
}
