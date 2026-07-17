"use client";

import { useMemo, useState } from "react";

/**
 * Honest salary guidance estimator.
 * Ranges are indicative market guidance only — tune the numbers below to
 * Helprz's live market data whenever bands shift.
 */
const SERVICES: Record<string, { lo: number; hi: number; unit: string }> = {
  "Cook (full-time)": { lo: 14000, hi: 20000, unit: "per month · full-time" },
  "Housekeeping (full-time)": { lo: 12000, hi: 16000, unit: "per month · full-time" },
  "Nanny / Babysitter": { lo: 15000, hi: 22000, unit: "per month · full-time" },
  "Elderly care attendant": { lo: 16000, hi: 24000, unit: "per month · full-time" },
  "Live-in all-rounder": { lo: 18000, hi: 26000, unit: "per month · live-in" },
  "Part-time help (per task)": { lo: 3000, hi: 6000, unit: "per month · per task, part-time" },
};

const GEO: Record<string, Record<string, number>> = {
  Haryana: { Gurgaon: 1.1, Faridabad: 0.9 },
  Delhi: { "South Delhi": 1.15, "West Delhi": 1.0, "East Delhi": 0.95, "North Delhi": 0.95 },
  "Uttar Pradesh": { Noida: 1.0, "Greater Noida": 0.9, Ghaziabad: 0.9 },
};

const EXPERIENCE = [
  { label: "Less than 1 year", mult: 0.85 },
  { label: "1–3 years", mult: 1 },
  { label: "3–5 years", mult: 1.15 },
  { label: "5+ years", mult: 1.3 },
];

const selectCls =
  "w-full appearance-none rounded-xl border border-line bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition focus:border-indigo";

function Field({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
        {label}
      </span>
      <span className="relative block">
        <select className={selectCls} value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 h-2 w-2 -translate-y-[65%] rotate-45 border-b-2 border-r-2 border-brick-deep"
        />
      </span>
    </label>
  );
}

export default function SalaryEstimator() {
  const [state, setState] = useState("Haryana");
  const [city, setCity] = useState("Gurgaon");
  const [service, setService] = useState("Cook (full-time)");
  const [exp, setExp] = useState("1–3 years");

  const cities = Object.keys(GEO[state]);
  const effectiveCity = cities.includes(city) ? city : cities[0];

  const { range, unit } = useMemo(() => {
    const svc = SERVICES[service];
    const mult =
      GEO[state][effectiveCity] * (EXPERIENCE.find((e) => e.label === exp)?.mult ?? 1);
    const round = (v: number) => Math.round((v * mult) / 500) * 500;
    return {
      range: `₹${round(svc.lo).toLocaleString("en-IN")} – ₹${round(svc.hi).toLocaleString("en-IN")}`,
      unit: svc.unit,
    };
  }, [state, effectiveCity, service, exp]);

  return (
    <div className="mt-12 grid items-start gap-10 md:grid-cols-2">
      <div className="grid gap-5">
        <Field
          label="State"
          value={state}
          onChange={(v) => {
            setState(v);
            setCity(Object.keys(GEO[v])[0]);
          }}
          options={Object.keys(GEO)}
        />
        <Field label="City" value={effectiveCity} onChange={setCity} options={cities} />
        <Field label="Service" value={service} onChange={setService} options={Object.keys(SERVICES)} />
        <Field label="Experience" value={exp} onChange={setExp} options={EXPERIENCE.map((e) => e.label)} />
      </div>

      <div className="rounded-[20px] border border-line bg-white p-9 text-center md:sticky md:top-24">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
          Recommended salary range
        </p>
        <p className="font-display mt-3 text-3xl font-bold text-indigo md:text-4xl">{range}</p>
        <p className="mt-1.5 text-sm text-ink-soft">{unit}</p>
        <p className="mt-6 border-t border-line pt-4 text-left text-xs leading-relaxed text-ink-soft">
          Indicative guidance only, based on prevailing market ranges for the selections above.
          Final salaries are always agreed directly between you and the helper — Helprz simply
          helps both sides start from a fair, realistic number.
        </p>
      </div>
    </div>
  );
}
