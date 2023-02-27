import React from 'react'
import { Link } from 'react-router-dom'
import { party } from '../assets'

const Thankyou = () => {
  return (
    <div className='min-h-[80vh]'>
      <div className="container mx-auto px-4">
        <div className='max-w-xl mx-auto text-center mt-12'>
          <img src={party} alt="" className='inline-block w-16 h-16 object-contain mb-1' />
          <h1 className='font-bold text-2xl text-slate-900 mb-1'>Congratulations!</h1>
          <p className='text-slate-500 mb-8'>
            Your reservation has been successfully completed! If you have any questions or concerns about your reservation, please reach out to our customer support team for assistance. We hope you have a wonderful stay at your chosen hotel!
          </p>
          <Link to="/" className='bg-primary text-white font-semibold py-2 px-4 rounded-md'>Back</Link>
        </div>
      </div>
    </div>
  )
}

export default Thankyou