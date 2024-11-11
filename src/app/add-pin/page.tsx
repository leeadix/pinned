"use client";
import { ReactEventHandler, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import Button from '../components/Button';

type Pin = {
  place: string;
  type: string;
  area: string;
  address: string;
  imageUrl: string;
};

type addPinProp = {
  setPins: (pin: Pin) => void;
}

const AddPin: React.FC<addPinProp> = ({setPins}) => {

  const[place, setPlace] = useState<string>('');
  const[type, setType] = useState<string>('');
  const[area, setArea] = useState<string>('');
  const[address, setAddress] = useState<string>('');
  const[imageUrl, setImageUrl] = useState<string>('');

  const  handlePlaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlace(event.target.value);
  }
  const  handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  }

  const  handleAreaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArea(event.target.value);
  }

  const  handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  }

  const  handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  }

  const onClick = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    
    const newPin = {
      place: place,
      type: type,
      area: area,
      address: address,
      imageUrl: imageUrl,
    }

    setPins(newPin);

    setPlace('');
    setType('');
    setArea('');
    setAddress('');
    setImageUrl('');

  };

  const router = useRouter();

  return (
    <div className="bg-gray-400 p-2">
      <Image className=''
        src='/images/pin_logo.png'           
        alt={`Pinned Logo`} 
        width={200} 
        height={100}
        priority />

      <div className="flex justify-center align-center h-screen bg-gray-400">

        <div className=" bg-white flex justify-center h-[600px] w-[500px]">
          <div className="flex-col justify-center">
            <h1 className="font-bold text-center text-4xl p-9 font-inter text-blue-500 text decoration underline">ADD NEW PIN</h1>
            <form className=''onSubmit={onClick}>
                <strong>Place:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                  id="place"
                  type="text"
                  value={place}
                  onChange={handlePlaceChange}
                  required
                />
                <br /><br />
                <strong>Type:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                  id="type"
                  type="text"
                  value={type}
                  onChange={handleTypeChange}
                  required
                />
                <br /><br />
                <strong>Area:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                  id="area"
                  type="text"
                  value={area}
                  onChange={handleAreaChange}
                  required
                />
                <br /><br />
                <strong>Address:</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                  id="address"
                  type="text"
                  value={address}
                  onChange={handleAddressChange}
                />
                <br /><br />
                <strong>ImageURL:</strong> &nbsp;
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                  id="imageUrl"
                  type="text"
                  value={imageUrl}
                  onChange={handleUrlChange}
                  required
                />
                <br /><br />
                <div className="text-center">
                  <Button type="submit">ADD PIN</Button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddPin;