import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://strngelabs.ishav.space";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },

    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },

    // Clash One

    {
      url: `${baseUrl}/apps/clash-one`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/apps/clash-one/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/apps/clash-one/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // WA Saver

    {
      url: `${baseUrl}/apps/wa-saver`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/apps/wa-saver/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/apps/wa-saver/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}