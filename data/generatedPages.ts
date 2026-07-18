// ============================================================================
// GENERATED PAGES
//
// Composes every locality (data/localities.ts) with every service
// (data/servicesCatalog.ts) into full PageData objects — the same shape as
// the hand-written pages in data/pages.ts.
//
// Hand-written pages always win: data/pages.ts filters out any generated
// combo that already exists there, so you can hand-craft/override any page
// simply by adding it to pages.ts.
// ============================================================================

import { PageData } from "@/lib/types";
import { localities, LocalityInfo } from "./localities";
import { services, ServiceDef, salaryForTier } from "./servicesCatalog";

/** Deterministic pick of a hero variant so builds are stable */
function pickVariant(loc: LocalityInfo, svcIndex: number, count: number): number {
  let h = svcIndex;
  for (let i = 0; i < loc.localitySlug.length; i++) {
    h = (h * 31 + loc.localitySlug.charCodeAt(i)) % 997;
  }
  return h % count;
}

function buildPage(
  loc: LocalityInfo,
  svc: ServiceDef,
  svcIndex: number,
  cityLocalities: LocalityInfo[]
): PageData {
  const variant = pickVariant(loc, svcIndex, svc.heroVariants.length);

  // Nearby-area links: next 2 localities in the same city (wrap-around),
  // pointing at the same service — keeps the internal link graph connected.
  const myIdx = cityLocalities.findIndex((l) => l.localitySlug === loc.localitySlug);
  const nearby = [1, 2].map((step) => {
    const n = cityLocalities[(myIdx + step) % cityLocalities.length];
    return {
      label: `${svc.name} in ${n.localityName}`,
      href: `/${n.citySlug}/${n.localitySlug}/${svc.slug}`,
    };
  });

  // Related-service links: 2 other services in the same locality (rotating).
  const related = [1, 2].map((step) => {
    const s = services[(svcIndex + step) % services.length];
    return {
      label: `${s.name} in ${loc.localityName}`,
      href: `/${loc.citySlug}/${loc.localitySlug}/${s.slug}`,
    };
  });

  return {
    citySlug: loc.citySlug,
    cityName: loc.cityName,
    localitySlug: loc.localitySlug,
    localityName: loc.localityName,
    serviceSlug: svc.slug,
    serviceName: svc.name,
    serviceNamePlural: svc.namePlural,

    metaTitle: svc.metaTitle(loc),
    metaDescription: svc.metaDescription(loc),

    heroIntro: svc.heroVariants[variant](loc),
    nearbySocieties: loc.landmarks,
    responsibilities: svc.responsibilities,
    salary: salaryForTier(svc.baseSalary, loc.tier),
    faqs: svc.faqs(loc),

    nearbyAreaLinks: nearby,
    relatedServiceLinks: related,
  };
}

/** Every locality × every service, fully populated */
export function buildGeneratedPages(): PageData[] {
  const out: PageData[] = [];
  const byCity: Record<string, LocalityInfo[]> = {};
  for (const loc of localities) {
    (byCity[loc.citySlug] ??= []).push(loc);
  }
  for (const loc of localities) {
    services.forEach((svc, i) => {
      out.push(buildPage(loc, svc, i, byCity[loc.citySlug]));
    });
  }
  return out;
}
