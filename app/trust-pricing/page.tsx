import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquareText,
  IndianRupee,
  Headset,
  Repeat,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import TrustStory from "@/components/TrustStory";
import TrustTimeline from "@/components/TrustTimeline";
import SalaryEstimator from "@/components/SalaryEstimator";
import StatCounter from "@/components/StatCounter";

export const metadata: Metadata = {
  title:
    "Trust Pricing — The Transparent Maid Agency with Monthly Service Charges | Helprz Delhi NCR",
  description:
    "Helprz is a transparent maid agency in Delhi NCR with monthly maid service charges instead of large upfront fees. ₹5,000 to begin, honest salary guidance, ongoing support and replacement assistance for full-time, part-time and live-in maid services.",
  alternates: { canonical: "/trust-pricing" },
  openGraph: {
    title: "Helprz Trust Pricing — We Earn Your Trust Every Month",
    description:
      "₹5,000 to begin. A fair monthly service fee after your helper joins. Support for up to 12 months. The honest maid agency model for Delhi NCR.",
    type: "website",
  },
};

const promises = [
  {
    icon: MessageSquareText,
    title: "Transparent communication",
    desc: "You'll always know where your search stands, what we've found, and what happens next.",
  },
  {
    icon: IndianRupee,
    title: "Fair salary guidance",
    desc: "Realistic, market-based salary ranges — fair to your family and fair to the helper.",
  },
  {
    icon: Headset,
    title: "Professional support",
    desc: "A real team you can reach, with a real process behind every placement.",
  },
  {
    icon: Repeat,
    title: "Replacement assistance",
    desc: "If things don't work out, we assist with replacements according to your service agreement.",
  },
  {
    icon: HeartHandshake,
    title: "Continuous customer care",
    desc: "Our relationship doesn't end at joining day — that's where it actually begins.",
  },
  {
    icon: BadgeCheck,
    title: "Honest expectations from Day One",
    desc: "We tell you what's realistic before you pay a rupee more — not after.",
  },
];

const traditional = [
  "Large upfront payment",
  "Limited ongoing relationship",
  "Support often ends after placement",
  "The customer bears most of the risk",
];

const trustModel = [
  "Small initial commitment",
  "A monthly relationship",
  "Continuous service",
  "Transparent pricing",
  "Long-term customer support",
  "Incentives that stay aligned with yours",
];

const journey = [
  { title: "Requirement", desc: "Tell us who you need, for what, and when." },
  { title: "Consultation", desc: "Honest guidance on roles, salaries and timelines." },
  { title: "Candidate search", desc: "Active sourcing against your exact requirement." },
  { title: "Interviews", desc: "Meet shortlisted, verified candidates." },
  { title: "Selection", desc: "Choose with clear terms on both sides." },
  { title: "Joining", desc: "Your helper begins. Our monthly fee begins too." },
  { title: "Monthly support", desc: "We stay reachable, involved and accountable." },
  { title: "Long-term relationship", desc: "Renewals, guidance and care that continues." },
];

// NOTE: sample figures for design — wire to live service data before launch.
const stats = [
  { target: 1200, suffix: "+", label: "Families served" },
  { target: 950, suffix: "+", label: "Successful placements" },
  { target: 4300, suffix: "+", label: "Support requests resolved" },
  { target: 310, suffix: "+", label: "Replacements assisted" },
  { target: 96, suffix: "%", label: "Customer satisfaction" },
  { target: 2, suffix: " hrs", label: "Average response time" },
];

