import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { hotelImgs } from '../assets'
import RoomSelect from '../components/RoomSelect';

const Details = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div>
      <div className="container mx-auto px-4">
        <div className='flex flex-wrap justify-between p-4'>
          <div className='w-full lg:w-auto'>
            <h1 className='font-bold text-primary text-2xl mb-2'>Royal Palace Hotel</h1>
            <span className='text-slate-500 mb-1 flex items-center gap-1'><LocationOnIcon /> 21 Western Gateway, Newham</span>
            <p className='text-slate-900 mb-1'>Excellent location - 700m from airport</p>
            <p className='font-semibold text-green-500 mb-2'>Book a stay over $150 at this property and get a free airport taxi</p>
          </div>
         
          <button onClick={()=>setModalIsOpen(true)} type='button' className='bg-primary font-semibold text-white py-2 px-4 rounded-md mb-2 h-max'>Reserve or Book Now!</button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[190px] gap-1 mb-4'>
          <div className='w-full h-full'>
            <img src={hotelImgs[0]} alt="" className='w-full h-full object-cover rounded-md' />
          </div>
          <div className='w-full h-full'>
            <img src={hotelImgs[1]} alt="" className='w-full h-full object-cover rounded-md' />
          </div>
          <div className='w-full h-full'>
            <img src={hotelImgs[2]} alt="" className='w-full h-full object-cover rounded-md' />
          </div>
          <div className='w-full h-full'>
            <img src={hotelImgs[3]} alt="" className='w-full h-full object-cover rounded-md' />
          </div>
          <div className='w-full h-full'>
            <img src={hotelImgs[0]} alt="" className='w-full h-full object-cover rounded-md' />
          </div>
          <div className='w-full h-full'>
            <img src={hotelImgs[1]} alt="" className='w-full h-full object-cover rounded-md' />
          </div>
          <div className='w-full h-full'>
            <img src={hotelImgs[2]} alt="" className='w-full h-full object-cover rounded-md' />
          </div>
          <div className='w-full h-full'>
            <img src={hotelImgs[3]} alt="" className='w-full h-full object-cover rounded-md' />
          </div>
        </div>
        
        <div className='flex flex-wrap gap-y-8 justify-center sm:justify-start lg:justify-between mb-4'>
          <div className='w-full sm:max-w-lg'>
            <h1 className='font-bold text-2xl text-slate-900 mb-2'>Stay in Royal Style</h1>
            <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At rem quis in nam molestias ab perferendis quos magni culpa a doloribus omnis quam accusamus repellat quibusdam dignissimos eligendi fuga ad, reprehenderit vero.</p>
          </div>

          <div className='w-full bg-slate-200 rounded-md p-4 sm:max-w-xs'>
            <h2 className='text-slate-700 font-semibold text-lg mb-4'>Perfect for a 2-night stay!</h2>
            <p className='mb-4'>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</p>
            <span className='block text-2xl mb-4 text-slate-700'>
              <b className='text-slate-900'>$518</b> (2 nights)
            </span>

            <button onClick={()=>setModalIsOpen(true)} type='button' className='w-full bg-primary font-semibold text-white py-2 px-4 rounded-md h-max'>Reserve or Book Now!</button>
          </div>
        </div>
      </div>

      {modalIsOpen && <RoomSelect onClose={()=>setModalIsOpen(false)} />}
    </div>
  )
}

export default Details