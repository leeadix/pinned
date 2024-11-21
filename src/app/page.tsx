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
  distance: number;
  lat: number;
  lon: number;
};


const userLat = 33.902359549197705 
const userLon = -83.38459137801536

const PINS_INIT: Pin[] = [
  {
    id: 1,
    place: 'Botanical Gardens',
    type: 'Park',
    area: 'East Side',
    address: 'temp address',
    imageUrl: '/images/pin_1_1.jpg',
    distance: 0,
    lat: 33.902359549197705, 
    lon: -83.38459137801536,
  },
  {
    id: 2,
    place: 'Taqueria Tsunami',
    type: 'Food',
    area: 'Downtown',
    address: 'temp address',
    imageUrl: '/images/pin_2_1.jpg',
    distance: 0,
    lat: 33.96118201764776, 
    lon: -83.37419667743495, 
  },
  {
    id: 3,
    place: 'Southeast Clarke Park',
    type: 'Park',
    area: 'East Side',
    address: 'temp address',
    imageUrl: '/images/pin_3_1.jpg',
    distance: 0,
    lat: 33.92775546040808, 
    lon: -83.30694950228845, 
  },
  {
    id: 4,
    place: 'Rook and Pawn',
    type: 'Food',
    area: 'Downtown',
    address: 'temp address',
    imageUrl: '/images/pin_4_1.jpg',
    distance: 0,
    lat: 33.95914283285086, 
    lon: -83.38019876314472, 
  },
  {
    id: 5,
    place: 'Museum of Art',
    type: 'Museum',
    area: 'UGA Campus',
    address: 'temp address',
    imageUrl: '/images/pin_5_1.jpg',
    distance: 0,
    lat: 33.9412094898589, 
    lon: -83.36994734771635, 
  },
  {
    id: 6,
    place: 'University 16 Theater',
    type: 'Theater',
    area: 'Epps Bridge',
    address: 'temp address',
    imageUrl: '/images/pin_6_1.jpg',
    distance: 0,
    lat: 33.915009959696626, 
    lon: -83.45577563155872,
  },
  {
    id: 7,
    place: 'Bear Hollow Zoo',
    type: 'Zoo',
    area: 'East Side',
    address: 'temp address',
    imageUrl: '/images/pin_7_1.jpg',
    distance: 0,
    lat: 33.927335024011406, 
    lon: -83.38744947220246,
  },
];



export default function Home() {

  const[pins, setPins] = useState<Pin[]>(PINS_INIT);

  const newPin = (newPin: Pin) => {

    setPins((pins) => [newPin, ...pins]);

  };

  const[sorts, setSort] = useState("Name");

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLoc, setSelectedLoc] = useState([]);

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen">
        <div className="w-[300px] bg-blue-200 p-4">
          <Nav sorts={sorts} setSort={setSort} selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc} />
        </div>
        <div className="flex-1 bg-gray-400 p-4">
          <Pins pins={pins} userLat={userLat} userLon={userLon} sorts={sorts} selectedTypes={selectedTypes} selectedLoc={selectedLoc} />
        </div>
      </div>
    </div>
  );
}
