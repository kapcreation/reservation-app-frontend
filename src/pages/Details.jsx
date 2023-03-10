import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { hotelImgs } from '../assets'
import RoomSelect from '../components/RoomSelect';
import { useAuth } from '../contexts/AuthContext'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux'

const Details = () => {
  const search = useSelector(state=>state.search)
  const { dates, options } = search
  
  const { id } = useParams()
  const { data, loading, error } = useFetch(`${process.env.REACT_APP_API}/hotels/${id}`)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { user } = useAuth()
  const navigate = useNavigate()

  function openModal() {
    if (!user) navigate("/login")

    setModalIsOpen(true)
  }

  const days = Math.round((dates.endDate - dates.startDate) / (1000 * 60 * 60 * 24))

  if (loading) return <div>Loading...</div>
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className='flex flex-wrap justify-between p-4'>
          <div className='w-full lg:w-auto'>
            <h1 className='font-bold text-primary text-2xl mb-2'>{data.name}</h1>
            <span className='text-slate-500 mb-1 flex items-center gap-1'><LocationOnIcon /> {data.address}</span>
            <p className='text-slate-900 mb-1'>Excellent location - {data.distance}</p>
            <p className='font-semibold text-green-500 mb-2'>Book a stay over $150 at this property and get a free airport taxi</p>
          </div>
         
          <button onClick={openModal} type='button' className='bg-primary font-semibold text-white py-2 px-4 rounded-md mb-2 h-max'>Reserve or Book Now!</button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-1 mb-4'>
          {data.photos.map((photo, i)=> (
            <div className='w-full h-full' key={i}>
              <img src={photo} alt="" className='w-full h-full object-cover rounded-md' />
            </div>
          ))}
        </div>
        
        <div className='flex flex-wrap gap-y-8 justify-center sm:justify-start lg:justify-between mb-4'>
          <div className='w-full sm:max-w-lg'>
            <h1 className='font-bold text-2xl text-slate-900 mb-2'>{data.title}</h1>
            <p className='text-slate-500'>{data.desc}</p>
          </div>

          <div className='w-full bg-slate-200 rounded-md p-4 sm:max-w-xs'>
            <h2 className='text-slate-700 font-semibold text-lg mb-4'>Perfect for a {days}-night stay!</h2>
            <p className='mb-4'>{data.title}</p>
            <span className='block text-2xl mb-4 text-slate-700'>
              <b className='text-slate-900'>${days * data.cheapestPrice * options.rooms}</b> ({days} nights)
            </span>

            <button onClick={openModal} type='button' className='w-full bg-primary font-semibold text-white py-2 px-4 rounded-md h-max'>Reserve or Book Now!</button>
          </div>
        </div>
      </div>

      {modalIsOpen && <RoomSelect hotelId={id} onClose={()=>setModalIsOpen(false)} />}
    </div>
  )
}

export default Details