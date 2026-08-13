import type {
  ClassInfo,
  GalleryImage,
  NavLink,
  ShopCategory,
  Testimonial,
  TeamMember,
  TickerItem,
} from '../types';

/**
 * All copy for the site lives here, separate from the components that
 * render it. Swap placeholder text (marked below) for real content
 * whenever it's ready — no component code needs to change.
 */

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Classes', href: '#classes' },
  { label: 'Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Shop', href: '#shop' },
  { label: 'Work With Us', href: '#work-with-us' },
  { label: 'Contact', href: '#contact' },
];

// Owner note: banner ticker should have "Book" and "Assessment" as
// clickable items, both pointing at the contact / booking section.
export const TICKER_ITEMS: TickerItem[] = [
  { label: 'Book an Assessment', href: '#contact' },
  { label: 'Pre-Phonics · Phonics · Writing & Grammar', href: '#classes' },
  { label: "We'd love to meet your little learner", href: '#contact' },
  { label: 'Book an Assessment', href: '#contact' },
  { label: 'Small classes, real relationships', href: '#about' },
  { label: 'Book an Assessment', href: '#contact' },
];

export const CORE_CLASSES: ClassInfo[] = [
  {
    name: 'Pre-Phonics',
    tagline: 'Our youngest learners',
    description:
      'Playful, sound-first foundations for little ones just getting started with letters and language.',
    color: 'orange',
  },
  {
    name: 'Phonics',
    tagline: 'Core reading skills',
    description:
      'Structured, joyful phonics instruction that builds real reading confidence, not just memorization.',
    color: 'blue',
  },
  {
    name: 'Writing & Grammar',
    tagline: 'Putting it on the page',
    description:
      'Turning spoken language into confident writing, with grammar taught in context, not worksheets alone.',
    color: 'green',
  },
];

export const SUPPLEMENTARY_CLASSES: ClassInfo[] = [
  {
    name: 'Chatterbox',
    tagline: 'Speaking & confidence',
    description:
      'Conversation-driven sessions built around speaking up, being heard, and having fun doing it.',
    color: 'pink',
  },
  {
    name: 'Reading Comprehension',
    tagline: 'Beyond the words',
    description:
      'Helping kids understand and connect with what they read, not just decode it.',
    color: 'teal',
  },
  {
    name: 'Creative Writing',
    tagline: 'Stories of their own',
    description:
      'A space for imagination first, technique second, where every student is a real author.',
    color: 'indigo',
  },
];

// Owner note: little avatars instead of real teacher photos for now —
// full bios to be provided later and swapped in here.
export const TEAM: TeamMember[] = [
  {
    name: 'Director',
    role: 'Founder & Director',
    bio: 'Bio coming soon.',
    avatarColor: 'blue',
    avatarInitial: 'D',
  },
  {
    name: 'Teacher',
    role: 'Lead Phonics Teacher',
    bio: 'Bio coming soon.',
    avatarColor: 'orange',
    avatarInitial: 'T',
  },
  {
    name: 'Teacher',
    role: 'Writing & Grammar Teacher',
    bio: 'Bio coming soon.',
    avatarColor: 'green',
    avatarInitial: 'T',
  },
  {
    name: 'Teacher',
    role: 'Chatterbox Teacher',
    bio: 'Bio coming soon.',
    avatarColor: 'pink',
    avatarInitial: 'T',
  },
];

// Placeholder testimonials — swap for real family quotes when available.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Our daughter asks to go to class now. That alone tells us this is the right place.',
    author: 'A Josun parent',
    detail: 'Pre-Phonics family',
  },
  {
    quote:
      "The teachers actually know our son, not just his level. It doesn't feel like a factory.",
    author: 'A Josun parent',
    detail: 'Phonics family',
  },
  {
    quote: 'Small classes made a real difference for a kid who used to hate reading.',
    author: 'A Josun parent',
    detail: 'Reading Comprehension family',
  },
];

// A curated selection from public/assets/students (157 photos total, all
// cleared for use). This is a hand-picked subset, not the full folder —
// swap any entry out, or add more, by editing this list. Filenames stay
// as the originals so it's easy to trace an image back to the source
// folder if the owner wants to swap one out.
export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/assets/students/67b0434a-6a1b-4a61-a4da-e0e9c3f2f982.jpg', alt: 'Student sharing a piece of writing about a birthday celebration' },
  { src: '/assets/students/12b03343-e5c6-4ff1-8a7e-74109a7b59cd.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/6b853a96-c808-41bb-8f05-b964c60f507a.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/14c38360-1340-4c13-8e3e-1684121f1267.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/6eecf38a-9970-41a6-8ce9-e2e25380d595.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/162a0e93-9982-4429-b5f4-7ee7cde15896.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/73384f69-0b2b-4090-8141-b4db34af8bb2.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/1ca32e7b-365c-401f-b7e4-9b3e7d9704e8.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/74a56737-34a8-4796-b0e0-973fc9fe31b0.jpg', alt: 'Student at Josun English' },
];

// Owner note: shop is a future tiny retail element. Snack Bar is
// intentionally excluded — that's a later project, not part of this build.
export const SHOP_CATEGORIES: ShopCategory[] = [
  {
    name: 'Branded Workbooks',
    description: 'Our own workbooks and learning materials, made for how we actually teach.',
    color: 'yellow',
  },
  {
    name: 'Story Books',
    description: 'A curated shelf of books we love reading with our students.',
    color: 'sky',
  },
  {
    name: 'Stationery & Lifestyle',
    description: 'Fun, well-made things for kids who love to learn.',
    color: 'red',
  },
];

export const ASSESSMENT_FEE_NOTE =
  'Assessments are $350 HKD, and the full amount is credited toward your first invoice once you sign up.';

// Owner note: link this out to the actual job description once it exists.
export const WORK_WITH_US_HREF = '#';

export const CONTACT_INFO = {
  email: 'hello@josunenglish.com',
  whatsapp: '6114-8185',
  whatsappHref: 'https://wa.me/85261148185',
  instagram: '@josunenglish.hk',
  instagramHref: 'https://instagram.com/josunenglish.hk',
  // Owner note: josunenglish.org is available and she's okay with it as
  // the eventual site domain — surfaced here, not wired to anything yet.
  domainNote: 'josunenglish.org',
};
