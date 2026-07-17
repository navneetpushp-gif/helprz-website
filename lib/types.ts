// This is the "schema" for every location+service page on the site.
// Every field here is a column you could just as easily keep in a
// spreadsheet (Google Sheets / Excel / CSV) and export to pages.ts.
// Non-technical people should be able to look at this file and
// pages.ts side by side and understand exactly what to fill in.

export interface SalaryBand {
  label: string; // e.g. "Fresher", "1-3 Years", "Experienced"
  min: number;
  max: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface LinkRef {
  label: string;
  href: string;
}

export interface PageData {
  // --- Identity (these three build the URL) ---
  citySlug: string; // "gurgaon"
  cityName: string; // "Gurgaon"
  localitySlug: string; // "sector-57"
  localityName: string; // "Sector 57"
  serviceSlug: string; // "full-time-maid"
  serviceName: string; // "Full-Time Maid" (singular, for H1/body copy)
  serviceNamePlural: string; // "Full-Time Maids" (for titles/headers)

  // --- SEO ---
  metaTitle: string;
  metaDescription: string;

  // --- Content ---
  heroIntro: string; // 1-2 sentences, locality-specific
  nearbySocieties: string[]; // named societies/roads mentioned in this locality
  responsibilities: string[]; // what this service covers, tailored per service
  salary: SalaryBand[];
  faqs: FAQ[];
  testimonial?: {
    quote: string;
    name: string;
    location: string;
    isPlaceholder?: boolean; // true until replaced with a real customer quote
  };

  // --- Internal linking (this is what builds topical authority) ---
  nearbyAreaLinks: LinkRef[]; // same service, nearby localities
  relatedServiceLinks: LinkRef[]; // other services, same locality
}
