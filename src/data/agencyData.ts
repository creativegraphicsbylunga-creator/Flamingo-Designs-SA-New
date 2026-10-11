import { OfficeLocation, PortfolioProject, PricingPlan, ServiceItem, Testimonial } from '../types';

export const AGENCY_INFO = {
  name: 'Flamingo Designs SA',
  tagline: 'Grow Digital. Go Global.',
  subtitle: 'We design modern, responsive and result-driven websites that help your business grow online.',
  phoneDisplay: '083 337 4954',
  phoneCall: 'tel:0833374954',
  whatsappNumber: '27833374954',
  whatsappLink: 'https://wa.me/27833374954?text=Hi%20Flamingo%20Designs%20SA!%20I%20would%20like%20to%20inquire%20about%20a%20website%20for%20my%20business.',
  email: 'info@flamingodesignssa.co.za',
  emailLink: 'mailto:info@flamingodesignssa.co.za',
  offices: [
    {
      name: 'Edenvale Branch (Gauteng)',
      branch: 'Edenvale Hub',
      address: 'Van Riebeeck Ave, Edenvale',
      postalCode: '1609',
      city: 'Edenvale',
      province: 'Gauteng',
      phone: '083 337 4954',
      email: 'info@flamingodesignssa.co.za',
      hours: 'Mon - Fri: 08:30 - 17:30 | Sat: 09:00 - 13:00',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14324.96541604113!2d28.1407886!3d-26.147775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95122cb43407c9%3A0x64f433501a3028bc!2sVan%20Riebeeck%20Ave%2C%20Edenvale%2C%201609!5e0!3m2!1sen!2sza!4v1710000000000!5m2!1sen!2sza'
    },
    {
      name: 'Estcourt Branch (KwaZulu-Natal)',
      branch: 'KZN Midlands Hub',
      address: 'Harding Street, Estcourt',
      postalCode: '3310',
      city: 'Estcourt',
      province: 'KwaZulu-Natal',
      phone: '083 337 4954',
      email: 'info@flamingodesignssa.co.za',
      hours: 'Mon - Fri: 08:30 - 17:00 | Sat: 09:00 - 12:30',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13961.32832811442!2d29.865492!3d-29.006932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef27a7c9339e729%3A0xbdc6fcf4a5c0b11!2sHarding%20St%2C%20Estcourt%2C%203310!5e0!3m2!1sen!2sza!4v1710000000001!5m2!1sen!2sza'
    }
  ] as OfficeLocation[]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'WEBSITE DESIGN',
    shortDesc: 'Stunning, modern & responsive designs tailored to your brand.',
    fullDesc: 'We craft bespoke, lightning-fast, and mobile-first websites designed to elevate your brand presence and convert visitors into high-paying clients. Every pixel is engineered for clarity and user engagement.',
    iconName: 'monitor',
    accentColor: 'from-purple-600 to-indigo-600',
    features: [
      '100% Mobile & Tablet Responsive',
      'High-Speed Core Web Vitals Optimized',
      'Intuitive UX/UI Wireframing & Prototyping',
      'Content Management System (CMS) Integration',
      'South African Domain & Cloud Hosting Setup'
    ],
    deliverables: [
      'Custom Homepage + Subpages',
      'Interactive Contact Forms & WhatsApp Button',
      'Google Maps & Location Integration',
      'Social Media & CRM Linking',
      'SSL Security Certificate'
    ],
    priceStartingAt: 'R3,499'
  },
  {
    id: 'seo-optimization',
    title: 'SEO OPTIMIZATION',
    shortDesc: 'Rank higher on Google and get more organic traffic.',
    fullDesc: 'Dominate Google search results in Edenvale, KZN, across South Africa, and internationally. We target high-intent buying keywords, optimize your site architecture, and secure local map pack placements.',
    iconName: 'search',
    accentColor: 'from-blue-600 to-cyan-500',
    features: [
      'Comprehensive Keyword & Competitor Research',
      'Google Business Profile Optimization & Maps Ranking',
      'On-Page Meta Tags, Schemas & Header Optimization',
      'Technical SEO, Speed Audit & XML Sitemaps',
      'Monthly Ranking & Organic Traffic Reports'
    ],
    deliverables: [
      'Keyword Mapping Strategy',
      'Google Search Console Setup',
      'Local Citation Directory Submissions',
      'Speed & Performance Polish',
      'Quarterly Growth Review'
    ],
    priceStartingAt: 'R2,499/mo'
  },
  {
    id: 'digital-marketing',
    title: 'DIGITAL MARKETING',
    shortDesc: 'Boost your brand with targeted marketing strategies.',
    fullDesc: 'Scale your revenue with high-yield customer acquisition funnels. From Meta (Facebook & Instagram) ads to Google Search and retargeting campaigns, we generate measurable leads.',
    iconName: 'megaphone',
    accentColor: 'from-pink-600 to-rose-500',
    features: [
      'Targeted Google Search & Display Ads (PPC)',
      'Meta (Facebook & Instagram) Lead Generation Campaigns',
      'High-Converting Landing Page Design',
      'Ad Copywriting & Custom Creative Banners',
      'Conversion Tracking & Pixel Setup'
    ],
    deliverables: [
      'Audience Persona & Competitor Analysis',
      'Multi-Variant Ad Creatives (A/B Testing)',
      'Real-Time ROI Dashboard Access',
      'Weekly Ad Budget Optimization',
      'Dedicated Campaign Strategist'
    ],
    priceStartingAt: 'R3,999/mo'
  },
  {
    id: 'ongoing-support',
    title: 'ONGOING SUPPORT',
    shortDesc: "We're here to support you at every step of your growth.",
    fullDesc: 'Keep your website pristine, secure, and always up to date. Our dedicated maintenance plans ensure your digital storefront operates smoothly with regular backups, security patches, and on-demand content edits.',
    iconName: 'headset',
    accentColor: 'from-amber-500 to-orange-500',
    features: [
      'Daily Automated Cloud Backups',
      '24/7 Uptime & Security Monitoring',
      'Plugin, Core & Theme Updates',
      'Priority Turnaround on Content Edits',
      'Direct WhatsApp & Phone Tech Support'
    ],
    deliverables: [
      'Monthly Security & Health Audit',
      'Minor Content & Banner Tweaks Included',
      'Malware Removal Guarantee',
      'Speed Maintenance',
      'Emergency Recovery Support'
    ],
    priceStartingAt: 'R899/mo'
  },
  {
    id: 'ecommerce',
    title: 'E-COMMERCE STORES',
    shortDesc: 'Sell your products online with South African payment gateways.',
    fullDesc: 'Robust online storefronts built with seamless checkouts, automated inventory management, courier tracking, and instant payments via PayFast, Yoco, Ozow, and PayPal.',
    iconName: 'shopping-cart',
    accentColor: 'from-emerald-600 to-teal-500',
    features: [
      'South African Gateways: PayFast, Yoco, Ozow & Peach',
      'Automated Courier & Shipping Calculation',
      'Inventory, Stock & Order Management',
      'Abandoned Cart Recovery Email Flows',
      'Customer Accounts & Order Tracking'
    ],
    deliverables: [
      'Product Catalog Setup',
      'Secure SSL Checkout & Payment Linking',
      'Coupon & Discount Code Engine',
      'Mobile App-Like Shopping Experience',
      'Staff Training Video Tutorials'
    ],
    priceStartingAt: 'R11,999'
  },
  {
    id: 'branding-identity',
    title: 'BRANDING & GRAPHIC DESIGN',
    shortDesc: 'Memorable brand identity, logos, business cards, and print media.',
    fullDesc: 'Make an unforgettable first impression. Our creative graphic design team delivers modern logos, corporate stationery, company profiles, social media branding kits, and vehicle signage.',
    iconName: 'palette',
    accentColor: 'from-violet-600 to-fuchsia-600',
    features: [
      'Custom Vector Logo Design (Multiple Concepts)',
      'Brand Color Palette & Typography Guidelines',
      'Business Card & Letterhead Stationery',
      'Corporate Company Profiles & Brochures',
      'Social Media Kit & Banner Templates'
    ],
    deliverables: [
      'Print-Ready Vector Files (AI, EPS, PDF, SVG)',
      'Digital Web-Optimized PNG & JPG Assets',
      'Full Copyright Ownership',
      'Comprehensive Brand Style Guide',
      '3 Revisions Rounds'
    ],
    priceStartingAt: 'R1,999'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Business',
    tagline: 'Ideal for local businesses, tradesmen & emerging startups.',
    priceZAR: 3499,
    turnaround: '3 - 5 Business Days',
    idealFor: 'Small businesses needing a clean, professional online footprint',
    features: [
      'Up to 4 Custom Designed Pages',
      '100% Mobile & Tablet Responsive',
      'Interactive Contact Form & Google Map',
      'Direct WhatsApp Chat Click-to-Message',
      'Basic On-Page SEO Setup',
      'Social Media Profile Linking',
      '1 Year Free .co.za Domain & Hosting Setup',
      '14 Days Post-Launch Support'
    ],
    notIncluded: [
      'E-Commerce & Online Store',
      'Advanced Custom Animations',
      'Monthly SEO Campaign'
    ]
  },
  {
    id: 'growth-pro',
    name: 'Growth Professional',
    tagline: 'Our most popular package for established companies looking to dominate.',
    priceZAR: 6999,
    popular: true,
    turnaround: '7 - 10 Business Days',
    idealFor: 'Growing SMEs, service agencies, medical practices & corporate firms',
    features: [
      'Up to 8 Custom High-End Pages',
      'Bespoke Visual Design with Micro-Interactions',
      'Advanced On-Page & Local Google Maps SEO',
      'Interactive Quote Calculator or Booking Form',
      'High Speed Core Web Vitals Optimization',
      'Lead Generation Pop-ups & Analytics Setup',
      'Google Search Console & Google Business Setup',
      'Content Management Training Video',
      '30 Days Free Comprehensive Maintenance'
    ],
    notIncluded: [
      'Complex E-Commerce Store with 50+ Products'
    ]
  },
  {
    id: 'ecommerce-elite',
    name: 'E-Commerce Elite',
    tagline: 'A complete South African online store ready to take orders 24/7.',
    priceZAR: 11999,
    turnaround: '10 - 15 Business Days',
    idealFor: 'Retailers, boutiques, wholesalers, and physical stores expanding online',
    features: [
      'Complete Online Store (Up to 50 Products loaded)',
      'PayFast, Yoco, Ozow & Card Payment Setup',
      'Courier & Nationwide Delivery Rates Engine',
      'Product Reviews, Wishlists & Coupon System',
      'Inventory Tracking & Out-of-Stock Notifications',
      'Abandoned Cart Recovery Email Automation',
      'Customer Dashboard & Invoice Generation',
      'Speed Optimised for Heavy Shopping Traffic',
      '60 Days Dedicated Support & Staff Training'
    ]
  },
  {
    id: 'enterprise-custom',
    name: 'Enterprise Bespoke',
    tagline: 'Custom web applications, client portals & high-scale platforms.',
    priceZAR: 19999,
    turnaround: '15 - 25 Business Days',
    idealFor: 'Corporations, booking portals, custom SaaS & multi-branch enterprises',
    features: [
      'Unlimited Pages & Custom Layouts',
      'Custom Database & API Integrations',
      'User Authentication & Role-Based Portals',
      'Dynamic Quoting & Custom Calculators',
      'Dedicated Project Manager & UI/UX Designer',
      'Top-Tier Enterprise Cloud Architecture',
      'Quarterly Performance & Growth Audits',
      'Priority SLA 24/7 Tech Support'
    ]
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'geoko-living',
    title: 'Geoko Modern Living & Furniture',
    category: 'E-Commerce',
    tagline: 'Modern Scandinavian furniture brand with PayFast checkout.',
    description: 'Designed a high-conversion e-commerce storefront showcasing luxury home furniture with 3D product view, responsive mobile shopping, and automated South African courier rates.',
    metrics: [
      { label: 'Conversion Rate', value: '+142%' },
      { label: 'Page Load Speed', value: '0.7s' },
      { label: 'Monthly Sales', value: 'R420k+' }
    ],
    tags: ['E-Commerce', 'PayFast', 'React', 'Mobile First'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    desktopPreview: {
      heroTitle: 'Modern Furniture For Your Home',
      heroSubtitle: 'Handcrafted interior pieces crafted for timeless South African living.',
      accentColor: 'indigo'
    },
    clientLocation: 'Edenvale, Gauteng'
  },
  {
    id: 'kzn-safari-lodge',
    title: 'Drakensberg Escarpment Retreats',
    category: 'Hospitality',
    tagline: 'Luxury boutique mountain lodge & wilderness safari booking portal.',
    description: 'A breathtaking experiential tourism platform featuring immersive imagery, online room reservations, real-time availability calendar, and multi-currency billing.',
    metrics: [
      { label: 'Direct Bookings', value: '+215%' },
      { label: 'Organic Traffic', value: '18k/mo' },
      { label: 'Mobile Bounce Rate', value: '-38%' }
    ],
    tags: ['Hospitality', 'Booking Engine', 'SEO', 'Luxury'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    desktopPreview: {
      heroTitle: 'Escape to the Heart of the Drakensberg',
      heroSubtitle: 'Luxury chalets, majestic mountain views, and untamed tranquility.',
      accentColor: 'emerald'
    },
    clientLocation: 'Estcourt & Midlands, KZN'
  },
  {
    id: 'apex-legal',
    title: 'Apex Commercial Law & Associates',
    category: 'Corporate',
    tagline: 'Leading corporate legal practice with appointment booking.',
    description: 'Corporate web presence projecting authority, confidence, and trust. Features practice area deep dives, attorney bios, encrypted document intake, and case consultation scheduler.',
    metrics: [
      { label: 'Inbound Inquiries', value: '+180%' },
      { label: 'Google Search Rank', value: 'Top 3' },
      { label: 'Lighthouse Score', value: '99/100' }
    ],
    tags: ['Corporate', 'Lead Generation', 'Fast Speed', 'Custom Forms'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    desktopPreview: {
      heroTitle: 'Strategic Legal Counsel for Visionary Businesses',
      heroSubtitle: 'Defending commercial integrity across South Africa since 2011.',
      accentColor: 'blue'
    },
    clientLocation: 'Sandton & Edenvale'
  },
  {
    id: 'health-optima',
    title: 'Optima Wellness & Medical Centre',
    category: 'Healthcare',
    tagline: 'Modern private healthcare practice with patient onboarding.',
    description: 'Clean, soothing medical platform allowing patients to book consultations, browse doctor specialties, verify medical aid schemes, and access telehealth advice.',
    metrics: [
      { label: 'Patient Signups', value: '850+/mo' },
      { label: 'Phone Wait Time', value: '-65%' },
      { label: 'Google Rating', value: '4.9 ★' }
    ],
    tags: ['Healthcare', 'Appointments', 'Mobile UX', 'Accessibility'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    desktopPreview: {
      heroTitle: 'Compassionate Care, World-Class Medicine',
      heroSubtitle: 'Your trusted family and specialist clinic in the heart of Gauteng.',
      accentColor: 'teal'
    },
    clientLocation: 'Edenvale & East Rand'
  },
  {
    id: 'prime-realty',
    title: 'Horizon KwaZulu Properties',
    category: 'Real Estate',
    tagline: 'High-end property showcase with interactive maps & virtual tours.',
    description: 'Dynamic real estate portal with instant property search, filtered property catalog by bedrooms/budget, WhatsApp agent connection, and interactive bond repayment calculator.',
    metrics: [
      { label: 'Property Inquiries', value: '+260%' },
      { label: 'Average Time On Site', value: '4m 12s' },
      { label: 'Listings Viewed', value: '64k/mo' }
    ],
    tags: ['Real Estate', 'Filters', 'Bond Calculator', 'WhatsApp'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    desktopPreview: {
      heroTitle: 'Find Your Dream Property in KZN',
      heroSubtitle: 'From Midlands farm estates to coastal luxury residences.',
      accentColor: 'violet'
    },
    clientLocation: 'Estcourt & Pietermaritzburg'
  },
  {
    id: 'vanguard-industrial',
    title: 'Vanguard Engineering & Tooling',
    category: 'Corporate',
    tagline: 'Industrial manufacturing & heavy equipment catalog.',
    description: 'Robust B2B digital catalog featuring downloadable engineering specs, RFQ (Request for Quote) generator, and live technician dispatch booking.',
    metrics: [
      { label: 'B2B RFQ Submissions', value: '+310%' },
      { label: 'Global Visits', value: '24 Countries' },
      { label: 'Uptime', value: '99.98%' }
    ],
    tags: ['Manufacturing', 'RFQ System', 'B2B', 'High Performance'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    desktopPreview: {
      heroTitle: 'Precision Engineering & Industrial Tooling',
      heroSubtitle: 'Supplying heavy industry with certified manufacturing solutions.',
      accentColor: 'amber'
    },
    clientLocation: 'Edenvale Industrial Park'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Thabo Mokoena',
    role: 'Founder & CEO',
    company: 'Urban Craft Furnishings',
    location: 'Edenvale, Gauteng',
    content: 'Flamingo Designs SA completely revamped our online presence. Our previous website was sluggish and losing sales. Within 3 weeks of launching our new site, our online checkout conversions jumped by 140%. Their team is responsive, professional, and understood our South African market perfectly.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    name: 'Candice Van Der Merwe',
    role: 'Marketing Director',
    company: 'Midlands Adventure Eco-Tours',
    location: 'Estcourt, KZN',
    content: 'Having an agency with boots on the ground right here in Estcourt and Edenvale made all the difference! The turnaround time was astonishing. They built an intuitive booking portal that integrates with PayFast. We are getting daily international inquiries now!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    name: 'Dr. Zanele Khumalo',
    role: 'Practice Principal',
    company: 'Optima Health Edenvale',
    location: 'Edenvale, 1609',
    content: 'The website Flamingo Designs created for our medical practice is clean, fast, and patient-friendly. The phone call and WhatsApp integration makes booking effortless for patients. Highly recommend to any business owner wanting results.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQS = [
  {
    q: 'How long does it take to design and launch our website?',
    a: 'For our Starter Business packages, typical turnaround is 3 to 5 business days once content is received. Standard custom corporate websites take 7 to 10 days, and full-featured e-commerce stores take around 10 to 15 business days.'
  },
  {
    q: 'Do you help with domain names and hosting in South Africa?',
    a: 'Yes, absolutely! We handle registration of your .co.za or .com domain, setup enterprise high-speed SSD cloud hosting with local South African servers, configure professional email accounts (e.g. info@yourbusiness.co.za), and install free SSL certificates.'
  },
  {
    q: 'Can customers pay online with PayFast, Yoco, or Ozow?',
    a: 'Yes! We are specialists in South African payment gateway integrations. We integrate PayFast, Yoco, Ozow (instant EFT), Peach Payments, and international cards so your customers can checkout easily and securely.'
  },
  {
    q: 'Where are your physical offices located?',
    a: 'We have two main branches: our Gauteng office is situated at Van Riebeeck Ave, Edenvale, 1609, and our KwaZulu-Natal office is located on Harding Street, Estcourt, KZN. We serve clients in both regions as well as across South Africa and abroad.'
  },
  {
    q: 'Will my website work properly on mobile phones and tablets?',
    a: '100% yes. Over 75% of South African web traffic is on mobile smartphones. Every single site we design is built mobile-first, ensuring swift load speeds even on 4G/3G connections, tap-to-call buttons, and responsive layouts.'
  },
  {
    q: 'How does payment work?',
    a: 'We generally operate on a 50% deposit to commence project architecture, wireframing, and development, with the remaining 50% due upon final review, approval, and live public launch.'
  }
];
