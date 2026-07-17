import Link from "next/link";
import { PageData } from "@/lib/types";
import FAQAccordion from "@/components/FAQAccordion";

export default function PageTemplate({ data }: { data: PageData }) {
  const { cityName, localityName, serviceName, serviceNamePlural } = data;

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-6 pt-6 text-xs text-ink-soft">
        <Link href="/" className="hover:text-indigo">Home</Link>
        <span className="mx-2">/</span>
        <span>{cityName}</span>
        <span className="mx-2">/</span>
        <span>{localityName}</span>
        <span className="mx-2">/</span>
        <span className="text-indigo">{serviceNamePlural}</span>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="font-mono text-[13px] font-semibold uppercase tracking-[0.16em] text-marigold-deep">
          {cityName} &middot; {localityName}
        </div>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] text-indigo md:text-5xl">
          Hire Verified {serviceNamePlural} in {localityName}, {cityName}
        </h1>
        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft">
          {data.heroIntro}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="tel:+919717923266"
            className="rounded-full bg-marigold px-7 py-3.5 text-sm font-bold text-indigo-deep shadow-[0_10px_24px_rgba(231,163,59,0.35)] transition hover:bg-marigold-deep"
          >
            Call 97179 23266 →
          </a>
          <a
            href="https://wa.me/919717923266"
            className="rounded-full border-2 border-indigo px-7 py-3.5 text-sm font-bold text-indigo transition hover:bg-indigo hover:text-white"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      <div className="threshold thin" style={{ height: 6 }} />

      {/* What this service covers */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-display text-2xl font-bold text-indigo">
          What Does a {serviceName} in {localityName} Do?
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {data.responsibilities.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-line bg-sand-deep px-4 py-3 text-sm text-ink"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-marigold text-[10px] text-indigo-deep">
                &#10003;
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Salary table */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-display text-2xl font-bold text-indigo">
          Typical {serviceName} Salary in {localityName}
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          Actual salaries depend on experience, working hours and responsibilities.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-indigo text-white">
              <tr>
                <th className="px-6 py-3 font-semibold">Experience</th>
                <th className="px-6 py-3 font-semibold">Typical Monthly Salary</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-white">
              {data.salary.map((band) => (
                <tr key={band.label}>
                  <td className="px-6 py-3 text-ink">{band.label}</td>
                  <td className="px-6 py-3 text-ink-soft">
                    ₹{band.min.toLocaleString("en-IN")}–{band.max.toLocaleString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Nearby societies */}
      {data.nearbySocieties.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-display text-2xl font-bold text-indigo">
            Areas We Cover Around {localityName}
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {data.nearbySocieties.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line bg-sand-deep px-4 py-2 text-sm text-ink"
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Testimonial */}
      {data.testimonial && (
        <section className="bg-indigo-deep py-14">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative rounded-[20px] border border-white/10 bg-indigo p-8">
              <span className="font-display block text-5xl italic leading-none text-marigold opacity-55">
                &ldquo;
              </span>
              <p className="mt-1 text-[15px] leading-relaxed text-white">
                {data.testimonial.quote}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brick font-display font-bold text-white">
                  {data.testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{data.testimonial.name}</div>
                  <div className="text-xs text-[#9FADB4]">{data.testimonial.location}</div>
                </div>
              </div>
              {data.testimonial.isPlaceholder && (
                <div className="mt-4 inline-block rounded-full bg-marigold/15 px-3 py-1 font-mono text-[11px] font-semibold text-marigold">
                  SAMPLE QUOTE — REPLACE WITH A REAL CUSTOMER REVIEW
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-display text-2xl font-bold text-indigo">
          Frequently Asked Questions
        </h2>
        <div className="mt-6">
          <FAQAccordion faqs={data.faqs} />
        </div>
      </section>

      {/* Internal linking */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 sm:grid-cols-2">
          {data.nearbyAreaLinks.length > 0 && (
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-marigold-deep">
                Nearby Areas
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {data.nearbyAreaLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-semibold text-indigo underline decoration-marigold underline-offset-4 hover:text-marigold-deep">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {data.relatedServiceLinks.length > 0 && (
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-marigold-deep">
                Related Services
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {data.relatedServiceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-semibold text-indigo underline decoration-marigold underline-offset-4 hover:text-marigold-deep">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CTA — stamped ticket, matched to the live site's cta-banner */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-[28px] bg-marigold p-10 md:p-14">
          <div className="threshold absolute left-0 right-0 top-0" />
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div>
              <h2 className="max-w-lg font-display text-2xl font-bold text-indigo-deep md:text-3xl">
                Looking for a {serviceName} in {localityName}?
              </h2>
              <p className="mt-2 text-sm text-[#5C4413]">
                Speak with a Helprz consultant today.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+919717923266"
                  className="rounded-full bg-indigo px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-deep"
                >
                  Call 97179 23266
                </a>
                <a
                  href="https://wa.me/919717923266"
                  className="rounded-full border-2 border-indigo-deep px-6 py-3 text-sm font-bold text-indigo-deep"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div
              className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full border-[3px] border-dashed border-indigo-deep"
              style={{ transform: "rotate(-12deg)" }}
            >
              <span className="font-mono text-[9.5px] font-semibold uppercase leading-snug tracking-wide text-indigo-deep">
                Verified
                <br />
                &amp; Trusted
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
