import React from 'react'
import { apartmentImg, resortImg, villaImg, inspiration } from '../assets'

const Gallery = () => {
  return (
    <div className='py-12'>
      <div className="container mx-auto px-4">
        <div className='pl-1 mb-4'>
          <h1 className='font-bold text-slate-900 text-2xl'>Get inspiration</h1>
          <p className='text-slate-500'>Quick and easy plan for your next trip</p>
        </div>
        <div className="grid auto-rows-[150px] gap-2 md:grid-cols-4">
          <div className="group relative w-full md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-3 overflow-hidden cursor-pointer">
            <img src={inspiration} alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-white p-2 translate-y-full group-hover:translate-y-0 transition-all">
              <h1 className='font-semibold text-lg text-slate-900'>Destinations we love</h1>
              <p className='text-slate-500'>Love is certainly all around at these amorous locations</p>
            </div>
          </div>
          <div className="group relative w-full md:col-start-3 md:col-end-5 overflow-hidden cursor-pointer">
            <img src={apartmentImg} alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-white p-2 translate-y-full group-hover:translate-y-0 transition-all">
              <h1 className='font-semibold text-lg text-slate-900'>Top places in Japan to see cherry blossoms</h1>
              <p className='text-slate-500'>Love is certainly all around at these amorous locations</p>
            </div>
          </div>
          <div className="group relative w-full overflow-hidden cursor-pointer">
            <img src={resortImg} alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-white p-2 translate-y-full group-hover:translate-y-0 transition-all">
              <h1 className='font-semibold text-lg text-slate-900'>Sydney WorldPride: The Guide</h1>
              <p className='text-slate-500'>Love is certainly all around at these amorous locations</p>
            </div>
          </div>
          <div className="group relative w-full overflow-hidden cursor-pointer">
            <img src={villaImg} alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-white p-2 translate-y-full group-hover:translate-y-0 transition-all">
              <h1 className='font-semibold text-lg text-slate-900'>Most romantic destinations</h1>
              <p className='text-slate-500'>Love is certainly all around at these amorous locations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery