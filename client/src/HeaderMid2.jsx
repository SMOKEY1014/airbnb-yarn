import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './Context/UserContext';
import { Header2 } from './Header2';

export const HeaderMid2 = () => {
  const { user } = useContext(UserContext);
  
  const [activeId, setActiveId] = useState(1);

  function handleClick(id) {
        setActiveId(id);
  }

  function getClassName(id) {
      return `pb-2 -mb-0.5  ${activeId === id ? 'content-none h-1 w-10 bg-black rounded-xl' : 'text-gray-500'}`;
  }

  return (
    
    <div className='cursor-pointer flex justify-between w-1/3 bg-white  -mt-4  gap-4 border border-gray-300 rounded-full py-2 pr-2 pl-4 shadow-sm shadow-gray-300 items-center'>
      <input className='h-full w-full border-transparent focus:border-white focus:outline-none' type="search" placeholder='Start your search' />

      
          <Link to={'/places'} className='bg-primary text-white p-2 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </Link>
        </div>
  )
}
