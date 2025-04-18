const templateSnippet = {
  prefix: "nxtTemplate",
  description: "Next.js App Router template.tsx (TypeScript)",
  body: `
import type { JSX } from "react";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <>{children}</>;
}

  `.trim(),
};

module.exports = templateSnippet;
