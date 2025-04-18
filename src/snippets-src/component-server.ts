const serverComponentSnippet = {
  prefix: "nxtComponentServer",
  description: "Next.js server component (TypeScript)",
  body: `
import type { JSX } from "react";

type Props = {
  children: React.ReactNode;
};

export default function MyComponent({ children }: Props): JSX.Element {
  return (
    <section>
      <h2>This is a Server Component</h2>
      {children}
    </section>
  );
}

  `.trim(),
};

module.exports = serverComponentSnippet;
