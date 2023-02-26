import React from 'react'
import { hotelImgs } from '../assets'
import useFetch from '../hooks/useFetch'

const BrowseHotel = () => {
  const { data, loading, error } = useFetch('/hotels?featured=on&limit=5')
  
  if (loading) return <>Loading...</>
  return (
    <div className='py-12'>
      <div className="container px-4 mx-auto">
        <div className='pl-2 mb-4'>
          <h1 className='font-bold text-2xl text-slate-900'>Stay at our top properties</h1>
          <p className='text-slate-500'>From castles and villas to boats and igloos, we have it all</p>
        </div>
        <div className="flex flex-wrap">

          {data.map((item, i) => (
            <div className='w-full p-2 sm:w-1/3 md:w-1/4 lg:w-1/5' key={i}>
              <div className='w-full'>
                <img src={hotelImgs[i]} alt="" className='w-full h-[190px] object-cover rounded-md' />
                <h1 className='font-bold text-lg text-slate-900 truncate'>{data[i].name}</h1>
                <p className='text-slate-500'>{data[i].city}</p>
                <div className='flex gap-2 items-center mt-1'>
                  <div className='flex w-6 h-6 items-center justify-center text-white font-semibold bg-primary text-xs rounded-md rounded-bl-none'>8.4</div>
                  <p className='text-slate-500 text-xs'><b>Very Good</b> · 87 reviews</p>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default BrowseHotel