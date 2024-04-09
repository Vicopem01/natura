import clientPromise from "@/server-components/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const url = new URL(req.url);
    const body = await req.json();
    const params = new URLSearchParams(url.search);

    const stage = params.get("stage");
    const id = params.get("id");
    const client = await clientPromise;
    const db = client.db("natura");
    const collection = await db.collection("onboarding");
    if (stage === "2") {
      await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { questions1: body } }
      );

      return NextResponse.json(
        { message: "Data saved successfully" },
        { status: 201 }
      );
    }

    if (stage === "3") {
      await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { questions2: body } }
      );

      return NextResponse.json(
        { message: "Data saved successfully" },
        { status: 201 }
      );
    }

    const res = await collection.insertOne(body);

    return NextResponse.json(
      { message: "Data saved successfully", id: res.insertedId.toString() },
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
