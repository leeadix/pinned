"use client";
import { useState } from 'react';
import React from "react";
import Pins from "../../components/Pins";
import UserNav from "../../components/UserNav";
import { useParams, useRouter } from "next/navigation";
import {PinOverlay} from '../../components/PinOverlay';

import Data from "../../Pins.json" assert { type: "json" };
import { Router } from 'next/router';

type Pin = {
  id: string;
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


export default function Home({params}:{params: {id: string}}) {

  const[pins, setPins] = useState<Pin[]>(pinsData);

  const newPin = (newPin: Pin) => {

    setPins((pins) => [newPin, ...pins]);

  };

  const[sorts, setSort] = useState("Name");

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLoc, setSelectedLoc] = useState([]);

  const [isPinOverlayOpen, setIsOverlayOpen] = useState(true);

//   location.hash()??
//   let params = useParams();
//   let id = params.id
//   let linkPin = pinsData.filter((pin)=> pin.id === id);

  const id = params.id
  const linkPin = pinsData.filter((pin)=> pin.id === id);

  const [openPin, setOpenPin] = useState<Pin>(linkPin[0]);

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen">
        <div className="w-[300px] bg-blue-200 p-4">
          <UserNav sorts={sorts} setSort={setSort} selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc} />
        </div>
        <div className="flex-1 bg-gray-400 p-4">
          <Pins pins={pins} sorts={sorts} selectedTypes={selectedTypes} selectedLoc={selectedLoc} setOpenPin={setOpenPin} setIsOverlayOpen={setIsOverlayOpen} />
        </div>
      </div>
      <PinOverlay
        isOpen = {isPinOverlayOpen}
        onClose={async () => {
          window.history.replaceState(null, "", "/user-home/");
          setIsOverlayOpen(false);
        }}
        pin = {openPin}
        >
          
      </PinOverlay>
    </div>
  );
}
