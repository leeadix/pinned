import connectMongoDB from "@/libs/mongodb";
import Pin from "@/models/pinSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";


interface RouteParams {
   params: { id: string };
}


export async function GET(request:NextRequest, { params }:RouteParams) {
   const { id } = params;
   await connectMongoDB();
   const pin = await Pin.findOne({ _id: id });
   return NextResponse.json({ pin }, { status: 200 });
}


export async function PUT(request:NextRequest, { params }:RouteParams) {
   const { id } = params;
   const { title: title, place: place, type: type, area: area, address: address, imageUrl: imageUrl } = await request.json();
   await connectMongoDB();
   await Pin.findByIdAndUpdate(id, { title, place, type, area, address, imageUrl });
   return NextResponse.json({ message: "Pin updated " }, { status: 200 });
}


export async function DELETE(request:NextRequest, { params }: RouteParams) {
   const { id } = params;
   if (!mongoose.Types.ObjectId.isValid(id)) {
       return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
   }
   await connectMongoDB();
   const deletedItem = await Pin.findByIdAndDelete(id);
   if (!deletedItem) {
       return NextResponse.json({ message: "Pin not found" }, { status: 404 });
   }
   return NextResponse.json({ message: "Pin deleted" }, { status: 200 });
}
