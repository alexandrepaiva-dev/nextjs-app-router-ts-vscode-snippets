const routeSnippet = {
  prefix: "nxtRouteHandlers",
  description:
    "Next.js Route Handlers with all HTTP methods (App Router + TypeScript)",
  body: `
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

  `.trim(),
};

module.exports = routeSnippet;
