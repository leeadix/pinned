"use client";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex justify-center align-center h-screen bg-gray-400">
      <div className=" bg-white flex justify-center">
        <button
          className="px-2 py-1 bg-white rounded font-inter font-bold text-blue-500"
          onClick={() => router.push("/add-pin")}
        >
          Add Items Here
        </button>
        <button
          className="px-2 py-1 bg-white rounded font-inter font-bold text-blue-500"
          onClick={() => router.push("/")}
        >
          Signout
        </button>
      </div>
    </div>
  );
}
