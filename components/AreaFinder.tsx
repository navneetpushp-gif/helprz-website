"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type LinkItem = { label: string; href: string };
type LocalityGroup = { cityName: string; localityName: string; links: LinkItem[] };

export default function AreaFinder({
  groups,
}: {
  groups: [string, LocalityGroup][];
}) {
  const router = useRouter();

  const cities = useMemo(
    () => Array.from(new Set(groups.map(([, g]) => g.cityName))),
    [groups]
  );

  const [city, setCity] = useState(cities[0] ?? "");

  const localitiesForCity = useMemo(
    () => groups.filter(([, g]) => g.cityName === city),
    [groups, city]
  );

  const [localityKey, setLocalityKey] = useState(
    localitiesForCity[0]?.[0] ?? ""
  );

  const currentGroup = useMemo(
    () => groups.find(([key]) => key === localityKey)?.[1],
    [groups, localityKey]
  );

  const [serviceHref, setServiceHref] = useState(
    currentGroup?.links[0]?.href ?? ""
  );

  function handleCityChange(next: string) {
    setCity(next);
    const firstLocality = groups.find(([, g]) => g.cityName === next);
    const key = firstLocality?.[0] ?? "";
    setLocalityKey(key);
    setServiceHref(firstLocality?.[1].links[0]?.href ?? "");
  }

  function handleLocalityChange(key: string) {
    setLocalityKey(key);
    const group = groups.find(([k]) => k === key)?.[1];
    setServiceHref(group?.links[0]?.href ?? "");
  }

  function handleGo() {
    if (serviceHref) router.push(serviceHref);
  }

  const selectClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink";

  return (
    <div className="rounded-2xl border border-line bg-sand-deep p-6">
      <div className="grid gap-3 sm:grid-cols-3">
        <div>
          <label className="text-xs font-semibold text-ink-soft">City</label>
          <select
            className={`mt-1.5 ${selectClass}`}
            value={city}
            onChange={(e) => handleCityChange(e.target.value)}
          >
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-ink-soft">Area</label>
          <select
            className={`mt-1.5 ${selectClass}`}
            value={localityKey}
            onChange={(e) => handleLocalityChange(e.target.value)}
          >
            {localitiesForCity.map(([key, g]) => (
              <option key={key} value={key}>
                {g.localityName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-ink-soft">Service</label>
          <select
            className={`mt-1.5 ${selectClass}`}
            value={serviceHref}
            onChange={(e) => setServiceHref(e.target.value)}
          >
            {currentGroup?.links.map((l) => (
              <option key={l.href} value={l.href}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleGo}
        className="mt-4 w-full rounded-full bg-marigold py-3 text-sm font-bold text-indigo-deep transition hover:bg-marigold-deep sm:w-auto sm:px-8"
      >
        Find Help →
      </button>
    </div>
  );
}
