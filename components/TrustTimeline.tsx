"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    k: "Step 1 — Today",
    price: "₹5,000",
    title: "registration & search fee",
    body: "A non-refundable fee that starts our recruitment process: requirement analysis, candidate sourcing, interviews and shortlisting begin immediately.",
  },
  {
    k: "Step 2 — One week",
    title: "We search, you stay informed.",
    body: "For about a week we actively search for candidates matching your requirements — and keep you updated throughout the process.",
  },
  {
    k: "Step 3 — Joining day",
    title: "A monthly service fee, not a lump sum.",
    body: "Once your helper joins, instead of collecting an entire agency fee upfront, Helprz charges a monthly service fee. That's what allows us to keep supporting both you and the worker throughout the engagement.",
  },
  {
    k: "Step 4 — Up to 12 months",
    title: "We stay with you.",
    body: "Our team remains available for ongoing support according to your chosen service plan — guidance, mediation, and replacement assistance when your agreement provides for it.",
  },
];

export default function TrustTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (window.innerHeight * 0.75 - r.top) / r.height));
      setProgress(p);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="relative mt-14 max-w-3xl">
      {/* rail + beam */}
      <div className="absolute bottom-3 left-[15px] top-3 w-px bg-line" aria-hidden />
      <div
        aria-hidden
        style={{ height: `${progress * 100}%` }}
        className="absolute left-[15px] top-3 w-px bg-marigold-deep transition-[height] duration-200"
      />

      {steps.map((s, i) => {
        const lit = progress > (i + 0.4) / steps.length;
        return (
          <div key={s.k} className="relative pb-14 pl-16 last:pb-0">
            <div
              className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-white font-mono text-[10px] font-semibold transition-all duration-500 ${
                lit
                  ? "border-marigold-deep text-brick-deep shadow-[0_0_0_5px_rgba(246,185,13,0.15)]"
                  : "border-line text-ink-soft"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brick-deep">
              {s.k}
            </p>
            <h3 className="font-display mt-1.5 text-xl font-semibold text-indigo md:text-2xl">
              {s.price && (
                <span className="font-display mr-2 text-3xl font-bold text-brick-deep">
                  {s.price}
                </span>
              )}
              {s.title}
            </h3>
            <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
          </div>
        );
      })}
    </div>
  );
}
