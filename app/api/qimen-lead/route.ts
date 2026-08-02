import type { NextRequest } from "next/server";
import { POST as submitContact } from "@/app/api/contact/route";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Backward-compatible endpoint for existing deployments and external references.
// All consultation submissions now use the shared contact pipeline.
export async function POST(request: NextRequest) {
  return submitContact(request);
}
