# Next.js App Router (TypeScript) Snippets

A VS Code/Windsurf extension with opinionated snippets for **Next.js App Router (v15)** + **TypeScript**.

## 📦 Features

- Snippets for common App Router files:
  - `layout.tsx`
  - `page.tsx`
  - `loading.tsx`
  - `not-found.tsx`
  - `error.tsx`
  - `template.tsx`
  - `sitemap.ts`
  - `robots.ts`
  - API route handler (`route.ts`)
  - Server & client components
- Command to scaffold a boilerplate `app/` folder
- Follows latest Next.js best practices with metadata support

## ⚡ Available Snippets

| Prefix               | File                | Description                                                |
| -------------------- | ------------------- | ---------------------------------------------------------- |
| `nxtTemplate`        | template.tsx        | Next.js App Router template.tsx                            |
| `nxtLayout`          | layout.tsx          | Next.js App Router RootLayout                              |
| `nxtPage`            | page.tsx            | Next.js App Router Page with static metadata               |
| `nxtLoading`         | loading.tsx         | Next.js App Router loading.tsx                             |
| `nxtError`           | error.tsx           | Next.js App Router error.tsx (client component + reset)    |
| `nxtNotFound`        | not-found.tsx       | Next.js App Router not-found.tsx (with metadata)           |
| `nxtRouteHandlers`   | route.ts            | Next.js Route Handlers with all HTTP methods               |
| `nxtComponentClient` | ComponentClient.tsx | Next.js Client Component (with useState/useEffect example) |
| `nxtComponentServer` | ComponentServer.tsx | Next.js Server Component                                   |

## 🛠️ How to Use

1. Open your project folder
2. Type a snippet prefix `nxt` in any `.tsx` file (e.g. `nxtLayout`) and select the snippet from the suggestions

## 🧱 Create App Folder (Optional)

Want to scaffold a full `app/` folder based on the snippets?

1. Run `Next.js: Create App Folder with Boilerplate` from the Command Palette (Ctrl+Shift+P for Windows, Cmd+Shift+P for macOS)
2. This will generate a folder like `app-nextjs-app-router-ts/` in your project, containing example files

## 🧪 Preview

### Example: `nxtLayout`

```tsx
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
```

### Example: `nxtPage`

```tsx
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
```

### Example: `nxtTemplate`

```tsx
import type { JSX } from "react";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <>{children}</>;
}
```

### Example: `nxtLoading`

```tsx
import type { JSX } from "react";

export default function Loading(): JSX.Element {
  return <p>Loading page...</p>;
}
```

### Example: `nxtError`

```tsx
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
```

### Example: `nxtNotFound`

```tsx
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
```

### Example: `nxtRouteHandlers`

```tsx
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(_req: NextRequest): Promise<NextResponse> {
  const method: string = _req.method;
  return NextResponse.json({ method, message: "GET request received" });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  return NextResponse.json({ method: "POST", data: body });
}

export async function PUT(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  return NextResponse.json({ method: "PUT", data: body });
}

export async function PATCH(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  return NextResponse.json({ method: "PATCH", data: body });
}

export async function DELETE(_req: NextRequest): Promise<NextResponse> {
  const method: string = _req.method;
  return NextResponse.json({
    method,
    message: "Resource deleted (simulated)",
  });
}

export async function HEAD(): Promise<NextResponse> {
  return new NextResponse(null, { status: 200 });
}

export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS",
    },
  });
}
```

### Example: `nxtComponentClient`

```tsx
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
```

### Example: `nxtComponentServer`

```tsx
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
```
