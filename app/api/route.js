import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ message: "Welcome home" }, { status: 201 });
}
