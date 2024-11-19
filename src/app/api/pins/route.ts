import connectMongoDB from "@/libs/mongodb";
import Pin from "@/models/pinSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
   const { title, place, type, area, address, imageUrl } = await request.json();
   await connectMongoDB();
   await Pin.create({ title, place, type, area, address, imageUrl });
   return NextResponse.json({ message: "Pin added successfully" }, { status: 201 });
}

export async function GET() {
   await connectMongoDB();
   const pins = await Pin.find();
   return NextResponse.json({ pins });
}
