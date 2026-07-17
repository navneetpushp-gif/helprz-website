"use client";

import { useEffect, useState } from "react";

export default function SiteChrome() {
  const [scroll, setScroll] = useState(0);
  const [waVisible, setWaVisible] = useState(true);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100;
      setScroll(pct);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.paddingBottom = waVisible ? "78px" : "0px";
  }, [waVisible]);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[70] h-[3px] bg-marigold transition-[width] duration-100"
        style={{ width: `${scroll}%` }}
      />
      {waVisible && (
        <div className="fixed inset-x-0 bottom-0 z-[60] flex items-center justify-between gap-5 bg-[#0A0E1F] px-6 py-3.5 shadow-[0_-10px_30px_rgba(0,0,0,0.35)]">
          <div>
            <h4 className="text-sm font-bold text-white">Need help right now?</h4>
            <p className="hidden text-xs leading-relaxed text-[#9AA3B5] sm:block">
              If you want to be in touch directly, kindly press WhatsApp to speak to a team member.
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center gap-3.5">
            <a
              href="https://wa.me/919717923266"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 text-sm font-bold text-[#25D366]"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 flex-shrink-0">
                <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" fill="currentColor" />
                <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="hidden sm:inline">WhatsApp us</span>
            </a>
            <a
              href="/#contact"
              className="hidden rounded-full bg-marigold px-5 py-2.5 text-sm font-bold text-indigo-deep sm:block"
            >
              Book a Service
            </a>
            <button
              aria-label="Close bar"
              onClick={() => setWaVisible(false)}
              className="flex-shrink-0 px-1 text-xl text-[#6B7386] hover:text-white"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
