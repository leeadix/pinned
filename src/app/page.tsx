"use client";
import { useState } from 'react';
import React from "react";
import Pins from "./components/Pins";

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
    place: 'Botanical Gardens',
    type: 'Park',
    area: 'East Side',
    address: 'temp address',
    imageUrl: '/images/pin_1_1.jpg',
  },
  {
    id: 3,
    place: 'Botanical Gardens',
    type: 'Park',
    area: 'East Side',
    address: 'temp address',
    imageUrl: '/images/pin_1_1.jpg',
  },
  {
    id: 4,
    place: 'Botanical Gardens',
    type: 'Park',
    area: 'East Side',
    address: 'temp address',
    imageUrl: '/images/pin_1_1.jpg',
  },
  {
    id: 5,
    place: 'Botanical Gardens',
    type: 'Park',
    area: 'East Side',
    address: 'temp address',
    imageUrl: '/images/pin_1_1.jpg',
  },
  {
    id: 6,
    place: 'Botanical Gardens',
    type: 'Park',
    area: 'East Side',
    address: 'temp address',
    imageUrl: '/images/pin_1_1.jpg',
  },
  {
    id: 7,
    place: 'Botanical Gardens',
    type: 'Park',
    area: 'East Side',
    address: 'temp address',
    imageUrl: '/images/pin_1_1.jpg',
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
          Nav
        </div>
        <div className="flex-1 bg-gray-400 p-4">
          <Pins pins={pins}/>
        </div>
      </div>
    </div>
  );
}
