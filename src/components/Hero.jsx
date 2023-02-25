import React, { useState } from 'react'
import { banner } from '../assets'
import Searchbox from './Searchbox'

const Hero = () => {
  return (
    <section id="home" style={{ backgroundImage: `url(${banner})` }} className="relative bg-cover h-[320px] bg-center">
      <div className='w-full h-full backdrop-brightness-75'>
        <div className="container">
          <div className="px-12 lg:px-24 absolute bottom-32 lg:bottom-16 left-0">
            <h1 className='font-bold text-white text-4xl'>Find your next stay</h1>
            <p className='font-semibold text-white text-base'>Search deals on hotels, homes, and much more...</p>
          </div>
          <Searchbox />
        </div>
      </div>
    </section>
  )
}

export default Hero