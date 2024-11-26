"use client";
import { ReactEventHandler, useState } from "react";
import React from "react";
import Image from 'next/image';
import Button from '../components/Button';
import { useRouter } from "next/navigation";

type Pin = {
    name: string;
    type: string;
    area: string;
    address: string;
    description: string;
    lat: string;
    lon: string;
    googleUrl: string;
    imageUrl: string;
};

type addPinProp = {
  setPins: (pin: Pin) => void;
}

const AddPin: React.FC<addPinProp> = ({setPins}) => {

  const[name, setName] = useState<string>('');
  const[type, setType] = useState<string>('');
  const[area, setArea] = useState<string>('');
  const[address, setAddress] = useState<string>('');
  const[description, setDescription] = useState<string>('');
  const[lat, setLat] = useState<string>('');
  const[lon, setLon] = useState<string>('');
  const[latLonInput, setLatLonInput] = useState<string>('');
  const[googleUrl, setGoogleUrl] = useState<string>('');
  const[imageUrl, setImageUrl] = useState<string>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  }

  const handleAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setArea(event.target.value);
  }

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  }

  const handleLatLonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLatLonInput(event.target.value); 
    const cords = event.target.value.split(",").map((cord) => cord.trim());
    if (cords.length === 2) {
      setLat(cords[0]);
      setLon(cords[1]);
    }
  }

  const handleGoogleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGoogleUrl(event.target.value);
  }

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    console.log(name);
    console.log(type);
    console.log(area);
    console.log(address);
    console.log(description);
    console.log(lat);
    console.log(lon);
    console.log(googleUrl);
    console.log(imageUrl);

    setName('');
    setType('');
    setArea('');
    setAddress('');
    setDescription('');
    setLatLonInput('');
    setGoogleUrl('')
    setImageUrl('');

  };

  const router = useRouter();

  return (
    <div className="bg-slate-300 p-2">
      <Image className=''
        src='/images/Pinned-Logo.png'           
        alt={`Pinned Logo`} 
        width={200} 
        height={100}
        priority />

      <div className="flex justify-center align-center h-screen bg-slate-300">

        <div className=" bg-white flex justify-center h-[750px] w-[600px]">
          <div className="flex-col justify-center">
            <h1 className="font-bold text-center text-4xl p-9 font-inter text-blue-500 text decoration underline">ADD NEW PIN</h1>
            <form className=''onSubmit={handleSubmit}>
                <strong className="mr-14">Name:*</strong>
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                  id="place"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                <br /><br />
                <strong className="mr-16">Type:*</strong>
                <select
                  className="pt-2 pb-2 pl-2 pr-[4.75rem] border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                  id="type"
                  value={type}
                  onChange={handleTypeChange}
                  required
                >
                  <option value="" disabled>Select a Type</option>  
                  <option value="Restaurant">Restaurant</option>
                  <option value="Store">Store</option>
                  <option value="Park">Park</option>
                  <option value="Bar">Bar</option>
                  <option value="Museum">Museum</option>
                  <option value="Theater">Theater</option>
                  <option value="Zoo">Zoo</option>
                  <option value="Other">Other</option>
                </select>
                <br /><br />
                <strong className="mr-16">Area:*</strong>
                <select
                  className="pt-2 pb-2 pl-2 pr-[4.25rem] border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                  id="area"
                  value={area}
                  onChange={handleAreaChange}
                  required
                >
                  <option value="" disabled>Select an Area</option>  
                  <option value="Campus">UGA Campus</option>
                  <option value="Downtown">Downtown</option>
                  <option value="East Side">East Side</option>
                  <option value="Alps">Alps</option>
                  <option value="Epps Bridge">Epps Bridge</option>
                  <option value="Other">Other</option>
                </select>
                <br /><br />
                <strong className="mr-10">Address:</strong> 
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                  id="address"
                  type="text"
                  value={address}
                  onChange={handleAddressChange}
                />
                <br /><br />
                <div className="flex mb-6">
                  <strong className="mr-3">Description:*</strong>
                  <textarea
                    className="p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                  />
                </div>
                <strong className="mr-2">Coordinates:*</strong> 
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                  id="lat/lon"
                  type="text"
                  value={latLonInput}
                  onChange={handleLatLonChange}
                  placeholder="Latitude, Longitude"
                  required
                />
                <br /><br />
                <strong className='mr-5'>ImageURL:*</strong> 
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                  id="imageUrl"
                  type="text"
                  value={imageUrl}
                  onChange={handleImageUrlChange}
                  required
                />
                <br /><br />
                <strong className="mr-4">GoogleURL:</strong> 
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                  id="googleUrl"
                  type="text"
                  value={googleUrl}
                  onChange={handleGoogleUrlChange}
                />
                <br /><br />
                <div className="text-center">
                  <Button type="submit" onClick={() => router.push('/user-home')}>ADD PIN</Button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddPin;