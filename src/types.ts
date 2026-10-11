export type PageId = 'home' | 'services' | 'portfolio' | 'pricing' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'monitor' | 'search' | 'megaphone' | 'headset' | 'shopping-cart' | 'palette';
  accentColor: string;
  features: string[];
  deliverables: string[];
  priceStartingAt: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'E-Commerce' | 'Corporate' | 'Real Estate' | 'Healthcare' | 'Hospitality';
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  image: string;
  desktopPreview: {
    heroTitle: string;
    heroSubtitle: string;
    accentColor: string;
  };
  clientLocation: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceZAR: number;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  turnaround: string;
  idealFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface OfficeLocation {
  name: string;
  branch: string;
  address: string;
  postalCode?: string;
  city: string;
  province: string;
  phone: string;
  email: string;
  hours: string;
  mapEmbedUrl: string;
}
