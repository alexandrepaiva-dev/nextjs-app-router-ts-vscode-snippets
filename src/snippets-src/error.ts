const errorSnippet = {
  prefix: "nxtError",
  description: "Next.js App Router error.tsx (client component + reset)",
  body: `
"use client";

import type { JSX } from "react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}): JSX.Element {
  useEffect(() => {
    console.error("App Router error captured:", error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong 😬</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

  `.trim(),
};

module.exports = errorSnippet;
