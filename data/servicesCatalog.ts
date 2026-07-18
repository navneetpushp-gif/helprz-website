// ============================================================================
// SERVICE CATALOG
//
// One entry per service in the site's dropdown. Salary bands are defined at
// "standard" tier and scaled up for "mid" (+12%) and "premium" (+25%)
// localities, rounded to the nearest 500.
// ============================================================================

import { LocalityInfo, LocalityTier } from "./localities";

export interface SalaryBand {
  label: string;
  min: number;
  max: number;
}

export interface ServiceDef {
  slug: string;
  name: string;
  namePlural: string;
  metaTitle: (loc: LocalityInfo) => string;
  metaDescription: (loc: LocalityInfo) => string;
  responsibilities: string[];
  baseSalary: SalaryBand[];
  faqs: (loc: LocalityInfo) => { question: string; answer: string }[];
  heroVariants: ((loc: LocalityInfo) => string)[];
}

const TIER_MULT: Record<LocalityTier, number> = {
  standard: 1,
  mid: 1.12,
  premium: 1.25,
};

const r500 = (n: number) => Math.round(n / 500) * 500;

export function salaryForTier(base: SalaryBand[], tier: LocalityTier): SalaryBand[] {
  const m = TIER_MULT[tier];
  return base.map((b) => ({ label: b.label, min: r500(b.min * m), max: r500(b.max * m) }));
}

const lm = (loc: LocalityInfo, n = 3) => loc.landmarks.slice(0, n).join(", ");

