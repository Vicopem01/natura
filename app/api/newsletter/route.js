import { connectDB } from "@/server-components/db";
import { emailModel } from "@/server-components/email.model";
import { isValidEmail } from "@/utils/regex";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const { email } = await req.json();
    console.log(email);
    if (!email || !isValidEmail(email))
      return NextResponse.json(
        { message: "Email address is required" },
        { status: 201 }
      );

    const user = await emailModel.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "Email address already exists" },
        { status: 201 }
      );
    }
    await emailModel.create({
      email,
    });

    return NextResponse.json(
      { message: "Email address added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
