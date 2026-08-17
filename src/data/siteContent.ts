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
// full bios to be provided later and swapped in here. Names and roles
// per the owner's "Our Team" list (Director, Office Manager, Office
// Administrator, and the three Teaching Team members).
export const TEAM: TeamMember[] = [
  {
    name: 'Ms. Joanne',
    role: 'Director',
    bio: 'Bio coming soon.',
    avatarColor: 'blue',
    avatarInitial: 'J',
  },
  {
    name: 'Ms. Bunny',
    role: 'Office Manager',
    bio: 'Bio coming soon.',
    avatarColor: 'indigo',
    avatarInitial: 'B',
  },
  {
    name: 'Ms. Susin',
    role: 'Office Administrator',
    bio: 'Bio coming soon.',
    avatarColor: 'teal',
    avatarInitial: 'S',
  },
  {
    name: 'Ms. Natalie',
    role: 'Teaching Team',
    bio: 'Bio coming soon.',
    avatarColor: 'orange',
    avatarInitial: 'N',
  },
  {
    name: 'Ms. Lilo',
    role: 'Teaching Team',
    bio: 'Bio coming soon.',
    avatarColor: 'green',
    avatarInitial: 'L',
  },
  {
    name: 'Ms. Stella',
    role: 'Teaching Team',
    bio: 'Bio coming soon.',
    avatarColor: 'pink',
    avatarInitial: 'S',
  },
];

// Placeholder testimonials — swap for real family quotes when available.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'asks-to-go',
    quote:
      'Our daughter asks to go to class now. That alone tells us this is the right place.',
    author: 'A Josun parent',
    detail: 'Pre-Phonics family',
  },
  {
    id: 'teachers-know-son',
    quote:
      "The teachers actually know our son, not just his level. It doesn't feel like a factory.",
    author: 'A Josun parent',
    detail: 'Phonics family',
  },
  {
    id: 'small-classes',
    quote: 'Small classes made a real difference for a kid who used to hate reading.',
    author: 'A Josun parent',
    detail: 'Reading Comprehension family',
  },
  {
    id: 'student-letter',
    quote:
      'A note we received from one of our students, name redacted for privacy.',
    author: 'A Josun student',
    detail: 'Handwritten thank-you note',
    letterImage: '/assets/testimonials/student-letter.jpg',
    letterAlt:
      'A handwritten thank-you letter from a Josun English student to her teacher, sharing how much the support and encouragement meant to her.',
  },
];

