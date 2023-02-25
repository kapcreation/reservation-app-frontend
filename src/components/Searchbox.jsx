import React, { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import BedIcon from '@mui/icons-material/Bed';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Dropdown = ({ options, setOptions, onClose }) => {

  return (
    <div className="absolute z-50 top-12 p-4 bg-white rounded-md border border-primary shadow-md min-w-[300px] left-1/2 -translate-x-1/2">
      <div className="flex justify-between mb-1 items-center">
        <span>Adults</span>
        <div className="border border-primary flex gap-4 items-center">
          <button type="button" onClick={()=>setOptions(prev=>({ ...prev, adults: prev.adults--}))} className="p-2 text-primary disabled:cursor-not-allowed" disabled={(options.adults <= 0) || (options.children <= 0 && options.adults <= 1) }>-</button>
          <span className="text-slate-900">{options.adults}</span>
          <button type="button" onClick={()=>setOptions(prev=>({ ...prev, adults: prev.adults++}))} className="p-2 text-primary">+</button>
        </div>
      </div>
      <div className="flex justify-between mb-1 items-center">
        <span>Children</span>
        <div className="border border-primary flex gap-4 items-center">
          <button type="button" onClick={()=>setOptions(prev=>({ ...prev, children: prev.children-- }))} className="p-2 text-primary disabled:cursor-not-allowed" disabled={(options.children <= 0) || (options.adults <= 0 && options.children <= 1)}>-</button>
          <span className="text-slate-900">{options.children}</span>
          <button type="button" onClick={()=>setOptions(prev=>({ ...prev, children: prev.children++ }))} className="p-2 text-primary">+</button>
        </div>
      </div>
      <div className="flex justify-between mb-1 items-center">
        <span>Rooms</span>
        <div className="border border-primary flex gap-4 items-center">
          <button type="button" onClick={()=>setOptions(prev=>({ ...prev, rooms: prev.rooms-- }))} className="p-2 text-primary disabled:cursor-not-allowed" disabled={options.rooms <= 1}>-</button>
          <span className="text-slate-900">{options.rooms}</span>
          <button type="button" onClick={()=>setOptions(prev=>({ ...prev, rooms: prev.rooms++ }))} className="p-2 text-primary">+</button>
        </div>
      </div>

      <button type="button" onClick={onClose} className="p-2 w-full mt-4 border border-primary text-primary">Done</button>
    </div>
  )
}

const Searchbox = () => {
  const [dateIsOpen, setDateIsOpen] = useState(false)
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const [options, setOptions] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  })

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  })

  function handleSelect(ranges){
    const newDates = {
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection"
    }
    
    setDates(newDates)
    setDateIsOpen(false)
  }

  function openDate() {
    setDropdownIsOpen(false)
    setDateIsOpen(prev=>!prev)
  }

  function openDropdown() {
    setDateIsOpen(false)
    setDropdownIsOpen(prev=>!prev)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className='w-full absolute bottom-0 translate-y-[50%] px-12 lg:px-24'>
      <form className='flex flex-col lg:flex-row p-2 mx-auto bg-white rounded-md border-2 border-primary gap-4 items-center lg:gap-0'>
        {/* Destination input */}
        <label htmlFor='destinationInput' className='flex items-center gap-1 w-max lg:w-1/4'>
          <BedIcon />
          <input type="text" name="destination" id="destinationInput" placeholder='Where are you going?' className='grow focus:outline-none' />
        </label>
        {/* Dates input */}
        <div className="relative w-max lg:w-1/4">
          <button type="button" onClick={openDate} className="w-full text-left">
            {`${format(dates.startDate, "MM/dd/yyyy")} to ${format(dates.endDate,"MM/dd/yyyy")}`}
          </button>
          {dateIsOpen && (
            <DateRange
              editableDateInputs={true}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              ranges={[dates]}
              minDate={new Date()}
              className="border border-primary rounded-md p-1 absolute z-50 top-12 left-1/2 -translate-x-1/2"
            />
          )}
        </div>
        {/* Options input */}
        <div className="relative w-max lg:w-1/4">
          <button type="button" onClick={openDropdown} className="flex gap-1 w-full">
            <PersonIcon />
            <span>{options.adults} adults · {options.children} children · {options.rooms} room</span>
            <KeyboardArrowDownIcon />
          </button>

          {dropdownIsOpen && <Dropdown options={options} setOptions={setOptions} onClose={()=>setDropdownIsOpen(false)} />}
        </div>

        <button onClick={handleSubmit} className="bg-primary rounded-md px-4 py-2 w-full font-semibold text-white lg:w-1/4">Search</button>
      </form>
    </div>
  )
}

export default Searchbox