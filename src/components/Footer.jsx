import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <footer className='bg-primary'>
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto py-12 text-center">
          <h1 className='font-bold text-2xl text-white'>Save time, save money!</h1>
          <p className='text-slate-300 mb-4'>Sign up and we'll send the best deals to you</p>
          <form onSubmit={(e)=>e.preventDefault()} className='flex justify-center'>
            <input type="email" name="email" id="emailInput" placeholder='Your email address' className='p-2 rounded-md mr-1 w-[190px] lg:w-[280px] focus:outline-none focus:ring' />
            <button className='py-2 px-4 rounded-md bg-primary text-white border-2 border-white font-semibold'>Subscribe</button>
          </form>
        </div>
        <hr className='mb-8' />
        {/* Links */}
        <div className="flex flex-wrap">

          <div className="flex flex-col gap-1 w-full px-4 mb-12 sm:w-1/3 md:w-1/4 lg:w-1/5 text-slate-300">
            <h2 className="font-bold text-4xl text-white">KAP.</h2>
            <p>Countries</p>
            <p>Regions</p>
            <p>Cities</p>
            <p>Districts</p>
            <p>Airports</p>
            <p>Hotels</p>
            <p>Places of interest</p>
          </div>
          
          <div className="flex flex-col gap-1 w-full px-4 mb-12 sm:w-1/3 md:w-1/4 lg:w-1/5 text-slate-300">      
            <p>Homes</p>
            <p>Apartments</p>
            <p>Resorts</p>
            <p>Villas</p>
            <p>Hostels</p>
            <p>B&Bs</p>
            <p>Guest houses</p>
          </div>

          <div className="flex flex-col gap-1 w-full px-4 mb-12 sm:w-1/3 md:w-1/4 lg:w-1/5 text-slate-300">
            <p>Unique places</p>
            <p>All destinations</p>
            <p>Flight destinations</p>
            <p>Discover</p>
            <p>Reviews</p>
            <p>Monthly stays</p>
            <p>Travel articles</p>
            <p>Travel communities</p>
            <p>Holiday deals</p>
            <p>Traveller Awards</p>
          </div>

          <div className="flex flex-col gap-1 w-full px-4 mb-12 sm:w-1/3 md:w-1/4 lg:w-1/5 text-slate-300">                       
            <p>Flight finder</p>
            <p>Restaurant</p>
            <p>Travel Agents</p>
            <p>COVID-19 FAQs</p>
            <p>About KAP</p>
            <p>Customer Service</p>
            <p>Partner help</p>
            <p>Careers</p>
          </div>

          <div className="flex flex-col gap-1 w-full px-4 mb-12 sm:w-1/3 md:w-1/4 lg:w-1/5 text-slate-300">
            <p>Sustainability</p>
            <p>Press Center</p>
            <p>Safety Center</p>
            <p>Investor relations</p>
            <p>Terms & Conditions</p>
            <p>Partner dispute</p>
            <p>How We Work</p>
            <p>Privacy & cookie</p>
            <p>MSA statement</p>
            <p>Corporate contact</p>
          </div>

        </div>
        
      </div>

      {/* Copyright */}
      <div className='bg-white text-center p-2 text-xs text-slate-800'>
        <p>Made with <FavoriteIcon className='text-pink-500' /> by <a href='http://kapcreation.netlify.app' target="_blank" className='underline font-semibold'>KAP</a>.</p>
      </div>
    </footer>
  )
}

export default Footer