import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPages, findPage } from "@/data/pages";
import PageTemplate from "@/components/PageTemplate";

type Params = { city: string; locality: string; service: string };

// Tells Next.js exactly which URLs to pre-build, straight from the dataset.
// Add a row to data/pages.ts -> a new entry appears here automatically.
export async function generateStaticParams(): Promise<Params[]> {
  return getAllPages().map((p) => ({
    city: p.citySlug,
    locality: p.localitySlug,
    service: p.serviceSlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city, locality, service } = await params;
  const data = findPage(city, locality, service);
  if (!data) return {};

  const url = `https://www.helprz.in/${city}/${locality}/${service}`;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function LocationServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city, locality, service } = await params;
  const data = findPage(city, locality, service);
  if (!data) notFound();

  const url = `https://www.helprz.in/${city}/${locality}/${service}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.helprz.in" },
      { "@type": "ListItem", position: 2, name: data.cityName, item: `https://www.helprz.in/${city}` },
      { "@type": "ListItem", position: 3, name: data.localityName, item: `https://www.helprz.in/${city}/${locality}` },
      { "@type": "ListItem", position: 4, name: data.serviceNamePlural, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: data.serviceNamePlural,
    areaServed: `${data.localityName}, ${data.cityName}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Helprz",
      telephone: "+91-9717923266",
      address: {
        "@type": "PostalAddress",
        addressLocality: data.cityName,
        addressRegion:
  data.citySlug === "noida"
    ? "Uttar Pradesh"
    : data.citySlug === "delhi"
    ? "Delhi"
    : "Haryana",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageTemplate data={data} />
    </>
  );
}
