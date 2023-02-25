import React from 'react'
import { hotelImg, apartmentImg, resortImg, villaImg } from '../assets'

const BrowseProperty = () => {
  return (
    <div className='py-12'>
      <div className="container px-4 mx-auto">
        <div className='pl-2 mb-4'>
          <h1 className='font-bold text-2xl text-slate-900'>Browse by property type</h1>
          <p className='text-slate-500'>Pick a vibe and explore the top destinations</p>
        </div>
        <div className="flex flex-wrap">

          <div className='w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <div className='w-full'>
              <img src={hotelImg} alt="" className='w-full h-[250px] object-cover rounded-md' />
              <h1 className='font-bold text-lg text-slate-900'>Hotels</h1>
              <p className='text-slate-500'>941,505 hotels</p>
            </div>
          </div>

          <div className='w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <div className='w-full'>
              <img src={apartmentImg} alt="" className='w-full h-[250px] object-cover rounded-md' />
              <h1 className='font-bold text-lg text-slate-900'>Apartments</h1>
              <p className='text-slate-500'>241,982 apartments</p>
            </div>
          </div>

          <div className='w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <div className='w-full'>
              <img src={resortImg} alt="" className='w-full h-[250px] object-cover rounded-md' />
              <h1 className='font-bold text-lg text-slate-900'>Resorts</h1>
              <p className='text-slate-500'>120,019 resorts</p>
            </div>
          </div>

          <div className='w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <div className='w-full'>
              <img src={villaImg} alt="" className='w-full h-[250px] object-cover rounded-md' />
              <h1 className='font-bold text-lg text-slate-900'>Villas</h1>
              <p className='text-slate-500'>41,200 villas</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BrowseProperty