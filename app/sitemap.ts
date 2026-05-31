import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kafeterka.cz";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/dorty-na-objednavku`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/akce`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/fotogalerie`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/podminky`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
