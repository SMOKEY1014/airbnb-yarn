import React, { useState, useContext } from 'react';
import { UserContext } from './Context/UserContext';

export const Footer = () => {
  const { user } = useContext(UserContext);


  return (
    <footer className=''>
      
      <div className="bg-gray-200 w-screen py-16 -ml-16 -mb-4 px-16  text-gray-500">

      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 border-gray-600">
        <div>
          <h2 className='text-black text-xl'>Support</h2>
          <p className='pt-4'>Help Center</p>
          <p className='pt-4'>Safety information</p>
          <p className='pt-4'>Cancellation options</p>
          <p className='pt-4'>Our COVID-19 Reesponce</p>
          <p className='pt-4'>Report a neighborhood concern</p>
        </div>

        <div>
          <h2 className='text-black text-xl '>Community</h2>
          <p className='pt-4'>Airbnb.org: disaster relief housing</p>
          <p className='pt-4'>Support: Afgan refugees</p>
          <p className='pt-4'>Celebrating diversity & belonging</p>
          <p className='pt-4'>Combating discrimination</p>
        </div>

        <div>
          <h2 className='text-black text-xl '>Hosting</h2>
          <p className='pt-4'>Try Hosting</p>
          <p className='pt-4'>AirCover: protection for Hosts</p>
          <p className='pt-4'>Explore hosting resources</p>
          <p className='pt-4'>Visit our community forum</p>
          <p className='pt-4'>How to host responsibly</p>
        </div>

        <div>
          <h2 className='text-black text-xl'>About</h2>
          <p className='pt-4'>Newsroom</p>
          <p className='pt-4'>Learn about new features</p>
          <p className='pt-4'>Letter from our founders</p>
          <p className='pt-4'>Careers</p>
          <p className='pt-4'>Investors</p>
          <p className='pt-4'>Airbnb Luxe</p>
        </div>

        </div>
        <div className="flex justify-between border border-t-gray-500 mt-9 pt-9">
          <div className='flex gap-4'>
            © 2024 Airbnb.Inc
            <li>Privacy</li>
            <li>Terms</li>
            <li>Sitemap</li>
          </div>

          <div className='flex gap-8 mr-3'>
            <div className='flex gap-2 text-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>

              <span className='max-w-fit max-h-8 border-b-2 border-gray-500'>English(US)</span></div>
            <div className='flex gap-2'>
              $
              <span className='max-w-fit max-h-8 border-b-2 border-gray-500'>USD</span> </div>
            <span><img className='rounded-2xl w-8' src="https://img.freepik.com/premium-vector/facebook-logo-vector-facebook-official-logo-vector-grey-facebook-logo-illustrator_1002350-1804.jpg?w=360" alt="" /></span>
            <span><img className='rounded-2xl w-8 grayscale-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5omZvmSpj-zob_rLUuvyOXmLza7G6wDAkA&s" alt="" /></span>
            <span><img className='rounded-l w-8 grayscale' src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png" alt="" /></span>
            
          </div>

        </div>
        </div>
    </footer>
  );
};

