import React, { useState, useContext } from 'react';
import { UserContext } from './Context/UserContext';

export const FooterIndex = () => {
    const { user } = useContext(UserContext);
    const [activeId, setActiveId] = useState(1);

    function handleClick(id) {
        setActiveId(id);
    }

    function getClassName(id) {
        return `pb-2 -mb-0.5  ${activeId === id ? 'border-b-4 border-black text-black' : 'text-gray-500'}`;
    }


    return (
      
 <div className='justify-between mt-8 w-full'>

      
      <h2 className='text-2xl'>Inspiration for the future getaways</h2>
      <div className="flex mt-6 gap-8 border-b-2 mb-5 grow">
        <span
          className={getClassName(1)}
          onClick={() => handleClick(1)}
        >
          Destinations for arts and Culture
        </span>
        <span
          className={getClassName(2)}
          onClick={() => handleClick(2)}
        >
          Destinations for Outdoor adventure
        </span>
        <span
          className={getClassName(3)}
          onClick={() => handleClick(3)}
        >
          Mountain cabins
        </span>
        <span
          className={getClassName(4)}
          onClick={() => handleClick(4)}
        >
          Beach Destinations
        </span>
        <span
          className={getClassName(5)}
          onClick={() => handleClick(5)}
        >
          Popular Destinations
        </span>
        <span
          className={getClassName(6)}
          onClick={() => handleClick(6)}
        >
          Unique Stays
        </span>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4">

        <div className="block py-4">
          <div>Phoenix</div>
          <div className='text-gray-400'>Arizona</div>
        </div>

        <div className="block py-4">
          <div>Phoenix</div>
          <div className='text-gray-400'>Arizona</div>
        </div>

        <div className="block py-4">
          <div>Phoenix</div>
          <div className='text-gray-400'>Arizona</div>
        </div>

        <div className="block py-4">
          <div>Phoenix</div>
          <div className='text-gray-400'>Arizona</div>
        </div>

        <div className="block py-4">
          <div>Phoenix</div>
          <div className='text-gray-400'>Arizona</div>
        </div>

        <div className="block py-4">
          <div>Phoenix</div>
          <div className='text-gray-400'>Arizona</div>
        </div>

        <div className="block py-4">
          <div>Phoenix</div>
          <div className='text-gray-400'>Arizona</div>
        </div>

        <div className="block py-4">
          <div>Phoenix</div>
          <div className='text-gray-400'>Arizona</div>
        </div>

        <div className="block py-4">
          <div>Phoenix</div>
          <div className='text-gray-400'>Arizona</div>
        </div>

        <div className="block py-4">
          <div>Phoenix</div>
          <div className='text-gray-400'>Arizona</div>
        </div>

        <div className="block py-4">
          <div>Phoenix</div>
          <div className='text-gray-400'>Arizona</div>
        </div>

        <div className="max-w-fit max-h-8 border-b-2 border-black">Show more</div>

      </div>
      </div>
        
  );
};

