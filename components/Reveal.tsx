"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Fades/slides children in when they scroll into view. */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          el.style.transitionDelay = `${delay}ms`;
          el.classList.remove("opacity-0", "translate-y-6");
          io.unobserve(el);
        });
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`translate-y-6 opacity-0 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
