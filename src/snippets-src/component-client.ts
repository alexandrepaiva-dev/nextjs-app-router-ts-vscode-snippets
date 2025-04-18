const clientComponentSnippet = {
  prefix: "nxtComponentClient",
  description: "Next.js client component (TypeScript)",
  body: `
"use client";

import type { JSX } from "react";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function MyComponent({ children }: Props): JSX.Element {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return (
    <section>
      <h2>This is a Client Component</h2>
      <p>Button clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {children}
    </section>
  );
}

  `.trim(),
};

module.exports = clientComponentSnippet;
