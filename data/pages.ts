import { PageData } from "@/lib/types";
import { buildGeneratedPages } from "./generatedPages";
// ============================================================================
// THIS FILE IS THE "DATABASE".
//
// Phase-1 batch: 15 pages, Full-Time Maid + Cook only, across 5 Gurgaon
// localities + 3 Noida localities. This is the "10-15 real pages first,
// watch indexation, then scale" batch we agreed on — not the full
// 300-locality plan.
//
// NOTE ON TESTIMONIALS: every testimonial below is marked
// `isPlaceholder: true` and is clearly labeled as a sample on the page
// itself. Replace with real customer quotes before/soon after launch —
// do not remove the flag until the quote is real.
//
// To add a page: copy an object below, edit every field, save.
// ============================================================================

export const pages: PageData[] = [
  // ---------------------------------------------------------------------
  // GURGAON — SECTOR 57
  // ---------------------------------------------------------------------
  {
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "sector-57",
    localityName: "Sector 57",
    serviceSlug: "full-time-maid",
    serviceName: "Full-Time Maid",
    serviceNamePlural: "Full-Time Maids",

    metaTitle:
      "Full-Time Maid in Sector 57 Gurgaon | Verified Live-in & 24-Hour Maids | Helprz",
    metaDescription:
      "Looking for a verified full-time maid in Sector 57, Gurgaon? Hire trusted live-in maids for cooking, cleaning, childcare & elderly care. Verified, fast replacements. Call Helprz today.",

    heroIntro:
      "Sector 57 sits along Golf Course Extension Road, home to a mix of high-rise societies and independent floors. Whether you're near Vatika India Next, Pioneer Park or Hong Kong Bazaar Road, Helprz places experienced, verified full-time maids matched to your household.",
    nearbySocieties: [
      "Vatika India Next",
      "Pioneer Park",
      "Hong Kong Bazaar Road",
      "Golf Course Extension Road",
    ],
    responsibilities: [
      "Prepare breakfast before office",
      "Full house cleaning (dusting, sweeping, mopping)",
      "Washing utensils",
      "Laundry & ironing",
      "Help with children's morning routine",
      "Assist elderly parents at home",
      "Grocery assistance",
      "Daily household management",
    ],
    salary: [
      { label: "Fresher", min: 18000, max: 22000 },
      { label: "1-3 Years", min: 22000, max: 28000 },
      { label: "Experienced (3+ Years)", min: 28000, max: 35000 },
    ],
    faqs: [
      {
        question: "How quickly can I hire a full-time maid in Sector 57?",
        answer:
          "Depending on your requirements and candidate availability, the process can often be completed within a few days.",
      },
      {
        question: "Can I interview the maid before hiring?",
        answer:
          "Yes. We encourage every family to interview shortlisted candidates before confirming.",
      },
      {
        question: "Is verification included?",
        answer:
          "Where applicable and available, Helprz assists with identity and address verification. The exact process is confirmed at the time of hiring.",
      },
      {
        question: "Do you provide replacement support?",
        answer:
          "Helprz provides replacement support according to the terms of the service agreement you choose.",
      },
    ],
    testimonial: {
      quote:
        "Booked a maid within minutes and she arrived right on time. Mornings before office are so much easier now.",
      name: "Riya Malhotra",
      location: "Sector 57, Gurgaon",
      isPlaceholder: true,
    },
    nearbyAreaLinks: [
      { label: "Full-Time Maid in Sector 56", href: "/gurgaon/sector-56/full-time-maid" },
      { label: "Full-Time Maid in DLF Phase 2", href: "/gurgaon/dlf-phase-2/full-time-maid" },
      { label: "Full-Time Maid on Golf Course Road", href: "/gurgaon/golf-course-road/full-time-maid" },
    ],
    relatedServiceLinks: [
      { label: "Cook in Sector 57", href: "/gurgaon/sector-57/cook" },
    ],
  },
  {
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "sector-57",
    localityName: "Sector 57",
    serviceSlug: "cook",
    serviceName: "Cook",
    serviceNamePlural: "Cooks",

    metaTitle: "Home Cook in Sector 57 Gurgaon | Verified Cooks | Helprz",
    metaDescription:
      "Hire a verified home cook in Sector 57, Gurgaon for North Indian, South Indian, Jain or continental meals. Trial cooking available. Call Helprz today.",

    heroIntro:
      "Families across Sector 57 — from Vatika India Next to Pioneer Park — rely on Helprz to place experienced home cooks who handle daily Indian cooking as well as special dietary requirements.",
    nearbySocieties: ["Vatika India Next", "Pioneer Park", "Golf Course Extension Road"],
    responsibilities: [
      "Breakfast, lunch & dinner preparation",
      "North & South Indian cooking",
      "Jain / vegetarian / non-vegetarian options",
      "Grocery list planning",
      "Kitchen cleaning after cooking",
      "Tiffin preparation for school/office",
    ],
    salary: [
      { label: "Part-time (1 meal/day)", min: 6000, max: 9000 },
      { label: "Part-time (2 meals/day)", min: 10000, max: 14000 },
      { label: "Full-time cook", min: 16000, max: 24000 },
    ],
    faqs: [
      {
        question: "Can the cook prepare Jain food?",
        answer:
          "Yes, subject to the candidate's specific skills — you can request Jain, vegetarian, non-vegetarian or basic continental cooking.",
      },
      {
        question: "Can I do a trial before hiring?",
        answer: "Yes, a trial cooking session can usually be arranged before you confirm a candidate.",
      },
      {
        question: "Is a part-time cook available for just dinner?",
        answer:
          "Yes, many families in Sector 57 hire a cook for a single meal a day. Timing and scope are agreed before the cook joins.",
      },
    ],
    nearbyAreaLinks: [
      { label: "Cook in Sector 56", href: "/gurgaon/sector-56/cook" },
      { label: "Cook in DLF Phase 2", href: "/gurgaon/dlf-phase-2/cook" },
    ],
    relatedServiceLinks: [
      { label: "Full-Time Maid in Sector 57", href: "/gurgaon/sector-57/full-time-maid" },
    ],
  },

  // ---------------------------------------------------------------------
  // GURGAON — SECTOR 56
  // ---------------------------------------------------------------------
  {
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "sector-56",
    localityName: "Sector 56",
    serviceSlug: "full-time-maid",
    serviceName: "Full-Time Maid",
    serviceNamePlural: "Full-Time Maids",

    metaTitle: "Full-Time Maid in Sector 56 Gurgaon | Verified Live-in Maids | Helprz",
    metaDescription:
      "Hire a verified full-time maid in Sector 56, Gurgaon. Cooking, cleaning, childcare & elder care. Verified, fast replacements. Call Helprz today.",

    heroIntro:
      "Sector 56 sits right next to Sector 57 along Golf Course Extension Road, with a similar mix of gated societies and independent floors. Helprz places verified full-time maids across the sector, including near Vipul World and Nirvana Country.",
    nearbySocieties: ["Vipul World", "Nirvana Country", "Golf Course Extension Road"],
    responsibilities: [
      "Daily cleaning",
      "Cooking",
      "Laundry & ironing",
      "Childcare support",
      "Elder care assistance",
      "Grocery management",
    ],
    salary: [
      { label: "Fresher", min: 18000, max: 22000 },
      { label: "1-3 Years", min: 22000, max: 27000 },
      { label: "Experienced (3+ Years)", min: 27000, max: 34000 },
    ],
    faqs: [
      {
        question: "How is Sector 56 different from Sector 57?",
        answer:
          "Both sectors sit along Golf Course Extension Road and have similar household needs — Helprz sources candidates familiar with either area.",
      },
      {
        question: "Can I request a live-in maid specifically?",
        answer:
          "Yes, live-in and live-out arrangements are both available — let us know your preference when sharing requirements.",
      },
    ],
    testimonial: {
      quote:
        "Replacement was arranged within two days when our previous maid left suddenly. Very responsive team.",
      name: "Anjali Sharma",
      location: "Sector 56, Gurgaon",
      isPlaceholder: true,
    },
    nearbyAreaLinks: [
      { label: "Full-Time Maid in Sector 57", href: "/gurgaon/sector-57/full-time-maid" },
      { label: "Full-Time Maid on Golf Course Road", href: "/gurgaon/golf-course-road/full-time-maid" },
    ],
    relatedServiceLinks: [
      { label: "Cook in Sector 56", href: "/gurgaon/sector-56/cook" },
    ],
  },
  {
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "sector-56",
    localityName: "Sector 56",
    serviceSlug: "cook",
    serviceName: "Cook",
    serviceNamePlural: "Cooks",

    metaTitle: "Home Cook in Sector 56 Gurgaon | Verified Cooks | Helprz",
    metaDescription:
      "Hire a verified home cook in Sector 56, Gurgaon. North Indian, South Indian, Jain & continental cooking. Trial available. Call Helprz today.",

    heroIntro:
      "From Vipul World to Nirvana Country, Helprz places experienced home cooks across Sector 56 who cook daily Indian meals as well as special-diet requests.",
    nearbySocieties: ["Vipul World", "Nirvana Country"],
    responsibilities: [
      "Daily home-style cooking",
      "North & South Indian meals",
      "Special diets on request",
      "Kitchen management",
      "Grocery coordination",
    ],
    salary: [
      { label: "Part-time", min: 6500, max: 10000 },
      { label: "Full-time", min: 16000, max: 23000 },
    ],
    faqs: [
      {
        question: "Can I hire a cook only for dinner?",
        answer: "Yes, part-time single-meal arrangements are common and easy to set up.",
      },
      {
        question: "Do cooks in Sector 56 know South Indian cooking?",
        answer:
          "Many candidates are experienced across multiple regional cuisines; specify your preference and we shortlist accordingly.",
      },
    ],
    nearbyAreaLinks: [
      { label: "Cook in Sector 57", href: "/gurgaon/sector-57/cook" },
    ],
    relatedServiceLinks: [
      { label: "Full-Time Maid in Sector 56", href: "/gurgaon/sector-56/full-time-maid" },
    ],
  },

  // ---------------------------------------------------------------------
  // GURGAON — DLF PHASE 2
  // ---------------------------------------------------------------------
  {
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "dlf-phase-2",
    localityName: "DLF Phase 2",
    serviceSlug: "full-time-maid",
    serviceName: "Full-Time Maid",
    serviceNamePlural: "Full-Time Maids",

    metaTitle: "Full-Time Maid in DLF Phase 2 Gurgaon | Verified Live-in Maids | Helprz",
    metaDescription:
      "Hire a verified full-time maid in DLF Phase 2, Gurgaon. Cooking, cleaning, childcare & elder care. Verified, fast replacements. Call Helprz today.",

    heroIntro:
      "DLF Phase 2 is home to some of Gurgaon's older independent houses and low-rise apartments, many with staff quarters, close to Galleria Market. Helprz places full-time maids experienced in working across larger households.",
    nearbySocieties: ["Galleria Market", "DLF Phase 1", "DLF Phase 3", "Silver Oaks Apartments"],
    responsibilities: [
      "Full house cleaning across multiple floors",
      "Cooking for larger households",
      "Laundry & ironing",
      "Childcare / school pickup coordination",
      "Elder care assistance",
      "Coordinating with other household staff",
    ],
    salary: [
      { label: "Fresher", min: 19000, max: 23000 },
      { label: "1-3 Years", min: 23000, max: 29000 },
      { label: "Experienced (3+ Years)", min: 29000, max: 38000 },
    ],
    faqs: [
      {
        question: "Do you place maids used to staff quarters / larger homes?",
        answer:
          "Yes, many candidates we place in DLF Phase 2 have prior experience working in independent houses with staff accommodation.",
      },
      {
        question: "Can the maid manage a household with other staff?",
        answer:
          "Depending on experience, some candidates are comfortable coordinating with cooks, drivers or nannies already working in the home.",
      },
    ],
    nearbyAreaLinks: [
      { label: "Full-Time Maid in Sector 57", href: "/gurgaon/sector-57/full-time-maid" },
      { label: "Full-Time Maid in Sushant Lok", href: "/gurgaon/sushant-lok/full-time-maid" },
    ],
    relatedServiceLinks: [
      { label: "Cook in DLF Phase 2", href: "/gurgaon/dlf-phase-2/cook" },
    ],
  },
  {
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "dlf-phase-2",
    localityName: "DLF Phase 2",
    serviceSlug: "cook",
    serviceName: "Cook",
    serviceNamePlural: "Cooks",

    metaTitle: "Home Cook in DLF Phase 2 Gurgaon | Verified Cooks | Helprz",
    metaDescription:
      "Hire a verified home cook in DLF Phase 2, Gurgaon. North Indian, South Indian, Jain & continental cooking. Call Helprz today.",

    heroIntro:
      "From independent houses near Galleria Market to apartments in Silver Oaks, Helprz places experienced cooks across DLF Phase 2, including those used to cooking for larger family gatherings.",
    nearbySocieties: ["Galleria Market", "DLF Phase 1", "DLF Phase 3"],
    responsibilities: [
      "Daily home-style cooking",
      "Special diets on request",
      "Kitchen management",
      "Cooking for family gatherings/events on request",
      "Grocery coordination",
    ],
    salary: [
      { label: "Part-time", min: 7000, max: 12000 },
      { label: "Full-time", min: 16000, max: 25000 },
    ],
    faqs: [
      {
        question: "Can I hire a cook only for dinner?",
        answer: "Yes, part-time single-meal arrangements are common and easy to set up.",
      },
      {
        question: "Can the cook handle a small family gathering?",
        answer:
          "Some experienced cooks can manage slightly larger cooking loads for gatherings — mention this upfront so we match accordingly.",
      },
    ],
    nearbyAreaLinks: [
      { label: "Cook in Sector 57", href: "/gurgaon/sector-57/cook" },
    ],
    relatedServiceLinks: [
      { label: "Full-Time Maid in DLF Phase 2", href: "/gurgaon/dlf-phase-2/full-time-maid" },
    ],
  },

  // ---------------------------------------------------------------------
  // GURGAON — SUSHANT LOK
  // ---------------------------------------------------------------------
  {
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "sushant-lok",
    localityName: "Sushant Lok",
    serviceSlug: "full-time-maid",
    serviceName: "Full-Time Maid",
    serviceNamePlural: "Full-Time Maids",

    metaTitle: "Full-Time Maid in Sushant Lok Gurgaon | Verified Live-in Maids | Helprz",
    metaDescription:
      "Hire a verified full-time maid in Sushant Lok, Gurgaon. Cooking, cleaning, childcare & elder care. Verified, fast replacements. Call Helprz today.",

    heroIntro:
      "Sushant Lok's mix of young working families across SL 1, 2 and 3, close to MG Road, means reliable full-time help is in constant demand. Helprz places verified, experienced maids matched to your routine.",
    nearbySocieties: ["Sushant Lok 1", "Sushant Lok 2", "Sushant Lok 3", "MG Road"],
    responsibilities: [
      "Prepare breakfast before office",
      "Full house cleaning",
      "Washing utensils",
      "Laundry & ironing",
      "Childcare support",
      "Elder care assistance",
      "Grocery assistance",
    ],
    salary: [
      { label: "Fresher", min: 18000, max: 22000 },
      { label: "1-3 Years", min: 22000, max: 28000 },
      { label: "Experienced (3+ Years)", min: 28000, max: 36000 },
    ],
    faqs: [
      {
        question: "Is live-in help available in Sushant Lok?",
        answer: "Yes, both live-in and live-out full-time maids are available depending on your household's space and preference.",
      },
      {
        question: "How fast can I get a replacement?",
        answer: "Replacement support is provided per the terms of your service agreement, typically arranged within a few days.",
      },
    ],
    testimonial: {
      quote:
        "Our maid has been consistent for months now — no last-minute no-shows, which was our biggest worry before.",
      name: "Karan Bhatia",
      location: "Sushant Lok, Gurgaon",
      isPlaceholder: true,
    },
    nearbyAreaLinks: [
      { label: "Full-Time Maid in DLF Phase 2", href: "/gurgaon/dlf-phase-2/full-time-maid" },
      { label: "Full-Time Maid in Sector 57", href: "/gurgaon/sector-57/full-time-maid" },
    ],
    relatedServiceLinks: [
      { label: "Cook in Sushant Lok", href: "/gurgaon/sushant-lok/cook" },
    ],
  },
  {
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "sushant-lok",
    localityName: "Sushant Lok",
    serviceSlug: "cook",
    serviceName: "Cook",
    serviceNamePlural: "Cooks",

    metaTitle: "Home Cook in Sushant Lok Gurgaon | Verified Cooks | Helprz",
    metaDescription:
      "Hire a verified home cook in Sushant Lok, Gurgaon. North Indian, South Indian, Jain & continental cooking. Call Helprz today.",

    heroIntro:
      "Across Sushant Lok 1, 2 and 3, Helprz places home cooks experienced with everyday Indian meals as well as diet-specific requests for working families near MG Road.",
    nearbySocieties: ["Sushant Lok 1", "Sushant Lok 2", "Sushant Lok 3"],
    responsibilities: [
      "Breakfast, lunch & dinner preparation",
      "North & South Indian cooking",
      "Diet-specific meals (Jain, low-oil, etc.)",
      "Kitchen cleaning after cooking",
      "Tiffin preparation for school/office",
    ],
    salary: [
      { label: "Part-time (1 meal/day)", min: 6000, max: 9500 },
      { label: "Full-time", min: 16000, max: 23000 },
    ],
    faqs: [
      {
        question: "Can I request low-oil / diet-specific cooking?",
        answer: "Yes, mention any dietary requirements upfront so we match a cook comfortable with that style of cooking.",
      },
    ],
    nearbyAreaLinks: [
      { label: "Cook in DLF Phase 2", href: "/gurgaon/dlf-phase-2/cook" },
    ],
    relatedServiceLinks: [
      { label: "Full-Time Maid in Sushant Lok", href: "/gurgaon/sushant-lok/full-time-maid" },
    ],
  },

  // ---------------------------------------------------------------------
  // GURGAON — GOLF COURSE ROAD (maid only, per this batch)
  // ---------------------------------------------------------------------
  {
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "golf-course-road",
    localityName: "Golf Course Road",
    serviceSlug: "full-time-maid",
    serviceName: "Full-Time Maid",
    serviceNamePlural: "Full-Time Maids",

    metaTitle: "Full-Time Maid on Golf Course Road Gurgaon | Verified Maids | Helprz",
    metaDescription:
      "Hire a verified full-time maid on Golf Course Road, Gurgaon — near DLF Belaire, Park Place & Magnolias. Verified, fast replacements. Call Helprz today.",

    heroIntro:
      "Golf Course Road's premium high-rises — DLF Belaire, Park Place and The Magnolias among them — need maids comfortable with large apartments and building-specific protocols. Helprz places experienced, verified candidates familiar with this corridor.",
    nearbySocieties: ["DLF Belaire", "DLF Park Place", "The Magnolias", "Cyber Hub"],
    responsibilities: [
      "Full apartment cleaning",
      "Cooking",
      "Laundry & ironing",
      "Childcare support",
      "Elder care assistance",
      "Coordinating with building security/entry protocols",
    ],
    salary: [
      { label: "Fresher", min: 20000, max: 24000 },
      { label: "1-3 Years", min: 24000, max: 30000 },
      { label: "Experienced (3+ Years)", min: 30000, max: 40000 },
    ],
    faqs: [
      {
        question: "Are candidates familiar with high-rise building entry/security processes?",
        answer:
          "Many candidates placed on Golf Course Road have prior experience with society security and visitor-management systems common in these towers.",
      },
      {
        question: "Is live-in accommodation common here?",
        answer:
          "It depends on the specific apartment's staff-room availability — let us know your setup and we'll match accordingly.",
      },
    ],
    nearbyAreaLinks: [
      { label: "Full-Time Maid in Sector 57", href: "/gurgaon/sector-57/full-time-maid" },
      { label: "Full-Time Maid in Sector 56", href: "/gurgaon/sector-56/full-time-maid" },
    ],
    relatedServiceLinks: [
      { label: "Cook in Sector 57", href: "/gurgaon/sector-57/cook" },
    ],
  },

  // ---------------------------------------------------------------------
  // NOIDA — SECTOR 62
  // ---------------------------------------------------------------------
  {
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-62",
    localityName: "Sector 62",
    serviceSlug: "full-time-maid",
    serviceName: "Full-Time Maid",
    serviceNamePlural: "Full-Time Maids",

    metaTitle: "Full-Time Maid in Sector 62 Noida | Verified Live-in Maids | Helprz",
    metaDescription:
      "Hire a verified full-time maid in Sector 62, Noida. Cooking, cleaning, childcare & elder care. Verified, fast replacements. Call Helprz today.",

    heroIntro:
      "Sector 62 is one of Noida's busiest corporate corridors, home to many IT and tech offices as well as residential pockets nearby. Helprz places verified full-time maids for working professionals and families in the area.",
    nearbySocieties: ["Sector 62 corporate corridor", "Fortis Hospital area", "Sector 61", "Sector 63"],
    responsibilities: [
      "Prepare breakfast before office",
      "Full house cleaning",
      "Washing utensils",
      "Laundry & ironing",
      "Childcare support",
      "Grocery assistance",
    ],
    salary: [
      { label: "Fresher", min: 16000, max: 20000 },
      { label: "1-3 Years", min: 20000, max: 25000 },
      { label: "Experienced (3+ Years)", min: 25000, max: 32000 },
    ],
    faqs: [
      {
        question: "Do you place maids for working professionals with early morning schedules?",
        answer:
          "Yes, many candidates are comfortable with early-morning shifts to accommodate office timings common in Sector 62.",
      },
      {
        question: "Can I hire someone for just a few hours a day instead of full-time?",
        answer:
          "Full-time is our focus for this page, but let us know your exact hours needed and we can advise on the best fit.",
      },
    ],
    testimonial: {
      quote:
        "Needed someone who could start early before my 9 AM shift — Helprz matched us with someone reliable within days.",
      name: "Priyanka Nair",
      location: "Sector 62, Noida",
      isPlaceholder: true,
    },
    nearbyAreaLinks: [
      { label: "Full-Time Maid in Sector 50", href: "/noida/sector-50/full-time-maid" },
      { label: "Full-Time Maid in Sector 137", href: "/noida/sector-137/full-time-maid" },
    ],
    relatedServiceLinks: [
      { label: "Cook in Sector 62", href: "/noida/sector-62/cook" },
    ],
  },
  {
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-62",
    localityName: "Sector 62",
    serviceSlug: "cook",
    serviceName: "Cook",
    serviceNamePlural: "Cooks",

    metaTitle: "Home Cook in Sector 62 Noida | Verified Cooks | Helprz",
    metaDescription:
      "Hire a verified home cook in Sector 62, Noida. North Indian, South Indian, Jain & continental cooking. Call Helprz today.",

    heroIntro:
      "For busy professionals working in Sector 62's corporate offices, Helprz places home cooks who can prepare meals early morning or in the evening, including tiffin service.",
    nearbySocieties: ["Sector 61", "Sector 63"],
    responsibilities: [
      "Breakfast & dinner preparation around office hours",
      "Tiffin/lunchbox preparation",
      "North & South Indian cooking",
      "Kitchen cleaning after cooking",
    ],
    salary: [
      { label: "Part-time (1 meal/day)", min: 5500, max: 8500 },
      { label: "Full-time", min: 14000, max: 20000 },
    ],
    faqs: [
      {
        question: "Can the cook prepare tiffins for office?",
        answer: "Yes, tiffin/lunchbox preparation is a common request and can be arranged as part of the service.",
      },
    ],
    nearbyAreaLinks: [
      { label: "Cook in Sector 50", href: "/noida/sector-50/cook" },
    ],
    relatedServiceLinks: [
      { label: "Full-Time Maid in Sector 62", href: "/noida/sector-62/full-time-maid" },
    ],
  },

  // ---------------------------------------------------------------------
  // NOIDA — SECTOR 50
  // ---------------------------------------------------------------------
  {
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-50",
    localityName: "Sector 50",
    serviceSlug: "full-time-maid",
    serviceName: "Full-Time Maid",
    serviceNamePlural: "Full-Time Maids",

    metaTitle: "Full-Time Maid in Sector 50 Noida | Verified Live-in Maids | Helprz",
    metaDescription:
      "Hire a verified full-time maid in Sector 50, Noida. Cooking, cleaning, childcare & elder care. Verified, fast replacements. Call Helprz today.",

    heroIntro:
      "Sector 50 is one of Noida's well-established residential sectors, with a mix of independent houses and mid-rise apartments. Helprz places experienced, verified full-time maids across the sector.",
    nearbySocieties: ["Sector 50 Market", "Sector 49", "Sector 51"],
    responsibilities: [
      "Daily cleaning",
      "Cooking",
      "Laundry & ironing",
      "Childcare support",
      "Elder care assistance",
      "Grocery management",
    ],
    salary: [
      { label: "Fresher", min: 16000, max: 20000 },
      { label: "1-3 Years", min: 20000, max: 26000 },
      { label: "Experienced (3+ Years)", min: 26000, max: 33000 },
    ],
    faqs: [
      {
        question: "Are live-in maids common in Sector 50?",
        answer:
          "Yes, many independent houses in the sector have space for live-in staff; apartment households more commonly use live-out arrangements.",
      },
    ],
    nearbyAreaLinks: [
      { label: "Full-Time Maid in Sector 62", href: "/noida/sector-62/full-time-maid" },
      { label: "Full-Time Maid in Sector 137", href: "/noida/sector-137/full-time-maid" },
    ],
    relatedServiceLinks: [
      { label: "Cook in Sector 50", href: "/noida/sector-50/cook" },
    ],
  },
  {
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-50",
    localityName: "Sector 50",
    serviceSlug: "cook",
    serviceName: "Cook",
    serviceNamePlural: "Cooks",

    metaTitle: "Home Cook in Sector 50 Noida | Verified Cooks | Helprz",
    metaDescription:
      "Hire a verified home cook in Sector 50, Noida. North Indian, South Indian, Jain & continental cooking. Call Helprz today.",

    heroIntro:
      "Helprz places experienced home cooks across Sector 50's independent houses and apartments, comfortable with everyday Indian cooking and family-specific preferences.",
    nearbySocieties: ["Sector 49", "Sector 51"],
    responsibilities: [
      "Daily home-style cooking",
      "Special diets on request",
      "Kitchen management",
      "Grocery coordination",
    ],
    salary: [
      { label: "Part-time", min: 5500, max: 9000 },
      { label: "Full-time", min: 14000, max: 21000 },
    ],
    faqs: [
      {
        question: "Can I hire a cook for just weekday dinners?",
        answer: "Yes, part-time weekday-only arrangements are common and easy to set up.",
      },
    ],
    nearbyAreaLinks: [
      { label: "Cook in Sector 62", href: "/noida/sector-62/cook" },
    ],
    relatedServiceLinks: [
      { label: "Full-Time Maid in Sector 50", href: "/noida/sector-50/full-time-maid" },
    ],
  },

  // ---------------------------------------------------------------------
  // NOIDA — SECTOR 137
  // ---------------------------------------------------------------------
  {
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-137",
    localityName: "Sector 137",
    serviceSlug: "full-time-maid",
    serviceName: "Full-Time Maid",
    serviceNamePlural: "Full-Time Maids",

    metaTitle: "Full-Time Maid in Sector 137 Noida | Verified Live-in Maids | Helprz",
    metaDescription:
      "Hire a verified full-time maid in Sector 137, Noida — near large residential societies along the Noida Expressway. Verified, fast replacements. Call Helprz today.",

    heroIntro:
      "Sector 137 along the Noida Expressway is home to some of the city's largest residential societies, with steady demand for full-time household help. Helprz places verified maids matched to high-rise apartment living.",
    nearbySocieties: ["Noida Expressway societies", "Sector 137 Market", "Sector 78"],
    responsibilities: [
      "Full apartment cleaning",
      "Cooking",
      "Laundry & ironing",
      "Childcare support",
      "Elder care assistance",
      "Grocery assistance",
    ],
    salary: [
      { label: "Fresher", min: 15500, max: 19500 },
      { label: "1-3 Years", min: 19500, max: 25000 },
      { label: "Experienced (3+ Years)", min: 25000, max: 32000 },
    ],
    faqs: [
      {
        question: "Do candidates have experience with large gated societies?",
        answer:
          "Yes, many candidates placed in Sector 137 have prior experience with society entry systems and visitor management common to large complexes.",
      },
    ],
    testimonial: {
      quote:
        "Our society has strict visitor rules and the maid Helprz placed was already used to that process — no hassle at all.",
      name: "Deepak Verma",
      location: "Sector 137, Noida",
      isPlaceholder: true,
    },
    nearbyAreaLinks: [
      { label: "Full-Time Maid in Sector 62", href: "/noida/sector-62/full-time-maid" },
      { label: "Full-Time Maid in Sector 50", href: "/noida/sector-50/full-time-maid" },
    ],
    relatedServiceLinks: [
      { label: "Cook in Sector 137", href: "/noida/sector-137/cook" },
    ],
  },
  {
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-137",
    localityName: "Sector 137",
    serviceSlug: "cook",
    serviceName: "Cook",
    serviceNamePlural: "Cooks",

    metaTitle: "Home Cook in Sector 137 Noida | Verified Cooks | Helprz",
    metaDescription:
      "Hire a verified home cook in Sector 137, Noida. North Indian, South Indian, Jain & continental cooking. Call Helprz today.",

    heroIntro:
      "Helprz places experienced home cooks across Sector 137's large residential societies along the Noida Expressway, comfortable with daily family cooking.",
    nearbySocieties: ["Noida Expressway societies", "Sector 78"],
    responsibilities: [
      "Daily home-style cooking",
      "North & South Indian meals",
      "Special diets on request",
      "Kitchen management",
    ],
    salary: [
      { label: "Part-time", min: 5500, max: 8500 },
      { label: "Full-time", min: 14000, max: 20000 },
    ],
    faqs: [
      {
        question: "Can I hire a cook only on weekends?",
        answer: "Weekend-only arrangements are less common but can be discussed based on candidate availability.",
      },
    ],
    nearbyAreaLinks: [
      { label: "Cook in Sector 50", href: "/noida/sector-50/cook" },
    ],
    relatedServiceLinks: [
      { label: "Full-Time Maid in Sector 137", href: "/noida/sector-137/full-time-maid" },
    ],
  },
];

const key = (p: PageData) => `${p.citySlug}/${p.localitySlug}/${p.serviceSlug}`;
const handWrittenKeys = new Set(pages.map(key));
const generated = buildGeneratedPages().filter((p) => !handWrittenKeys.has(key(p)));
const allPages: PageData[] = [...pages, ...generated];

export function getAllPages(): PageData[] {
  return allPages;
}

export function findPage(
  citySlug: string,
  localitySlug: string,
  serviceSlug: string
): PageData | undefined {
  return allPages.find(
    (p) =>
      p.citySlug === citySlug &&
      p.localitySlug === localitySlug &&
      p.serviceSlug === serviceSlug
  );
}
