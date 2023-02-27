import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import axios from 'axios';
import { format } from 'date-fns';

const RoomSelect = ({ hotelId, onClose }) => {
  const [selectedRooms, setSelectedRooms] = useState([])
  const { data, loading, error } = useFetch(`${process.env.REACT_APP_API}/hotels/${hotelId}/rooms`)
  const { dates } = JSON.parse(localStorage.getItem("search"))
  const navigate = useNavigate()

  function getDatesInRange(startDate, endDate) {
    const start = new Date(startDate)
    const end = new Date(endDate)

    let date = new Date(start.getTime())

    const dates = []

    while (date <= end) {
      dates.push(date)
      // date = date + 1day
      date = new Date(date.getTime() + (24 * 60 * 60 * 1000))
    }

    return dates
  }

  const allDates = getDatesInRange(dates.startDate, dates.endDate)
 
  const isAvailable = (roomNumber) => {
    const unavailable = roomNumber.unavailableDates.some((date) => {

      const formattedDates = allDates.map(date=>format(date, "MM/dd/yyyy"))
      
      return formattedDates.includes(format(new Date(date), "MM/dd/yyyy"))
    })

    return !unavailable
  }

  const handleSelect = (e) => {
    const checked = e.target.checked
    const value = e.target.value

    setSelectedRooms(
      checked ? [...selectedRooms, value] : selectedRooms.filter(item=> item !== value)
    )
  }
  
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      if (selectedRooms.length > 0) 
        await axios.put(`${process.env.REACT_APP_API}/rooms/roomNumbers/setAvailable?ids=${selectedRooms.toString()}`, { dates: allDates })

      onClose()
      navigate("/thankyou")
    } catch (error) {
      console.error(error)
    }
  }
  
  if (loading) return <>Loading...</>
  return (
    <div onClick={onClose} className='fixed top-0 left-0 w-screen h-screen z-50 bg-slate-900/20 flex items-center justify-center'>
      <form onClick={e=>e.stopPropagation()} onSubmit={handleSubmit} className='relative w-full max-w-md bg-white rounded-md p-4'>
        <button onClick={onClose} type='button' className='absolute top-0 right-0 bg-slate-900 rounded-full text-white flex justify-center items-center p-1 translate-x-1 -translate-y-1'>
          <CloseIcon />
        </button>

        <h1 className='font-semibold text-xl text-slate-900 mb-2'>Select your rooms</h1>

        {data.length <= 0 && <span className='text-slate-500'>No Room</span>}
        <div className='p-2 flex flex-col gap-4'>
          {data.map((room, i)=>(
            <div className='flex justify-between gap-4' key={i}>
              <div>
                <h1 className='font-semibold text-lg text-slate-900 mb-2'>{room.title}</h1>
                <p className='text-slate-500 mb-1 max-h-16 overflow-y-auto'>{room.desc}</p>
                <span className='block text-slate-500 mb-1'>Max people: {room.maxPeople}</span>
                <span className='block text-primary font-semibold'>${room.price}</span>
              </div>
              <div className='grid grid-cols-2 gap-1 h-max min-w-max'>
              
              {room.roomNumbers.map((roomNumber, i)=> (
                <div className='flex flex-col items-center' key={i}>
                  <label className='text-xs'>{roomNumber.number}</label>
                  <input 
                    type="checkbox" 
                    value={roomNumber._id} 
                    onChange={handleSelect} 
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
                
              </div>
            </div>
          ))}

        </div>

        <button className='w-full bg-primary text-white py-2 px-4 font-semibold rounded-md mt-2'>Reserve Now!</button>
      </form>
    </div>
  )
}

export default RoomSelect