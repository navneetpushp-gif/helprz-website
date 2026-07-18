import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Headset,
  Lock,
  Sparkles,
  ChefHat,
  Baby,
  HeartPulse,
  Car,
  Wand2,
  UtensilsCrossed,
  Waves,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { getAllPages } from "@/data/pages";
import FAQAccordion from "@/components/FAQAccordion";
import StatCounter from "@/components/StatCounter";
import AreaFinder from "@/components/AreaFinder";

const services = [
  { icon: Sparkles, label: "Maid & Housekeeping", desc: "Daily, weekly or one-time deep cleaning by trained house help." },
  { icon: ChefHat, label: "Cook & Chef", desc: "Home-style meals or gourmet cooking, tailored to your taste." },
  { icon: Baby, label: "Babysitter & Nanny", desc: "Caring, verified nannies for infants, toddlers and young kids." },
  { icon: HeartPulse, label: "Elder & Patient Care", desc: "Trained attendants for elder care, mobility and post-surgery support." },
  { icon: Car, label: "Drivers", desc: "Verified personal drivers for daily commutes, trips and events." },
  { icon: Wand2, label: "Beautician at Home", desc: "Salon-quality grooming, styling and beauty services at your doorstep." },
  { icon: UtensilsCrossed, label: "Party Chef & Catering", desc: "Professional chefs and catering for parties, get-togethers & events." },
  { icon: Waves, label: "Massage at Home", desc: "Relaxing, therapeutic massage sessions by certified therapists." },
];

const trustItems = [
  { icon: ShieldCheck, title: "Verified Professionals", desc: "100% Background Checked" },
  { icon: Users, title: "Trusted by Thousands", desc: "Happy Customers" },
  { icon: Headset, title: "24/7 Customer Support", desc: "We're Here to Help" },
  { icon: Lock, title: "Safe & Secure", desc: "Your Safety is Our Priority" },
];

