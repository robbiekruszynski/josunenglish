export interface NavLink {
  label: string;
  href: string;
}

export interface TickerItem {
  label: string;
  href: string;
}

export interface ClassInfo {
  name: string;
  tagline: string;
  description: string;
  color: BrandColor;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarColor: BrandColor;
  avatarInitial: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  detail: string;
}

export interface ShopCategory {
  name: string;
  description: string;
  color: BrandColor;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export type BrandColor =
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'sky'
  | 'blue'
  | 'indigo';
