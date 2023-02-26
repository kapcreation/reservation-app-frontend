import React from 'react'
import { hotelImg, apartmentImg, resortImg, villaImg } from '../assets'
import useFetch from '../hooks/useFetch'

const BrowseProperty = () => {
  const { data, loading, error } = useFetch("/hotels/count/type")
  
  const images = [ hotelImg, apartmentImg, resortImg, villaImg ]

  if (loading) return <>Loading...</>
  return (
    <div className='py-12'>
      <div className="container px-4 mx-auto">
        <div className='pl-2 mb-4'>
          <h1 className='font-bold text-2xl text-slate-900'>Browse by property type</h1>
          <p className='text-slate-500'>Pick a vibe and explore the top destinations</p>
        </div>
        <div className="flex flex-wrap">

          {images.map((image, i)=> (
            <div className='w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4' key={i}>
              <div className='w-full'>
                <img src={image} alt="" className='w-full h-[250px] object-cover rounded-md' />
                <h1 className='font-bold text-lg text-slate-900'>{data[i].type}s</h1>
                <p className='text-slate-500'>{data[i].count} {data[i].type}s</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default BrowseProperty