'use client'

import React from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation'


export default function Nav() {
    

    const router = useRouter()

    return (
      <div className="h-full">
        <button className="px-2 py-1 bg-white rounded font-inter font-bold text-blue-500" onClick={() => router.push('/login')}>LOGIN</button>
        <br /><br />

        <Image className='mx-auto'
            src='/images/Pinned-Logo.png'           
            alt={`Pinned Logo`} 
            width={200} 
            height={100}
            priority />
      </div>
    );
  }
  