import React from 'react'
import { globe } from '../assets'

const DiscountBanner = () => {
  return (
    <div className='py-12 bg-slate-100'>
      <div className="container mx-auto px-4">
        <div className="bg-white flex flex-wrap border-2 border-primary rounded-md p-5 lg:px-6 items-center gap-4">
          <img src={globe} alt="" className='w-24 h-24 lg:w-32 lg:h-32 object-contain' />
          <div>
            <h1 className='font-bold text-xl text-primary'>Get instant discounts</h1>
            <p className='text-slate-500 mb-4'>Just sign into your Booking.com account and look for the blue Genius logo to save</p>
            <button type='button' className='py-2 px-4 border border-primary rounded-md text-primary font-semibold'>Sign In</button>
            <button type='button' className='py-2 px-4 text-primary font-semibold'>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscountBanner