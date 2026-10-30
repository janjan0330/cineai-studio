import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";

  if (prompt.length < 8) {
    return NextResponse.json({ error: "Please provide a prompt with at least 8 characters." }, { status: 400 });
  }

  // Secure integration point:
  // Connect your chosen provider here (for example, Runway or another licensed video API).
  // Keep provider credentials on the server in environment variables.
  // Implement provider-specific request, job polling, webhook handling and video storage.
  if (!process.env.VIDEO_API_KEY || !process.env.VIDEO_API_URL) {
    return NextResponse.json({
      error: "Demo mode: no video provider is connected yet. Add VIDEO_API_KEY and VIDEO_API_URL to .env.local, then implement the provider adapter in this route."
    }, { status: 503 });
  }

  // Provider-specific implementation intentionally not fabricated.
  // Replace this block with the selected provider's documented API contract.
  return NextResponse.json({
    error: "Provider credentials detected, but the provider adapter is not implemented. Add the provider's documented create-job integration before accepting live requests."
  }, { status: 501 });
}
