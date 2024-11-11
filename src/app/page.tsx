"use client";
import { useState } from 'react';
import React from "react";
import Pins from "./components/Pins";
import Nav from "./components/Nav";

type Pin = {
  id: number;
  place: string;
  type: string;
  area: string;
  address: string;
  imageUrl: string;
};

const PINS_INIT: Pin[] = [
  {
    id: 1,
    place: 'Botanical Gardens',
    type: 'Park',
    area: 'East Side',
    address: 'temp address',
    imageUrl: '/images/pin_1_1.jpg',
  },
  {
    id: 2,
    place: 'Taqueria Tsunami',
    type: 'food',
    area: 'Downtown',
    address: 'temp address',
    imageUrl: '/images/pin_2_1.jpg',
  },
  {
    id: 3,
    place: 'Southeast Clarke Park',
    type: 'Park',
    area: 'East Side',
    address: 'temp address',
    imageUrl: '/images/pin_3_1.jpg',
  },
  {
    id: 4,
    place: 'Rook and Pawn',
    type: 'Food',
    area: 'Downtown',
    address: 'temp address',
    imageUrl: '/images/pin_4_1.jpg',
  },
  {
    id: 5,
    place: 'Museum of Art',
    type: 'Museum',
    area: 'UGA Campus',
    address: 'temp address',
    imageUrl: '/images/pin_5_1.jpg',
  },
  {
    id: 6,
    place: 'University 16 Theater',
    type: 'Theater',
    area: 'Epps Bridge',
    address: 'temp address',
    imageUrl: '/images/pin_6_1.jpg',
  },
  {
    id: 7,
    place: 'Bear Hollow Zoo',
    type: 'Zoo',
    area: 'East Side',
    address: 'temp address',
    imageUrl: '/images/pin_7_1.jpg',
  },
];


export default function Home() {

  const[pins, setPins] = useState<Pin[]>(PINS_INIT);

  const newPin = (newPin: Pin) => {

    setPins((pins) => [newPin, ...pins]);

  };

  return (
    <div className="h-screen">
      <div className="flex h-full">
        <div className="w-[300px] bg-blue-200 p-4">
          <Nav />
        </div>
        <div className="flex-1 bg-gray-400 p-4">
          <Pins pins={pins}/>
        </div>
      </div>
    </div>
  );
}