export const services: ServiceDef[] = [
  // -------------------------------------------------------------------------
  // 1. FULL-TIME MAID (Housekeeping, full-time)
  // -------------------------------------------------------------------------
  {
    slug: "full-time-maid",
    name: "Full-Time Maid",
    namePlural: "Full-Time Maids",
    metaTitle: (loc) =>
      `Full-Time Maid in ${loc.localityName} ${loc.cityName} | Verified Live-in & Full-Day Maids | Helprz`,
    metaDescription: (loc) =>
      `Looking for a verified full-time maid in ${loc.localityName}, ${loc.cityName}? Hire trusted maids for cooking, cleaning, childcare & elder care. Verified, fast replacements. Call Helprz today.`,
    responsibilities: [
      "Prepare breakfast before office",
      "Full house cleaning (dusting, sweeping, mopping)",
      "Washing utensils",
      "Laundry & ironing",
      "Childcare support",
      "Elder care assistance",
      "Grocery assistance",
      "Daily household management",
    ],
    baseSalary: [
      { label: "Fresher", min: 16000, max: 20000 },
      { label: "1-3 Years", min: 20000, max: 26000 },
      { label: "Experienced (3+ Years)", min: 26000, max: 33000 },
    ],
    faqs: (loc) => [
      {
        question: `How quickly can I hire a full-time maid in ${loc.localityName}?`,
        answer:
          "Depending on your requirements and candidate availability, the process can often be completed within a few days.",
      },
      {
        question: "Can I interview the maid before hiring?",
        answer: "Yes. We encourage every family to interview shortlisted candidates before confirming.",
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
    heroVariants: [
      (loc) =>
        `${loc.localityName} is known for its ${loc.housing}, with steady demand for dependable household help near ${lm(loc)}. Helprz places experienced, verified full-time maids matched to your family's routine.`,
      (loc) =>
        `Families across ${loc.localityName} — from ${loc.landmarks[0]} to ${loc.landmarks[1] ?? loc.landmarks[0]} — rely on Helprz for verified full-time maids who handle cooking, cleaning and daily household management.`,
      (loc) =>
        `Finding reliable full-time help in ${loc.localityName}, ${loc.cityName} shouldn't take weeks. Helprz places background-verified maids across the area's ${loc.housing}, including homes near ${lm(loc, 2)}.`,
      (loc) =>
        `With its ${loc.housing}, ${loc.localityName} households need full-time maids who fit their pace. Helprz matches verified candidates to homes around ${lm(loc)}.`,
    ],
  },

  // -------------------------------------------------------------------------
  // 2. COOK (full-time / part-time)
  // -------------------------------------------------------------------------
  {
    slug: "cook",
    name: "Cook",
    namePlural: "Cooks",
    metaTitle: (loc) =>
      `Home Cook in ${loc.localityName} ${loc.cityName} | Verified Cooks | Helprz`,
    metaDescription: (loc) =>
      `Hire a verified home cook in ${loc.localityName}, ${loc.cityName} for North Indian, South Indian, Jain or continental meals. Trial cooking available. Call Helprz today.`,
    responsibilities: [
      "Breakfast, lunch & dinner preparation",
      "North & South Indian cooking",
      "Jain / vegetarian / non-vegetarian options",
      "Grocery list planning",
      "Kitchen cleaning after cooking",
      "Tiffin preparation for school/office",
    ],
    baseSalary: [
      { label: "Part-time (1 meal/day)", min: 5500, max: 9000 },
      { label: "Part-time (2 meals/day)", min: 9000, max: 13000 },
      { label: "Full-time cook", min: 14000, max: 21000 },
    ],
    faqs: (loc) => [
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
        question: `Is a part-time cook available in ${loc.localityName} for just one meal a day?`,
        answer:
          `Yes, many families in ${loc.localityName} hire a cook for a single meal a day. Timing and scope are agreed before the cook joins.`,
      },
    ],
    heroVariants: [
      (loc) =>
        `Families across ${loc.localityName} — near ${lm(loc, 2)} — rely on Helprz to place experienced home cooks who handle daily Indian cooking as well as special dietary requirements.`,
      (loc) =>
        `From ${loc.landmarks[0]} to ${loc.landmarks[1] ?? loc.landmarks[0]}, Helprz places verified home cooks across ${loc.localityName}'s ${loc.housing}, comfortable with everyday meals and diet-specific requests.`,
      (loc) =>
        `Whether it's daily tiffins or full family meals, households in ${loc.localityName}, ${loc.cityName} trust Helprz for verified cooks experienced with North Indian, South Indian and special-diet cooking.`,
      (loc) =>
        `Good home food shouldn't depend on luck. Helprz places experienced cooks across ${loc.localityName}'s ${loc.housing}, including homes around ${lm(loc, 2)}.`,
    ],
  },

  // -------------------------------------------------------------------------
  // 3. NANNY / BABYSITTER
  // -------------------------------------------------------------------------
  {
    slug: "nanny-babysitter",
    name: "Nanny / Babysitter",
    namePlural: "Nannies & Babysitters",
    metaTitle: (loc) =>
      `Nanny & Babysitter in ${loc.localityName} ${loc.cityName} | Verified Japa & Child Care | Helprz`,
    metaDescription: (loc) =>
      `Hire a verified nanny or babysitter in ${loc.localityName}, ${loc.cityName} for infants, toddlers & young kids. Trained, background-checked child care at home. Call Helprz today.`,
    responsibilities: [
      "Infant & toddler care (feeding, bathing, nap routines)",
      "School-age child supervision",
      "Meal preparation for children",
      "Hygiene & safety monitoring",
      "Engaging children in play & learning activities",
      "School pickup/drop coordination (if required)",
    ],
    baseSalary: [
      { label: "Part-time (4-5 hrs/day)", min: 8000, max: 12000 },
      { label: "Full-time (live-out)", min: 16000, max: 24000 },
      { label: "Live-in nanny", min: 20000, max: 30000 },
    ],
    faqs: (loc) => [
      {
        question: "Are nannies trained in infant care?",
        answer:
          "Many candidates have prior experience with newborns and infants; tell us your child's age so we shortlist accordingly.",
      },
      {
        question: `Can I meet the nanny before she starts in my ${loc.localityName} home?`,
        answer:
          "Yes, we encourage families to interview shortlisted candidates and, where possible, arrange a supervised trial day.",
      },
      {
        question: "Is background verification done for nannies?",
        answer:
          "Where applicable and available, Helprz assists with identity and address verification. The exact process is confirmed at the time of hiring.",
      },
      {
        question: "Can the nanny also handle light housework?",
        answer:
          "A nanny's primary duty is child care. Light child-related chores (bottles, kids' laundry) are typical; broader housework should be discussed and agreed upfront.",
      },
    ],
    heroVariants: [
      (loc) =>
        `For working parents across ${loc.localityName}'s ${loc.housing}, dependable child care is non-negotiable. Helprz places verified nannies and babysitters near ${lm(loc, 2)}, matched to your child's age and routine.`,
      (loc) =>
        `From ${loc.landmarks[0]} to ${loc.landmarks[1] ?? loc.landmarks[0]}, families in ${loc.localityName} trust Helprz for background-checked nannies experienced with infants, toddlers and school-going kids.`,
      (loc) =>
        `Your child deserves care you can trust. Helprz places verified, experienced nannies across ${loc.localityName}, ${loc.cityName} — for a few hours a day or full-time live-in support.`,
      (loc) =>
        `Balancing office and a young child in ${loc.localityName} is easier with the right help. Helprz matches verified babysitters and nannies to homes around ${lm(loc)}.`,
    ],
  },

  // -------------------------------------------------------------------------
  // 4. ELDERLY CARE ATTENDANT
  // -------------------------------------------------------------------------
  {
    slug: "elderly-care-attendant",
    name: "Elderly Care Attendant",
    namePlural: "Elderly Care Attendants",
    metaTitle: (loc) =>
      `Elderly Care Attendant in ${loc.localityName} ${loc.cityName} | Verified Patient Caretakers | Helprz`,
    metaDescription: (loc) =>
      `Hire a verified elderly care attendant in ${loc.localityName}, ${loc.cityName} for senior care, mobility support & post-surgery assistance at home. Trained caretakers. Call Helprz today.`,
    responsibilities: [
      "Daily assistance with bathing, dressing & grooming",
      "Mobility & walking support",
      "Medication reminders",
      "Meal assistance & feeding support",
      "Companionship & supervision",
      "Post-surgery / bed-ridden patient support",
      "Coordination with family on health updates",
    ],
    baseSalary: [
      { label: "Day shift (12 hrs)", min: 15000, max: 21000 },
      { label: "Live-in attendant (24 hr)", min: 20000, max: 28000 },
      { label: "Trained patient attendant", min: 24000, max: 32000 },
    ],
    faqs: (loc) => [
      {
        question: "Are attendants trained for post-surgery or bed-ridden care?",
        answer:
          "Many candidates have prior experience with post-operative and limited-mobility care; share the specific needs so we match a suitably experienced attendant.",
      },
      {
        question: `Can the attendant accompany my parent to doctor visits in ${loc.localityName}?`,
        answer:
          "Yes, accompanying seniors to nearby clinics and hospitals can be included — agree on this scope at the time of hiring.",
      },
      {
        question: "Is a female attendant available for elderly women?",
        answer:
          "Yes, you can request a male or female attendant based on your family's comfort and the senior's preference.",
      },
      {
        question: "Do you provide replacements if the attendant is unavailable?",
        answer:
          "Helprz provides replacement support according to the terms of the service agreement you choose.",
      },
    ],
    heroVariants: [
      (loc) =>
        `Many families in ${loc.localityName}'s ${loc.housing} have elderly parents who need daily support. Helprz places trained, verified care attendants near ${lm(loc, 2)} for mobility, medication and companionship needs.`,
      (loc) =>
        `Caring for aging parents while managing work is hard. Helprz places experienced elderly care attendants across ${loc.localityName}, ${loc.cityName} — day-shift or 24-hour live-in.`,
      (loc) =>
        `From ${loc.landmarks[0]} to ${loc.landmarks[1] ?? loc.landmarks[0]}, households in ${loc.localityName} trust Helprz for compassionate, verified attendants for senior and patient care at home.`,
      (loc) =>
        `Your parents cared for you; the right attendant helps you care for them. Helprz matches trained elderly care attendants to families across ${loc.localityName}'s ${loc.housing}.`,
    ],
  },

  // -------------------------------------------------------------------------
  // 5. LIVE-IN ALL-ROUNDER
  // -------------------------------------------------------------------------
  {
    slug: "live-in-all-rounder",
    name: "Live-in All-Rounder",
    namePlural: "Live-in All-Rounders",
    metaTitle: (loc) =>
      `Live-in All-Rounder Maid in ${loc.localityName} ${loc.cityName} | 24-Hour House Help | Helprz`,
    metaDescription: (loc) =>
      `Hire a verified live-in all-rounder in ${loc.localityName}, ${loc.cityName} — cooking, cleaning, childcare & elder care in one role. 24-hour house help. Call Helprz today.`,
    responsibilities: [
      "Complete household management",
      "Cooking all meals",
      "Full house cleaning",
      "Laundry & ironing",
      "Childcare or elder care support",
      "Grocery & errand assistance",
      "Guest & festival preparation support",
    ],
    baseSalary: [
      { label: "Fresher", min: 17000, max: 21000 },
      { label: "1-3 Years", min: 21000, max: 27000 },
      { label: "Experienced (3+ Years)", min: 27000, max: 35000 },
    ],
    faqs: (loc) => [
      {
        question: "What does a live-in all-rounder typically handle?",
        answer:
          "An all-rounder manages cooking, cleaning, laundry and general household support in one role — exact duties are agreed with the family before joining.",
      },
      {
        question: `Do I need to provide accommodation in my ${loc.localityName} home?`,
        answer:
          "Yes, live-in staff require a safe sleeping space and meals. Many homes use a spare room, staff room or designated area.",
      },
      {
        question: "How many days off does a live-in helper get?",
        answer:
          "Weekly/monthly offs are agreed between the family and the candidate at the time of hiring; typical arrangements include 2-4 offs per month.",
      },
      {
        question: "Can the all-rounder also look after a child or elderly parent?",
        answer:
          "Yes, many all-rounders support childcare or elder care alongside housework — mention this upfront so we match accordingly.",
      },
    ],
    heroVariants: [
      (loc) =>
        `For busy households in ${loc.localityName}'s ${loc.housing}, one dependable person managing the whole home changes everything. Helprz places verified live-in all-rounders near ${lm(loc, 2)}.`,
      (loc) =>
        `From cooking to cleaning to daily errands, a good all-rounder runs the home so you don't have to. Helprz places experienced live-in helpers across ${loc.localityName}, ${loc.cityName}.`,
      (loc) =>
        `Households from ${loc.landmarks[0]} to ${loc.landmarks[1] ?? loc.landmarks[0]} trust Helprz for verified live-in all-rounders who manage cooking, cleaning and family support in one role.`,
      (loc) =>
        `${loc.localityName}'s ${loc.housing} often need round-the-clock household support. Helprz matches verified live-in all-rounders to your home's specific routine.`,
    ],
  },

  // -------------------------------------------------------------------------
  // 6. PART-TIME HELP (per task / hourly)
  // -------------------------------------------------------------------------
  {
    slug: "part-time-help",
    name: "Part-Time Help",
    namePlural: "Part-Time Helpers",
    metaTitle: (loc) =>
      `Part-Time Maid in ${loc.localityName} ${loc.cityName} | Hourly House Help | Helprz`,
    metaDescription: (loc) =>
      `Hire verified part-time house help in ${loc.localityName}, ${loc.cityName} for cleaning, utensils, dusting & mopping — 1 to 3 hours daily. Reliable hourly maids. Call Helprz today.`,
    responsibilities: [
      "Sweeping & mopping",
      "Dusting",
      "Washing utensils",
      "Bathroom cleaning",
      "Clothes washing / machine laundry",
      "Basic kitchen help",
    ],
    baseSalary: [
      { label: "1 hour/day (single task)", min: 2000, max: 3500 },
      { label: "2 hours/day (2-3 tasks)", min: 4000, max: 6500 },
      { label: "3 hours/day (full package)", min: 6000, max: 9500 },
    ],
    faqs: (loc) => [
      {
        question: `How much does a part-time maid cost in ${loc.localityName}?`,
        answer:
          "Charges depend on tasks and hours — typically priced per task or per hour block. The salary guide on this page shows the usual monthly range for the area.",
      },
      {
        question: "Can I hire part-time help for alternate days or weekends only?",
        answer:
          "Daily arrangements are most common, but alternate-day or custom schedules can be discussed based on candidate availability.",
      },
      {
        question: "Is the same person sent every day?",
        answer:
          "Yes, part-time help is a fixed placement — the same verified helper comes at the agreed time daily.",
      },
      {
        question: "What if the helper is on leave?",
        answer:
          "Replacement support is provided according to the terms of the service agreement you choose.",
      },
    ],
    heroVariants: [
      (loc) =>
        `Not every home in ${loc.localityName} needs full-time staff — sometimes two reliable hours a day is enough. Helprz places verified part-time helpers near ${lm(loc, 2)} for cleaning, utensils and daily chores.`,
      (loc) =>
        `From ${loc.landmarks[0]} to ${loc.landmarks[1] ?? loc.landmarks[0]}, Helprz places dependable part-time maids across ${loc.localityName}'s ${loc.housing} for daily 1-3 hour visits.`,
      (loc) =>
        `Daily sweeping, mopping and utensils — handled. Helprz matches verified part-time house help to homes across ${loc.localityName}, ${loc.cityName}, on schedules that fit yours.`,
      (loc) =>
        `Reliable hourly help is the backbone of most ${loc.cityName} homes. Helprz places verified part-time maids across ${loc.localityName}, with the same helper coming at the same time every day.`,
    ],
  },
];
