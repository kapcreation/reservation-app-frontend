import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Promotion from '../components/Promotion'
import Offers from '../components/Offers'
import BrowseProperty from '../components/BrowseProperty'
import Gallery from '../components/Gallery'
import BrowseHotel from '../components/BrowseHotel'
import DiscountBanner from '../components/DiscountBanner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Promotion />
      <Offers />
      <BrowseProperty />
      <Gallery />
      <BrowseHotel />
      <DiscountBanner />
    </>
  )
}

export default Home