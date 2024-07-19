import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './Context/UserContext';
import axios from "axios"

export const Header2 = () => {
  const { user } = useContext(UserContext);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [places, setPlaces] = useState([])

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
      axios.get('/places').then(responce => {
          setPlaces([...responce.data, ...responce.data, ...responce.data]);
      })
  })


  return (
    <div className='cursor-pointer flex justify-between w-8/12 bg-white  m-2  gap-4 border border-gray-300 rounded-full py-3 px-4 shadow-sm shadow-gray-300 items-center'>
      <div className="flex relative items-center ml-8" onClick={toggleDropdown}>
        <div>
          <div>Hotels</div>
          <div className='text-gray-400'>Select Hotel</div>
        </div>
        <div className="ml-12 bg-gray-200 rounded-lg py-3 px-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        {isDropdownVisible && (
          <div className="absolute top-16 -left-10 mt-2 min-w-max bg-white shadow-lg rounded-lg py-2 z-10">
          {places.length > 0 && places.map(place => (
                <Link to={'/place/' + place._id}>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b">{place.title}</a>
                </Link>
            ))}
          </div>
      )}
      </div>
          <div className="border-l h-10 border-gray-300"></div>
          <div>
            <div>Check In</div>
            <div className='text-gray-400'>Add Dates</div>
          </div>
          <div className="border-l h-10 border-gray-300"></div>
          <div>
            <div>Check Out</div>
            <div className='text-gray-400'>Add Dates</div>
          </div>
          <div className="border-l h-10 border-gray-300"></div>
          <div>
            <div>Guests</div>
            <div className='text-gray-400'>Add Guests</div>
          </div>
          <Link to={'/places'} className='bg-primary text-white p-5 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </Link>
        </div>
  )
}
