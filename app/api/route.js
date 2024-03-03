import { connectDB } from "@/server-components/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();
    return NextResponse.json({ message: "Welcome home" }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
