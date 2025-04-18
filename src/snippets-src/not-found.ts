const notFoundSnippet = {
  prefix: "nxtNotFound",
  description: "Next.js App Router not-found.tsx (with metadata + TypeScript)",
  body: `
import type { JSX } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - 404",
  description: "This page doesn&apos;t exist or may have been moved.",
};

export default function NotFound(): JSX.Element {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn&apos;t find the page you were looking for.</p>
    </div>
  );
}

  `.trim(),
};

module.exports = notFoundSnippet;
