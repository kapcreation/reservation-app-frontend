import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const RoomSelect = ({ onClose }) => {
  return (
    <div onClick={onClose} className='fixed top-0 left-0 w-screen h-screen z-50 bg-slate-900/20 flex items-center justify-center'>
      <form onClick={e=>e.stopPropagation()} onSubmit={(e)=>e.preventDefault()} className='relative w-full max-w-md bg-white rounded-md p-4'>
        <button onClick={onClose} type='button' className='absolute top-0 right-0 bg-slate-900 rounded-full text-white flex justify-center items-center p-1 translate-x-1 -translate-y-1'>
          <CloseIcon />
        </button>

        <h1 className='font-semibold text-xl text-slate-900 mb-2'>Select your rooms</h1>

        <div className='p-2 flex flex-col gap-4'>

          <div className='flex justify-between'>
            <div>
              <h1 className='font-semibold text-lg text-slate-900 mb-2'>Deluxe Room</h1>
              <p className='text-slate-500 mb-1'>King size bed, 1 bathroom, balcony</p>
              <span className='block text-slate-500 mb-1'>Max people: 2</span>
              <span className='block text-primary font-semibold'>$159</span>
            </div>
            <div className='grid grid-cols-2 gap-1 h-max'>
              <div className='flex flex-col items-center'>
                <label className='text-xs'>101</label>
                <input type="checkbox" name="" id="" />
              </div>
              <div className='flex flex-col items-center'>
                <label className='text-xs'>101</label>
                <input type="checkbox" name="" id="" />
              </div>
              <div className='flex flex-col items-center'>
                <label className='text-xs'>101</label>
                <input type="checkbox" name="" id="" />
              </div>
              <div className='flex flex-col items-center'>
                <label className='text-xs'>101</label>
                <input type="checkbox" name="" id="" />
              </div>
             
            </div>
          </div>

          <div className='flex justify-between'>
            <div>
              <h1 className='font-semibold text-lg text-slate-900 mb-2'>Deluxe Room</h1>
              <p className='text-slate-500 mb-1'>King size bed, 1 bathroom, balcony</p>
              <span className='block text-slate-500 mb-1'>Max people: 2</span>
              <span className='block text-primary font-semibold'>$159</span>
            </div>
            <div className='grid grid-cols-2 gap-1 h-max'>
              <div className='flex flex-col items-center'>
                <label className='text-xs'>101</label>
                <input type="checkbox" name="" id="" />
              </div>
              <div className='flex flex-col items-center'>
                <label className='text-xs'>101</label>
                <input type="checkbox" name="" id="" />
              </div>
              <div className='flex flex-col items-center'>
                <label className='text-xs'>101</label>
                <input type="checkbox" name="" id="" />
              </div>
              <div className='flex flex-col items-center'>
                <label className='text-xs'>101</label>
                <input type="checkbox" name="" id="" />
              </div>
             
            </div>
          </div>

        </div>

        <button className='w-full bg-primary text-white py-2 px-4 font-semibold rounded-md mt-2'>Reserve Now!</button>
      </form>
    </div>
  )
}

export default RoomSelect