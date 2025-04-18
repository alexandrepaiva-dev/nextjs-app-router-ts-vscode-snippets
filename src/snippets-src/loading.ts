const loadingSnippet = {
  prefix: "nxtLoading",
  description: "Next.js App Router loading.tsx (TypeScript)",
  body: `
import type { JSX } from "react";

export default function Loading(): JSX.Element {
  return <p>Loading page...</p>;
}

  `.trim(),
};

module.exports = loadingSnippet;
