// app/api/google/route.js

import { NextResponse } from "next/server";

export async function POST(request) {
  // We keep this very simple for now.
  // The frontend contact form will call this and get a success response.

  return NextResponse.json(
    {
      success: true,
      message: "Contact endpoint reached successfully (email sending not yet configured).",
    },
    { status: 200 }
  );
}