export default function TrustPricingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Helprz Trust Pricing",
    serviceType: "Domestic help placement and monthly support",
    areaServed: ["Delhi NCR", "Gurgaon", "Noida", "Delhi", "Faridabad", "Ghaziabad"],
    provider: { "@type": "LocalBusiness", name: "Helprz", url: "https://www.helprz.in" },
    offers: {
      "@type": "Offer",
      price: "5000",
      priceCurrency: "INR",
      description:
        "Non-refundable registration & search fee; monthly service fee applies after placement per chosen plan.",
    },
  };

  return (
    <main className="bg-sand">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ================= HERO ================= */}
      <section className="bg-indigo-deep px-6 pb-24 pt-24 text-center text-white md:pb-32 md:pt-32">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-marigold">
            Helprz Trust Pricing
          </p>
          <Reveal>
            <h1 className="font-display mt-5 text-4xl font-semibold leading-[1.06] md:text-6xl">
              Why pay <em className="italic text-marigold">₹30,000</em> before you even know
              the maid?
            </h1>
          </Reveal>
          <Reveal delay={700}>
            <h2 className="font-display mt-8 text-2xl font-medium text-[#B9C6CE] md:text-4xl">
              At Helprz, we earn your trust <em className="italic text-white">every month.</em>
            </h2>
          </Reveal>
          <Reveal delay={1100}>
            <a
              href="#how"
              className="mt-10 inline-block rounded-full bg-marigold px-8 py-4 text-sm font-bold text-indigo-deep transition hover:bg-marigold-deep"
            >
              Explore our Trust Pricing →
            </a>
          </Reveal>
        </div>
      </section>

      <div className="threshold" />

      {/* ================= STORY ================= */}
      <section className="bg-sand-deep px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brick-deep">
            Two ways to begin
          </p>
          <Reveal>
            <h2 className="font-display mt-3 text-3xl font-semibold text-indigo md:text-5xl">
              The same search. A very different{" "}
              <em className="italic text-brick-deep">relationship.</em>
            </h2>
          </Reveal>
          <TrustStory />
        </div>
      </section>

      {/* ================= PROMISE ================= */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brick-deep">
            Our promise
          </p>
          <Reveal>
            <h2 className="font-display mt-3 text-3xl font-semibold text-indigo md:text-5xl">
              We don&apos;t promise perfect people.
              <br />
              We promise <em className="italic text-brick-deep">honest service.</em>
            </h2>
          </Reveal>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-soft">
            Finding the right domestic helper depends on many human factors. Instead of making
            unrealistic promises, Helprz makes honest ones — and keeps them.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-[20px] border border-line bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-marigold/15 text-brick-deep">
                    <p.icon size={19} strokeWidth={2.1} />
                  </span>
                  <h3 className="font-display mt-4 text-lg font-semibold text-indigo">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="threshold" />

      {/* ================= HOW IT WORKS ================= */}
      <section id="how" className="bg-sand-deep px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brick-deep">
            How Trust Pricing works
          </p>
          <Reveal>
            <h2 className="font-display mt-3 text-3xl font-semibold text-indigo md:text-5xl">
              Small beginning. <em className="italic text-brick-deep">Long relationship.</em>
            </h2>
          </Reveal>
          <TrustTimeline />
        </div>
      </section>

      {/* ================= WHY DIFFERENT ================= */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brick-deep">
            Why this model is different
          </p>
          <Reveal>
            <h2 className="font-display mt-3 text-3xl font-semibold text-indigo md:text-5xl">
              Aligned incentives, by <em className="italic text-brick-deep">design.</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[20px] border border-line bg-white p-9">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
                  The traditional model
                </p>
                <h3 className="font-display mt-2 text-2xl font-semibold text-indigo">
                  Paid before the work is proven.
                </h3>
                <ul className="mt-6">
                  {traditional.map((t) => (
                    <li
                      key={t}
                      className="border-t border-line py-3.5 text-[15px] text-ink-soft first:border-t-0"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="h-full rounded-[20px] bg-indigo p-9 text-white">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-marigold">
                  The Helprz Trust Model
                </p>
                <h3 className="font-display mt-2 text-2xl font-semibold">
                  Earned while the work is happening.
                </h3>
                <ul className="mt-6">
                  {trustModel.map((t) => (
                    <li
                      key={t}
                      className="border-t border-white/10 py-3.5 text-[15px] first:border-t-0"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="threshold" />

      {/* ================= SALARY GUIDANCE ================= */}
      <section className="bg-sand-deep px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brick-deep">
            Transparency
          </p>
          <Reveal>
            <h2 className="font-display mt-3 text-3xl font-semibold text-indigo md:text-5xl">
              Honest salary <em className="italic text-brick-deep">guidance.</em>
            </h2>
          </Reveal>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-soft">
            One of the biggest reasons placements fail is unrealistic salary expectations.
            Helprz provides realistic, market-based salary guidance built on experience,
            responsibilities and local demand — because fair pay creates placements that last.
          </p>
          <SalaryEstimator />
        </div>
      </section>

      {/* ================= TRUST COUNTERS ================= */}
      <section className="bg-indigo-deep px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-marigold">
            The relationship, in numbers
          </p>
          <Reveal>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-5xl">
              Trust you can <em className="italic text-marigold">count.</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((s) => (
              <StatCounter key={s.label} target={s.target} suffix={s.suffix} label={s.label} />
            ))}
          </div>
          <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[#B9C6CE]">
            Sample figures shown for design — connect to live service data before launch.
          </p>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brick-deep">
            Your journey with Helprz
          </p>
          <Reveal>
            <h2 className="font-display mt-3 text-3xl font-semibold text-indigo md:text-5xl">
              From first call to <em className="italic text-brick-deep">long-term care.</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid overflow-hidden rounded-[20px] border border-line sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j, i) => (
              <div key={j.title} className="border-b border-r border-line bg-white p-6">
                <p className="font-mono text-[10px] font-semibold tracking-[0.14em] text-brick-deep">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-base font-semibold text-indigo">
                  {j.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="threshold" />

      {/* ================= SEO LONGFORM ================= */}
      <section className="bg-sand-deep px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brick-deep">
            For families searching for honest help
          </p>
          <Reveal>
            <h2 className="font-display mt-3 text-3xl font-semibold text-indigo md:text-5xl">
              A transparent maid agency for{" "}
              <em className="italic text-brick-deep">Delhi NCR.</em>
            </h2>
          </Reveal>
          <div className="mt-10 max-w-none text-[15px] leading-[1.85] text-ink-soft md:columns-2 md:gap-14 [&_b]:font-semibold [&_b]:text-ink [&_p]:mb-5 [&_p]:break-inside-avoid">
            <p>
              Helprz is a <b>transparent maid agency</b> built around one idea: an agency
              should keep earning its fee for as long as you need its help. That is why Helprz
              replaced the traditional large upfront charge with{" "}
              <b>monthly maid service charges</b> — a small ₹5,000 registration and search fee
              to begin, and a fair monthly service fee only after your helper actually joins.
            </p>
            <p>
              Whether you are looking for <b>full-time maid services</b>,{" "}
              <b>part-time maid services</b>, or <b>live-in maid services</b>, the model stays
              the same. As a <b>maid agency with monthly payment</b>, our incentive is simple:
              if we don&apos;t support you well this month, we don&apos;t deserve next month.
              Families searching for an <b>honest maid agency</b> or a{" "}
              <b>verified maid agency</b> usually arrive at Helprz after experiencing the
              opposite — and the difference they describe most often isn&apos;t the price.
              It&apos;s the relationship.
            </p>
            <p>
              As a <b>domestic help agency</b> serving <b>Delhi NCR</b> — including families
              searching for a <b>maid agency in Gurgaon</b>, a <b>maid agency in Delhi</b>, and
              households across Noida — Helprz combines careful verification, realistic salary
              guidance and structured support plans. Our <b>monthly home service plans</b>{" "}
              include ongoing assistance for up to 12 months, with <b>ongoing maid support</b>{" "}
              and replacement assistance according to your service agreement.
            </p>
            <p>
              We believe <b>transparent domestic staffing</b> should be the norm, not the
              exception: clear fees stated before you commit, honest expectations set on day
              one, fair pay for the helpers who make homes run, and a{" "}
              <b>housemaid agency in India</b> that stays accountable every single month. That
              is Trust Pricing — and it&apos;s the reason families choose Helprz, and stay with
              Helprz.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 py-28 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brick-deep">
            Begin with trust
          </p>
          <Reveal>
            <h2 className="font-display mt-4 text-3xl font-semibold text-indigo md:text-5xl">
              Great service isn&apos;t paid for upfront.
              <br />
              <em className="italic text-brick-deep">It&apos;s earned every month.</em>
            </h2>
          </Reveal>
          <p className="mt-6 text-ink-soft">
            Talk to us about what your home needs — we&apos;ll give you honest answers before we
            ask for anything more.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919717923266"
              className="rounded-full bg-marigold px-8 py-4 text-sm font-bold text-indigo-deep transition hover:bg-marigold-deep"
            >
              Book your consultation today
            </a>
            <Link
              href="/"
              className="rounded-full border-2 border-line px-8 py-4 text-sm font-semibold text-indigo transition hover:border-indigo"
            >
              Explore our services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
