import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // This is a stub so the "Request a demo" form can POST somewhere.
  // Replace with your provider (PostHog, HubSpot, a DB, etc).
  const body = await req.json().catch(() => null);

  if (!body?.email) {
    return NextResponse.json({ ok: false, error: "Missing email" }, { status: 400 });
  }

  // eslint-disable-next-line no-console
  console.log("Lead captured:", body);

  return NextResponse.json({ ok: true });
}
