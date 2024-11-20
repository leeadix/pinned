import { useState } from 'react';
import React from "react";


export default function SortBox ({sorts}){



    const [selectedSorts, setSelectedSorts] = useState(sorts[0]);

    const handleCheckboxChange = (sort) => {
        setSelectedSorts(sort);
      };

    return(
    <div className='bg-white rounded-md m-5'>
        <div className='text-center text-3xl font-inter font-bold text-blue-500'>Sort</div>
        <ul className='w-full'>
            <li className='flex flex-col items-center'>
                <div className='py-1 align-middle'>
                    {sorts.map((sort) => (
                        <div key={sort}>
                            <hr />
                            <input 
                                id="location_campus_search" 
                                type="checkbox" 
                                className="appearance-none w-5 h-5 rounded-full border border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none align-middle" 
                                checked={selectedSorts === sort} 
                                onChange={() => handleCheckboxChange(sort)} 
                                value="1" />
                            <label className='text-center align-middle text-2xl font-inter w-full py-3 ms-2'> {sort}</label>
                        </div>
                    ))}
                </div>
            </li>
        </ul>
    </div>
    );
}

