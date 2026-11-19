import type { MetadataRoute } from "next";
import { getAllPages } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = getAllPages();
  const baseUrl = "https://roiinfotech.com";

  // Include core index routes + all genuine extracted pages
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/service`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/technology`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hire`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const seen = new Set(coreRoutes.map((r) => r.url.replace(/\/$/, "")));

  for (const page of pages) {
    const cleanUrl = `${baseUrl}${page.path}`.replace(/\/$/, "");
    if (!seen.has(cleanUrl)) {
      seen.add(cleanUrl);
      const isPrimary = ["service", "technology", "hire", "solution", "contact", "company", "legal"].includes(page.category);
      coreRoutes.push({
        url: `${cleanUrl}/`,
        lastModified: new Date(),
        changeFrequency: isPrimary ? "weekly" : "monthly",
        priority: isPrimary ? 0.8 : 0.5,
      });
    }
  }

  return coreRoutes;
}
