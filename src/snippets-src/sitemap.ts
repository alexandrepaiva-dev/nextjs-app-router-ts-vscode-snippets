const sitemapSnippet = {
  prefix: "nxtSitemap",
  description:
    "Next.js App Router sitemap.ts (TypeScript, MetadataRoute.Sitemap)",
  body: `
import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://example.com/",
      lastModified: new Date(),
    },
    {
      url: "https://example.com/about",
      lastModified: new Date("2024-01-01"),
    },
  ];
}

    `.trim(),
};

module.exports = sitemapSnippet;
