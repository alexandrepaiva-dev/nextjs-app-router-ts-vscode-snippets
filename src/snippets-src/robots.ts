const robotsSnippet = {
  prefix: "nxtRobots",
  description:
    "Next.js App Router robots.ts (TypeScript, MetadataRoute.Robots)",
  body: `
import { type MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://example.com/sitemap.xml",
    host: "https://example.com",
  };
}

    `.trim(),
};

module.exports = robotsSnippet;
