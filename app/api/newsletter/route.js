import clientPromise from "@/server-components/db";
import { isValidEmail } from "@/utils/regex";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    const client = await clientPromise;
    const db = client.db("natura");
    if (!email || !isValidEmail(email))
      return NextResponse.json(
        { message: "Email address is required" },
        { status: 201 }
      );

    const user = await db.collection("emails").findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "Email address already exists" },
        { status: 201 }
      );
    }
    await db.collection("emails").insertOne({
      email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json(
      { message: "Email address added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
