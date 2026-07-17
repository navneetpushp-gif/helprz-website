import type { MetadataRoute } from "next";
import { getAllPages } from "@/data/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.helprz.in";

  const staticEntries: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/trust-pricing`, changeFrequency: "weekly", priority: 0.9 },
  ];

  const pageEntries: MetadataRoute.Sitemap = getAllPages().map((p) => ({
    url: `${base}/${p.citySlug}/${p.localitySlug}/${p.serviceSlug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...pageEntries];
}