// Every student photo we have, deduplicated (144 unique files -- a
// handful were saved twice under a second filename and got filtered
// out). All cleared for use per the owner. Swap or trim this list by
// editing here; filenames stay as the originals so it is easy to trace
// an image back to public/assets/students if one needs to be removed.
export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/assets/students/01df0054-e7ff-4ef0-b3ac-13f9f1546f92.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/060afb34-7df9-4752-a35d-575be81fd176.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/0724e7ee-12d2-4d33-9783-b81f910f1196.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/07f81df3-3666-4a9d-bd46-89dac6cd9843.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/08f56d43-cd5e-48b0-9433-e27717cb1360.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/09cc5a9c-03a3-4620-b942-fce99c6747f7.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/0ca15eb3-c148-46a4-ae47-17952e82da03.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/0ce4545f-94ff-4202-b66d-778bb1ba43a1.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/0fa96575-5b1d-4162-8a5b-6d0dce1d97b2.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/10e2b5ce-6cf6-4843-9a30-812ab87c699b.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/11851acb-54c8-49c2-a66b-4af554d20245.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/12b03343-e5c6-4ff1-8a7e-74109a7b59cd.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/130336d9-308e-4285-90eb-791ee7fca9f5.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/14c38360-1340-4c13-8e3e-1684121f1267.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/151c3352-0631-4f37-8584-0883c1d91e18.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/162a0e93-9982-4429-b5f4-7ee7cde15896.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/16be6982-579a-4c5a-8155-f0321f12cf47.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/1ca32e7b-365c-401f-b7e4-9b3e7d9704e8.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/1d01a3bc-0028-49e6-b0ef-5ace0bd18ac3.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/1f7722a1-4cf0-4218-bb27-4362cf5d39e8.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/211df872-2134-4fb2-b340-6acb9fd7f868.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/21798a23-41c4-4b5c-ae21-350e71b9088d.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/21a1f9bb-fc20-4dfa-b21e-332568187617.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/22ad346d-3816-4de9-bb70-c5ba26034d19.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/2356b286-40e5-4e0f-89ed-6d4e0f4b4e4b.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/238b532e-b37c-4570-8f6f-64f153bec114.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/269ec669-fec8-4b2a-b1d1-0098ab5e05fb.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/34b896c0-45f3-41cc-ae36-3fdaf42de4c2.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/36821fb5-5feb-4c5e-98e0-0e2a4f4c77d0.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/386037e8-13e3-48ef-9993-380bf2568fc1.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/386b7a69-5c3b-4382-82d3-8616d65f75a1.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/3be2dce5-b0ee-417e-a59d-b3e7467be4a9.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/3ca95e35-d340-4559-b311-6cc89e72b9e7.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/3d9b741d-8f02-43eb-8371-c534bb59ca70.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/3f392df1-0cd6-42d1-bb82-edfaadc2ecce.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/4051a371-9580-405d-9b68-e8a7da49da1b.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/41bd9fe5-40f8-4a8f-a01f-b68b8b124c7d.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/42f27247-afee-4277-b19e-8380d4c59c5f.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/460129bd-bef9-45fd-bdf5-e8971e03ce38.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/46f7c8ad-62bd-4848-aafb-32bc259541eb.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/4b769620-5f03-4518-8e66-96379e87c7c8.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/4bdd5753-3a28-4911-b38a-b0d4005b9bf5.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/4eee23eb-0590-4ebc-a13d-8d927c79ea46.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/4f4bc34e-88b6-4356-ba7b-ffc423226120.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/511f8605-5ce9-46e1-a267-d06548a32151.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/51b92508-b591-4c63-9ea2-3c807a8349bd.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/541706ba-14bc-4d50-809a-967c6586ce65.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/54dcfc11-a7ba-4879-937e-49f959c11787.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/5adc46a1-ed4a-4c85-ae19-a77c7325259b.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/5d3fa592-d6a9-4e22-bb7e-0905db289e31.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/5ef3bafc-ab12-496b-a067-f005fe296b3f.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/5f793bcf-343e-4c89-b441-dffc87227646.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/61a3a60c-258a-4c91-9e47-9ff4f6c7e6d8.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/643b0481-cafe-4437-aabb-6015a1f5b628.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/650747d9-dc6d-44c9-95f6-60e8cbdee3b8.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/67b0434a-6a1b-4a61-a4da-e0e9c3f2f982.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/6a95c436-7710-469c-a61f-aeda1c3024c8.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/6b853a96-c808-41bb-8f05-b964c60f507a.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/6bbd53fd-daa1-4402-a0e5-05e9a05c44d0.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/6eecf38a-9970-41a6-8ce9-e2e25380d595.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/6f12cbfa-4aed-4848-8083-d4d6bfd10641.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/73384f69-0b2b-4090-8141-b4db34af8bb2.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/74105552-4634-4ecc-992a-cfee892600af.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/74a56737-34a8-4796-b0e0-973fc9fe31b0.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/750ac859-89bc-4136-904f-7ddc54ca3854.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/757c36f3-5f9e-40b7-a2bb-9f4a85bdab27.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/75979353-6ed3-4ce9-bac6-84b308f0b838.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/7607c1eb-5283-4d35-9092-d59923dc9b44.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/762d2512-1a27-4c8e-bf95-f044c17464d3.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/7878684c-7ab4-4f7b-8b13-136bf1f0f6e7.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/79b314c2-52e6-4aa9-a769-6d5f4f1f6e8b.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/7ce5de1e-4598-4029-b045-9cea7f0f53f8.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/7d0f100e-688f-4222-8d6b-f573e63a4728.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/80934951-0586-4925-99aa-532021009831.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/80ce9b8e-3e0d-4787-aafa-840ff36bf0e0.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/82506ccf-1200-4579-aabb-88010d9a4d1b.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/8316338b-f7d5-41d3-8bcf-e48a517ba6c1.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/831f6f6d-9483-4176-b06a-112cb05cc9fd.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/83baca03-4393-4206-a8d7-98a98fc0b827.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/860ef51b-554a-49a1-9268-abe704113c21.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/88ed6e1f-0d55-4ed0-ac75-e67af33e9be6.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/8a76b3fe-9df6-40a9-adf9-2f0191435d1e.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/8d3ee7ed-5b59-4b14-8f9c-12fb31a76c8b.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/91d32df4-3035-4cbe-a808-1176c44a7225.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/91eee98b-dd7f-4296-9339-dc4646790bb2.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/989b3a2d-dc1a-4ab5-ae5a-53a70f6830e1.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/9c79c1a3-1e97-46ec-b55c-55c850a7eeef.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/9d8da1bd-c7ec-4095-8766-6b7efb5c7fed.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/9f753f46-e010-46de-b8c6-e355e07c8bfb.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/a0429d30-f01a-4827-a4b3-a4c2483cd5cb.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/a2430c80-2bd6-4994-a9f9-7be5d8946e57.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/a9664693-b662-4d05-b162-9138b8b0ca2f.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/ae2cc174-b6b4-45ae-a2b0-03454025aa2b.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/aebd9bb8-1229-4a13-a662-2373e8125be4.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/b219bd39-470d-42aa-841f-c2997f6f0045.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/b47d9d67-ce53-4207-8a57-a1297b3c77b4.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/b589d303-1537-4b84-bab6-2ae9b45a481e.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/b6c224c9-8791-4de5-8aa6-3be7f9b8b1c0.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/be2925ee-5e0e-46ad-b9e9-cecbe4af8bbf.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/c12981de-4ed1-404e-a81e-06c4b9f351b4.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/c56d8622-50ea-4b7a-abbd-7b8c75c4b65e.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/c7669057-575d-4eff-9649-adb4d6365668.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/c778abe4-24e1-42c7-adac-004ad5949abf.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/c85283dd-240a-4bf1-ba0b-f5cc0698ccf7.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/c9f51db0-650d-47a3-b5af-84e09dcc8d0b.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/caa34a43-9c8e-4d18-8117-ca1a15c20509.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/cc002404-4755-424a-b112-02c0b0b790fc.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/ce434327-a01f-4273-89f6-e8aaace832b3.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/cf116567-f901-4bd8-9d52-29d596a28858.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/cfbb828f-c371-44b8-b448-a158ad3ecf4e.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/cfe9c84f-cb79-45a1-b27b-d364fb47ddf6.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/d066c825-9dc8-4d20-b512-1176026ac966.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/d0e6b2b3-1cf8-4893-b7ce-4b0178d4cc2c.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/d24c9a95-1eda-439b-afbf-f625da4be5b5.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/d45ac681-4126-42bc-b830-f7cef76ba72f.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/d4a4228c-06e8-4ba2-9f40-9e15eb981087.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/d54a6232-ebd9-4dd7-a113-532284bc8240.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/d56b2ae2-d513-4afc-8898-7c76da238fc6.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/d5a41d2a-d33f-40db-a7f3-a2bde6ffedef.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/d6f855f7-1d24-4e6e-ad25-2de6a44ce095.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/d8fc6d39-6611-4e46-8f1d-0fa02a90b58c.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/d9ab472c-1e76-4278-99f5-18b90f54a338.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/da41c9a6-cf25-4f6f-9d54-e5c9aa730636.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/dee078ff-af3e-43dd-a697-c57bbce96c25.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/dfba86c7-cdc8-46e6-aef7-6d8fa7d5f714.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/dff622b6-0bc1-4ad7-8f21-9484d401630a.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/e0f43eb5-a848-418a-b1c0-f080caf7cab9.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/e1030308-d938-4873-848c-7b520e2ad9aa.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/e22d3877-fa2a-45ea-9a15-a13d05f34de6.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/e540df08-28c0-42ac-804e-8f116d3cd27e.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/e568004b-9045-40df-bf77-ab2bc9ecf90f.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/e5c20c83-6150-4bce-bd63-3eb7efb5f84f.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/e6f38bcb-c1cc-4b2f-a888-cf16f7ffd43c.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/ea99137a-78a7-4a5a-b1b6-725e1f4e5b67.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/ebe77fae-b29b-4914-9294-d29cf06bd182.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/ecf484d7-1a27-4ad0-b9d7-8f5861f9cbd3.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/f190eb1d-014d-4517-9305-e2ecb2e1690d.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/f5a15b0a-3a35-4e46-bb05-60922e643aef.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/f5a9d7b7-d77a-43c2-a62c-54882d88baca.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/fc17d249-0483-4a03-b813-f8fcd4e2f446.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/fe856bb5-61c1-4baa-9d0c-df0c51f74652.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/fe9e26a7-aa67-4180-9e11-4407ecdd4a33.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/feee729f-6fc3-435a-900e-e9263a974373.jpg', alt: 'Student at Josun English' },
  { src: '/assets/students/ff50946d-7003-4d89-a6d9-243fd2126f66.jpg', alt: 'Student at Josun English' },
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
  instagramHref: 'https://www.instagram.com/josunenglish.hk/',
  // Owner note: josunenglish.org is available and she's okay with it as
  // the eventual site domain — surfaced here, not wired to anything yet.
  domainNote: 'josunenglish.org',
};

// Links out to the studio's actual Google review page, no review text is
// pulled in here (that would mean putting words in real reviewers'
// mouths without being able to verify or update them), this just sends
// visitors to go read (or leave) real reviews on Google directly.
export const GOOGLE_REVIEWS_HREF = 'https://share.google/Gdbk8O4qIq0Bym4uL';
