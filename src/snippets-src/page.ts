const pageSnippet = {
  prefix: "nxtPage",
  description: "Next.js App Router Page with static metadata (TypeScript)",
  body: `
import type { JSX } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page",
  description: "Welcome to the main page!",
};

export default function Page(): JSX.Element {
  return (
    <main>
      <h1>Page</h1>
      <p>This is a page using TypeScript and static metadata.</p>
    </main>
  );
}

  `.trim(),
};

module.exports = pageSnippet;
