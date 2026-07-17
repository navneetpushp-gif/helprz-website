"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The two-sides story: a large upfront payment that fades away vs the
 * Helprz monthly flow that lights up step by step. Pure CSS transitions
 * driven by one IntersectionObserver — no animation libraries.
 */
export default function TrustStory() {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setPlay(true);
          io.unobserve(el);
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const flowSteps = [
    { bold: "₹5,000", rest: " — registration & search begins" },
    { bold: "Monthly service fee", rest: " — only after your helper joins" },
    { bold: "Ongoing support", rest: " — we stay involved" },
    { bold: "Relationship continues", rest: " — month after month" },
    { bold: "Trust grows", rest: " — our incentives stay aligned with yours" },
  ];

  return (
    <div ref={ref} className="mt-12 grid gap-5 md:grid-cols-2">
      {/* The usual way */}
      <div className="relative overflow-hidden rounded-[20px] border border-line bg-white p-9">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
          The usual way
        </p>
        <h3 className="font-display mt-2 text-2xl font-semibold text-indigo">
          Everything upfront.
        </h3>

        <div className="relative mt-9 h-44">
          <div
            className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full border-2 border-brick-deep font-display text-lg text-brick-deep transition-all duration-[2000ms] ease-out ${
              play ? "scale-90 opacity-10 delay-1000" : ""
            }`}
          >
            ₹25–30k
          </div>
          {[
            { left: "22%", delay: "delay-[1600ms]" },
            { left: "48%", delay: "delay-[2000ms]" },
            { left: "72%", delay: "delay-[2400ms]" },
          ].map((q, i) => (
            <span
              key={i}
              style={{ left: q.left, top: "55%" }}
              className={`font-display absolute text-2xl text-ink-soft transition-all duration-1000 ${q.delay} ${
                play ? "-translate-y-6 opacity-70" : "opacity-0"
              }`}
            >
              ?
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          A large payment before the relationship begins. Once it&apos;s made,
          most of the incentive to keep helping quietly fades — and the
          questions begin.
        </p>
      </div>

      {/* The Helprz way */}
      <div className="rounded-[20px] border border-indigo bg-indigo p-9 text-white">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-marigold">
          The Helprz way
        </p>
        <h3 className="font-display mt-2 text-2xl font-semibold">
          ₹5,000 today. Trust, monthly.
        </h3>

        <div className="mt-8">
          {flowSteps.map((s, i) => (
            <div
              key={s.bold}
              style={{ transitionDelay: play ? `${900 + i * 380}ms` : "0ms" }}
              className={`flex items-center gap-4 border-t border-white/10 py-3.5 transition-all duration-500 ease-out first:border-t-0 ${
                play ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-marigold" />
              <span className="text-[15px] leading-snug">
                <b className="font-display font-semibold text-marigold">{s.bold}</b>
                {s.rest}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
