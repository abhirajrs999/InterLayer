import { NextResponse } from "next/server";

const SHEETS_ENDPOINT =
  process.env.SHEETS_ENDPOINT ||
  process.env.NEXT_PUBLIC_SHEETS_ENDPOINT ||
  "";

export async function POST(request: Request) {
  if (!SHEETS_ENDPOINT) {
    return NextResponse.json(
      { ok: false, error: "Sheets endpoint env var is not configured." },
      { status: 500 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(SHEETS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { ok: false, error: text || "Sheets webhook returned an error." },
        { status: res.status }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Unable to reach the Sheets webhook." },
      { status: 502 }
    );
  }
}
