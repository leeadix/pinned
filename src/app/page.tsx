"use client";
import { useState } from 'react';
import React from "react";
import Pins from "./components/Pins";
import Nav from "./components/Nav";
import {PinOverlay} from './components/PinOverlay';

import Data from "./Pins.json" assert { type: "json" };

type Pin = {
  id: number;
  name: string;
  description: string;
  googleUrl: string;
  type: string;
  area: string;
  address: string;
  imageUrl: string;
  distance: number;
  lat: number;
  lon: number;
};

const pinsData: Pin[] = Data;

export default function Home() {

  const[pins, setPins] = useState<Pin[]>(pinsData);

  const newPin = (newPin: Pin) => {

    setPins((pins) => [newPin, ...pins]);

  };

  const[sorts, setSort] = useState("Name");

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLoc, setSelectedLoc] = useState([]);

  const [isPinOverlayOpen, setIsOverlayOpen] = useState(false);

  const [openPin, setOpenPin] = useState<Pin>(pinsData[0]);

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen">
        <div className="w-[300px] bg-blue-200 p-4">
          <Nav sorts={sorts} setSort={setSort} selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc} />
        </div>
        <div className="flex-1 bg-gray-400 p-4">
        <Pins pins={pins} sorts={sorts} selectedTypes={selectedTypes} selectedLoc={selectedLoc} setOpenPin={setOpenPin} setIsOverlayOpen={setIsOverlayOpen} />
        </div>
      </div>
      <PinOverlay
        isOpen = {isPinOverlayOpen}
        onClose={()=> setIsOverlayOpen(false)}
        pin = {openPin}
        >
          
      </PinOverlay>
    </div>
  );
}
