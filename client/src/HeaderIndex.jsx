import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './Context/UserContext';
import { Header2 } from './Header2';

export const HeaderIndex = () => {
  const { user } = useContext(UserContext);
  
  const [activeId, setActiveId] = useState(1);

  function handleClick(id) {
        setActiveId(id);
  }

  function getClassName(id) {
      return `pb-2 -mb-0.5  ${activeId === id ? 'content-none h-1 w-10 bg-white rounded-xl' : 'text-gray-500'}`;
  }

  return (
    <header className='flex cursor-pointer justify-between px-4 -mt-4 text-white bg-black w-screen -ml-16 pt-8'>
      <Link to={'/'} className='flex item-center gap-1'>
        <img className='h-10' src="https://i.pinimg.com/originals/a3/ae/b1/a3aeb11137ac5da4915ff39d61a83130.jpg" alt="" />
        {/* <img className='h-10' src="../src/assets/Airbnb-Logo.wine.png" alt="" /> */}
      </Link>
      {/* <Header2/> */}
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
      <div className='flex items-center gap-8 -mt-8'>
        <div className="flex gap-4">
           {user? (<div className='hidden md:block'>{user.name}</div>) : 
          <div className='flex gap-4'>
          <span>Become a Host</span>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>

          </div>}
        </div>
      
        <Link to={user?'/account':'/login'} className="flex items-center gap-4 border border-white rounded-full py-4 px-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 relative top-1">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
          </svg>

          </div>
          {/* {!!user && (<div className='hidden md:block'>{user.name}</div>)} */}
        </Link>
      </div>
      </header>
  )
}
