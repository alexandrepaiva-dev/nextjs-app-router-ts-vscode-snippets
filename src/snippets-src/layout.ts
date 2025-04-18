const layoutSnippet = {
  prefix: "nxtLayout",
  description: "Next.js App Router RootLayout (TypeScript)",
  body: `
import type { Metadata } from "next";
import type { JSX } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js App Router Example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

  `.trim(),
};

module.exports = layoutSnippet;
