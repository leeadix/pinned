'use client'

import React from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import FilterBox from './FilterBox';
import SortBox from './SortBox';

const locations = ["UGA Campus", "Downtown", "Eastside", "Alps", "Epps Bridge"];
const types = ["Restaurant", "Park", "Bar", "Museum"];
const sorts = ["Name", "Location", "Type", "Distance"];

export default function UserNav() {
    

    const router = useRouter()

    return (
      <div className="h-full">
        <div className="flex justify-between">
            <button className="px-2 py-1 bg-white rounded font-inter font-bold text-blue-500" onClick={() => router.push('/login')}>Hello User</button>
            <button className="px-2 py-1 bg-white rounded font-inter font-bold text-blue-500" onClick={() => router.push("/")}>Sign out</button>
        </div>
        <br /><br />
        <div className="flex flex-col">
            <Image className='mx-auto'
                src='/images/Pinned-Logo.png'           
                alt={`Pinned Logo`} 
                width={200} 
                height={100}
                priority />
            <br /><br />
            <button className="px-2 py-1 bg-white rounded font-inter font-bold text-blue-500" onClick={() => router.push("/add-pin")}>
                Add Pin
            </button>

            <br />
            <SortBox sorts={sorts}></SortBox>
            <FilterBox title="Type" categories={types}></FilterBox>
            <FilterBox title='Locations' categories={locations}></FilterBox>
        </div>

      </div>
    );
  }