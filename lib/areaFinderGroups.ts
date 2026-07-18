// ============================================================================
// AREA FINDER GROUPS
//
// Builds the `groups` prop for <AreaFinder /> from the full page dataset,
// so every locality and service (hand-written + generated) automatically
// appears in the homepage dropdowns. No component changes needed.
//
// Save as: lib/areaFinderGroups.ts
// ============================================================================

import { getAllPages } from "@/data/pages";

type LinkItem = { label: string; href: string };
type LocalityGroup = { cityName: string; localityName: string; links: LinkItem[] };

const CITY_ORDER = ["Gurgaon", "Noida", "Delhi"];

export function buildAreaFinderGroups(): [string, LocalityGroup][] {
  const map = new Map<string, LocalityGroup>();

  for (const p of getAllPages()) {
    const key = `${p.citySlug}/${p.localitySlug}`;
    if (!map.has(key)) {
      map.set(key, { cityName: p.cityName, localityName: p.localityName, links: [] });
    }
    const group = map.get(key)!;
    const href = `/${p.citySlug}/${p.localitySlug}/${p.serviceSlug}`;
    if (!group.links.some((l) => l.href === href)) {
      group.links.push({ label: p.serviceName, href });
    }
  }

  // Sort: city in fixed order, then locality alphabetically within each city
  return Array.from(map.entries()).sort(([, a], [, b]) => {
    const cityDiff = CITY_ORDER.indexOf(a.cityName) - CITY_ORDER.indexOf(b.cityName);
    if (cityDiff !== 0) return cityDiff;
    return a.localityName.localeCompare(b.localityName, undefined, { numeric: true });
  });
}