const steps = [
  { num: "01", title: "Choose a service", desc: "Pick from maid, cook, driver, care or any of our home services." },
  { num: "02", title: "Pick a time", desc: "Select a date and time slot that works best for you." },
  { num: "03", title: "Get matched", desc: "We connect you with a verified, background-checked professional." },
  { num: "04", title: "Relax at home", desc: "Sit back while trusted help takes care of the rest." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Rigorous verification", desc: "Every professional is background-checked, ID-verified and trained before onboarding." },
  { icon: Clock, title: "On-time, every time", desc: "Real-time tracking and reliable scheduling so you're never left waiting." },
  { icon: Headset, title: "Round-the-clock support", desc: "Our support team is available 24/7 to help with bookings or concerns." },
];

const testimonials = [
  {
    quote: "Booked a maid within minutes and she arrived right on time. Helprz has made my mornings so much easier.",
    name: "Riya Malhotra",
    location: "Sector 92, Gurgaon",
  },
  {
    quote: "The elder care attendant they sent for my father was patient, trained and genuinely caring. Highly recommend.",
    name: "Anil Kapoor",
    location: "DLF Phase 3, Gurgaon",
  },
  {
    quote: "Booked a chef for our anniversary dinner — the food and service were restaurant-quality, right in our home.",
    name: "Simran Kaur",
    location: "Sushant Lok, Gurgaon",
  },
];

const faqs = [
  {
    question: "How are Helprz professionals verified?",
    answer:
      "Every professional goes through ID verification, background checks, and reference checks before being listed, plus in-person training for the service they offer.",
  },
  {
    question: "How quickly can I book someone?",
    answer:
      "Most bookings are confirmed within minutes. For live-in staff or specialised care, matching can take a few hours depending on your requirements.",
  },
  {
    question: "What if I'm not happy with the professional sent?",
    answer:
      "Let our support team know within 24 hours and we'll arrange a replacement at no extra cost, no questions asked.",
  },
  {
    question: "Which areas in Delhi/NCR do you cover?",
    answer:
      "We currently serve Gurgaon, Delhi, Noida, Faridabad and Ghaziabad, with new neighbourhoods added every month.",
  },
  {
    question: "Is there a minimum commitment period?",
    answer:
      "No. You can book a one-time service or set up recurring visits — daily, weekly, or monthly — whichever suits your home.",
  },
];

export default function HomePage() {
  const pages = getAllPages();
  const byLocality = new Map<
    string,
    { cityName: string; localityName: string; links: { label: string; href: string }[] }
  >();
  for (const p of pages) {
    const key = `${p.citySlug}/${p.localitySlug}`;
    if (!byLocality.has(key)) {
      byLocality.set(key, { cityName: p.cityName, localityName: p.localityName, links: [] });
    }
    byLocality.get(key)!.links.push({
      label: p.serviceNamePlural,
      href: `/${p.citySlug}/${p.localitySlug}/${p.serviceSlug}`,
    });
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Helprz",
    image: "https://www.helprz.in/hero-photo.png",
    telephone: "+91-9717923266",
    email: "Support@helprz.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rising Homes, Sector 92",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    areaServed: ["Gurgaon", "Noida", "Delhi", "Faridabad", "Ghaziabad"],
    url: "https://www.helprz.in",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Helprz",
    url: "https://www.helprz.in",
  };

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <main className="bg-white">
      {/* ===== HERO ===== */}
      <section id="home" className="relative overflow-hidden bg-indigo pb-0 pt-4">
        <div className="mx-auto grid max-w-6xl items-center gap-9 px-6 py-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="font-mono text-[13px] font-semibold uppercase tracking-[0.16em] text-marigold">
              Delhi/NCR home services, sorted
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-[54px]">
              Verified Maids, Cooks, Drivers
              <br />
              &amp; Home Care in Delhi/NCR
            </h1>
            <p className="mt-4 font-display text-xl italic leading-snug text-marigold md:text-2xl">
              Someone&rsquo;s at the door.{" "}
              <em className="not-italic">They&rsquo;re</em> here to help.
            </p>
            <p className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-[#C9D3D8]">
              Helprz puts a verified maid, cook, driver, nanny or carer on
              your doorstep — background-checked, trained, and booked from
              your phone in under two minutes.
            </p>
            <ul className="mt-7 flex flex-col gap-3">
              {[
                "ID-verified, background-checked",
                "Tracked in real time, on the dot",
                "Support that answers, day or night",
              ].map((c) => (
                <li key={c} className="flex items-center gap-3 text-[15px] font-semibold text-[#EDE5D2]">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-marigold text-indigo-deep">
                    <svg viewBox="0 0 24 24" fill="none" className="h-2.5 w-2.5">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/#contact" className="rounded-full bg-marigold px-7 py-3.5 text-sm font-bold text-indigo-deep shadow-[0_10px_24px_rgba(231,163,59,0.35)] transition hover:bg-marigold-deep">
                Book a Service →
              </a>
              <a href="/#how" className="flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white hover:border-white">
                How It Works
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative flex h-72 w-72 items-end justify-center overflow-visible rounded-full bg-[radial-gradient(circle_at_45%_40%,#ffd15c,#F6B90D_70%)] md:h-80 md:w-80">
              <img
                src="/hero-photo.png"
                alt="Helprz verified home service professional"
                className="relative z-[2] w-[78%] max-w-[280px] drop-shadow-[0_30px_40px_rgba(8,18,70,0.35)]"
              />
            </div>
            <div className="absolute right-0 top-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_40px_rgba(11,34,51,0.35)]">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-indigo text-marigold">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="font-mono text-[12px] font-extrabold leading-tight text-indigo">VERIFIED &amp; TRUSTED</div>
                <div className="text-[11px] text-ink-soft">For your safety</div>
              </div>
            </div>
          </div>
        </div>

        {/* services strip */}
        <div className="relative z-20 mx-auto max-w-6xl px-6 pb-10">
          <div className="grid grid-cols-2 gap-2 rounded-[22px] bg-white p-3 shadow-[0_24px_60px_rgba(11,34,51,0.28)] sm:grid-cols-4 lg:grid-cols-8">
            {services.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="/#services"
                className="flex flex-col items-center gap-2.5 rounded-2xl px-2 py-5 text-center transition hover:bg-sand-deep"
              >
                <span className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-indigo text-marigold">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-xs font-bold leading-tight text-indigo">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <div className="bg-indigo-deep py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 lg:grid-cols-4">
          {trustItems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-marigold/15 text-marigold">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h4 className="text-[14.5px] font-bold text-white">{title}</h4>
                <p className="text-[12.5px] text-[#A9B7BF]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SERVICES FULL ===== */}
      <section id="services" className="bg-sand-deep py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-xl text-center">
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-marigold-deep">
              What we offer
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-indigo md:text-4xl">
              One doorstep, every home need
            </h2>
            <p className="mt-3 text-[16.5px] leading-relaxed text-ink-soft">
              From daily housekeeping to special occasions — book verified
              professionals for any service, any time.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="rounded-[20px] bg-white p-7 shadow-[0_2px_10px_rgba(13,27,99,0.06)] transition hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(20,50,74,0.16)]">
                <span className="flex h-[58px] w-[58px] items-center justify-center rounded-2xl bg-indigo text-marigold">
                  <Icon className="h-6.5 w-6.5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-indigo">{label}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how" className="relative overflow-hidden bg-indigo py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-xl">
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-marigold">
              The process
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              How Helprz works
            </h2>
            <p className="mt-3 text-[16.5px] text-[#C4CED3]">
              Getting trusted help at home takes less than two minutes.
            </p>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.num}>
                <div className="font-display text-4xl font-semibold italic text-marigold">{s.num}</div>
                <h3 className="mt-4 text-[17.5px] font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#B7C2C8]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative flex min-h-[380px] items-center justify-center rounded-[26px] bg-indigo">
              <ShieldCheck className="h-28 w-28 text-marigold/70" strokeWidth={1.2} />
              <div className="absolute left-5 top-5 rounded-2xl bg-white px-5 py-4 shadow-[0_16px_36px_rgba(20,50,74,0.22)]">
                <h4 className="font-display text-2xl font-bold text-indigo">10,000+</h4>
                <p className="font-mono text-[11px] font-bold tracking-wide text-ink-soft">VERIFIED PROS</p>
              </div>
              <div className="absolute bottom-5 right-5 rounded-2xl bg-white px-5 py-4 shadow-[0_16px_36px_rgba(20,50,74,0.22)]">
                <h4 className="font-display text-2xl font-bold text-indigo">50,000+</h4>
                <p className="font-mono text-[11px] font-bold tracking-wide text-ink-soft">BOOKINGS DONE</p>
              </div>
            </div>
            <div>
              <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-marigold-deep">
                Why Helprz
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-indigo md:text-[38px]">
                Every home. Every help. One trusted name.
              </h2>
              <ul className="mt-8 flex flex-col gap-7">
                {whyUs.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-2xl bg-sand-deep text-brick-deep">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <div>
                      <h4 className="font-bold text-indigo">{title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <StatCounter target={10000} suffix="+" label="Verified Pros" />
            <StatCounter target={50000} suffix="+" label="Bookings Done" />
            <StatCounter target={5} label="Cities Covered" />
            <StatCounter target={4.8} suffix="/5" decimals={1} label="Average Rating" />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="stories" className="bg-indigo-deep py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-xl text-center">
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-marigold">
              Customer stories
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              Loved by homes across Gurgaon
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-[20px] border border-white/10 bg-indigo p-8">
                <span className="font-display block text-5xl italic leading-none text-marigold opacity-55">
                  &ldquo;
                </span>
                <div className="mt-2 tracking-[3px] text-marigold">★★★★★</div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full bg-brick font-display font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">{t.name}</h5>
                    <span className="text-xs text-[#9FADB4]">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BROWSE BY AREA (the 15 generated SEO pages) ===== */}
      <section id="areas" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-marigold-deep">
            Coverage
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-indigo md:text-4xl">
            Browse by Area
          </h2>
          <p className="mt-3 max-w-xl text-[16.5px] leading-relaxed text-ink-soft">
            Every locality below has its own dedicated page with local salary
            guides, coverage areas and FAQs.
          </p>

          <div className="mt-8 max-w-2xl">
            <AreaFinder groups={[...byLocality.entries()]} />
          </div>

          <div className="mt-10 flex flex-wrap gap-x-2 gap-y-2 border-t border-line pt-8">
            {[...byLocality.entries()].slice(0, 24).map(([key, group]) => {
              const l = group.links[0];
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-soft transition hover:border-marigold hover:text-marigold-deep"
                >
                  {l.label} &middot; {group.localityName}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="bg-sand-deep py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-xl text-center">
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-marigold-deep">
              Questions, answered
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-indigo md:text-4xl">
              Everything you need to know
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-0">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="relative overflow-hidden rounded-[28px] bg-marigold p-10 md:p-14">
            <div className="threshold absolute left-0 right-0 top-0" />
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div>
                <h2 className="max-w-lg font-display text-2xl font-bold text-indigo-deep md:text-[34px]">
                  Ready to get trusted help at home?
                </h2>
                <p className="mt-2 text-[15px] text-[#5C4413]">
                  Book verified professionals in Gurgaon in under two minutes.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-7">
                <div
                  className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full border-[3px] border-dashed border-indigo-deep"
                  style={{ transform: "rotate(-12deg)" }}
                >
                  <span className="font-mono text-[9.5px] font-semibold uppercase leading-snug tracking-wide text-indigo-deep">
                    Verified
                    <br />✓<br />
                    Trusted
                  </span>
                </div>
                <a
                  href="/#contact"
                  className="rounded-full bg-indigo px-7 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-deep"
                >
                  Book a Service →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="bg-sand-deep py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
          <div>
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-marigold-deep">
              Get in touch
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-indigo md:text-[38px]">
              We&rsquo;re here to help
            </h2>
            <ul className="mt-8 flex flex-col gap-7">
              <li className="flex gap-4">
                <span className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-2xl bg-indigo text-marigold">
                  <MapPin className="h-5.5 w-5.5" />
                </span>
                <div>
                  <h4 className="font-bold text-indigo">Our Office</h4>
                  <p className="mt-1 text-sm text-ink-soft">
                    Helprz Services Pvt. Ltd.
                    <br />
                    Rising Homes, Sector 92, Gurgaon, Haryana, India
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-2xl bg-indigo text-marigold">
                  <Phone className="h-5.5 w-5.5" />
                </span>
                <div>
                  <h4 className="font-bold text-indigo">Call Us</h4>
                  <p className="mt-1 text-sm text-ink-soft">
                    +91 77177 17717
                    <br />
                    Mon – Sun, 24/7 Support
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-2xl bg-indigo text-marigold">
                  <Mail className="h-5.5 w-5.5" />
                </span>
                <div>
                  <h4 className="font-bold text-indigo">Email Us</h4>
                  <p className="mt-1 text-sm text-ink-soft">Support@helprz.in</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-[20px] bg-white p-8 shadow-[0_2px_10px_rgba(13,27,99,0.06)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-ink-soft">Full Name</label>
                <input type="text" placeholder="Your name" className="mt-1.5 w-full rounded-xl border border-line px-4 py-2.5 text-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-soft">Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="mt-1.5 w-full rounded-xl border border-line px-4 py-2.5 text-sm" />
              </div>
            </div>
            <div className="mt-5">
              <label className="text-xs font-semibold text-ink-soft">Service Needed</label>
              <select className="mt-1.5 w-full rounded-xl border border-line px-4 py-2.5 text-sm">
                {services.map((s) => (
                  <option key={s.label}>{s.label}</option>
                ))}
              </select>
            </div>
            <div className="mt-5">
              <textarea
                placeholder="Tell us a bit more about what you need..."
                className="w-full rounded-xl border border-line px-4 py-2.5 text-sm"
                rows={4}
              />
            </div>
            <button className="mt-5 w-full rounded-full bg-marigold py-3.5 text-sm font-bold text-indigo-deep transition hover:bg-marigold-deep">
              Request a Booking →
            </button>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
