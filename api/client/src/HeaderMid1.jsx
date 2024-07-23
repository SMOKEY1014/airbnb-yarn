import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './Context/UserContext';
import { Header2 } from './Header2';

export const HeaderMid1 = () => {
  const { user } = useContext(UserContext);
  
  const [activeId, setActiveId] = useState(1);

  function handleClick(id) {
        setActiveId(id);
  }

  function getClassName(id) {
      return `pb-2 -mb-0.5  ${activeId === id ? 'content-none h-1 w-10 bg-black rounded-xl' : 'text-gray-500'}`;
  }

  return (
    
      <div className="flex justify-between gap-8 -mt-8">
        <div className="flex mt-6 gap-16 mb-5 grow items-center">
          <div className='flex flex-col justify-center items-center' onClick={() => handleClick(1)}>
            <div className='p-2'>Places to stay</div>
            <div className={getClassName(1)}></div>
          </div>

          <div className='flex flex-col justify-center items-center' onClick={() => handleClick(2)}>
            <div className='p-2'>Experiences</div>
            <div className={getClassName(2)}></div>
          </div>

          <div className='flex flex-col justify-center items-center'  onClick={() => handleClick(3)}>
            <div className='p-2'>Online Experiences</div>
            <div className={getClassName(3)}></div>
          </div>
      </div>
      </div>
  )
}
