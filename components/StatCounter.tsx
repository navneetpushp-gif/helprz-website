"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  target,
  suffix = "",
  decimals = 0,
  label,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(target * eased);
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  const display = decimals
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString("en-IN");

  return (
    <div ref={ref} className="rounded-2xl border border-line bg-white px-6 py-8 text-center">
      <h3 className="font-display text-3xl font-bold text-indigo">
        {display}
        {suffix}
      </h3>
      <p className="mt-1 text-sm text-ink-soft">{label}</p>
    </div>
  );
}
