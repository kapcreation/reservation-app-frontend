import React from 'react'
import { airplaneImg, offerImg } from '../assets'

const Offers = () => {
  return (
    <div className='py-12 bg-slate-100'>
      <div className='container px-4 mx-auto'>
        <div className='pl-2 mb-4'>
          <h1 className='font-bold text-2xl text-slate-900'>Offers</h1>
          <p className='text-slate-500'>Promotions, deals, and special offers for you</p>
        </div>
        <div className='flex flex-wrap'>

          <div className="w-full p-2">
            <div className='bg-white rounded-md p-4 lg:px-8 shadow-lg lg:flex lg:justify-between lg:items-center'>
              <img src={airplaneImg} alt="" className='w-16 h-16 lg:w-24 lg:h-24 object-contain lg:order-1' />
              <div>
                <h1 className='font-bold text-slate-900 text-xl mb-1'>Fly away to your dream vacation</h1>
                <p className='text-slate-500 mb-2'>Get inspired - compare and book flights with flexibility</p>
                <button className='bg-primary py-2 px-4 rounded-md text-white font-semibold'>Search for flights</button>
              </div>
            </div>
          </div>

          <div className="w-full p-2">
            <div style={{ backgroundImage: `url(${offerImg})` }} className='bg-white rounded-md p-4 lg:px-8 shadow-lg bg-cover bg-center'>
              <h1 className='font-bold text-white text-xl mb-1'>Escape for a while</h1>
              <p className='text-slate-100 mb-2'>Enjoy the freedom of a monthly stay on Booking.com</p>
              <button className='bg-primary py-2 px-4 rounded-md text-white font-semibold'>Discover monthly stays</button>
            </div>
          </div>

        </div> 
      </div>
    </div>
  )
}

export default Offers