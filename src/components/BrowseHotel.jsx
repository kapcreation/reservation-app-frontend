import React from 'react'
import { hotelImgs } from '../assets'

const BrowseHotel = () => {
  return (
    <div className='py-12'>
      <div className="container px-4 mx-auto">
        <div className='pl-2 mb-4'>
          <h1 className='font-bold text-2xl text-slate-900'>Stay at our top properties</h1>
          <p className='text-slate-500'>From castles and villas to boats and igloos, we have it all</p>
        </div>
        <div className="flex flex-wrap">

          <div className='w-full p-2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
            <div className='w-full'>
              <img src={hotelImgs[0]} alt="" className='w-full h-[190px] object-cover rounded-md' />
              <h1 className='font-bold text-lg text-slate-900 truncate'>La Roulotte de Ciney</h1>
              <p className='text-slate-500'>Belgium, Ciney</p>
              <div className='flex gap-2 items-center mt-1'>
                <div className='flex w-6 h-6 items-center justify-center text-white font-semibold bg-primary text-xs rounded-md rounded-bl-none'>8.4</div>
                <p className='text-slate-500 text-xs'><b>Very Good</b> · 87 reviews</p>
              </div>
            </div>
          </div>

          <div className='w-full p-2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
            <div className='w-full'>
              <img src={hotelImgs[1]} alt="" className='w-full h-[190px] object-cover rounded-md' />
              <h1 className='font-bold text-lg text-slate-900 truncate'>Wierszyki Shelters</h1>
              <p className='text-slate-500'>Poland, Zakopane</p>
              <div className='flex gap-2 items-center mt-1'>
                <div className='flex w-6 h-6 items-center justify-center text-white font-semibold bg-primary text-xs rounded-md rounded-bl-none'>9.2</div>
                <p className='text-slate-500 text-xs'><b>Very Good</b> · 87 reviews</p>
              </div>
            </div>
          </div>

          <div className='w-full p-2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
            <div className='w-full'>
              <img src={hotelImgs[2]} alt="" className='w-full h-[190px] object-cover rounded-md' />
              <h1 className='font-bold text-lg text-slate-900 truncate'>Finca Esperanza</h1>
              <p className='text-slate-500'>Spain, Yaiza</p>
              <div className='flex gap-2 items-center mt-1'>
                <div className='flex w-6 h-6 items-center justify-center text-white font-semibold bg-primary text-xs rounded-md rounded-bl-none'>9.7</div>
                <p className='text-slate-500 text-xs'><b>Very Good</b> · 87 reviews</p>
              </div>
            </div>
          </div>

          <div className='w-full p-2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
            <div className='w-full'>
              <img src={hotelImgs[3]} alt="" className='w-full h-[190px] object-cover rounded-md' />
              <h1 className='font-bold text-lg text-slate-900 truncate'>Tiny House Dreischwesternherz</h1>
              <p className='text-slate-500'>Germany, Trier</p>
              <div className='flex gap-2 items-center mt-1'>
                <div className='flex w-6 h-6 items-center justify-center text-white font-semibold bg-primary text-xs rounded-md rounded-bl-none'>9.0</div>
                <p className='text-slate-500 text-xs'><b>Very Good</b> · 87 reviews</p>
              </div>
            </div>
          </div>

          <div className='w-full p-2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
            <div className='w-full'>
              <img src={hotelImgs[4]} alt="" className='w-full h-[190px] object-cover rounded-md' />
              <h1 className='font-bold text-lg text-slate-900 truncate'>Mini Hotel</h1>
              <p className='text-slate-500'>Germany, Lübbenau</p>
              <div className='flex gap-2 items-center mt-1'>
                <div className='flex w-6 h-6 items-center justify-center text-white font-semibold bg-primary text-xs rounded-md rounded-bl-none'>8.3</div>
                <p className='text-slate-500 text-xs'><b>Very Good</b> · 87 reviews</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BrowseHotel