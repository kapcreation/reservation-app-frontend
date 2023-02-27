import { useEffect, useState } from "react"
import format from "date-fns/format"
import { DateRange } from "react-date-range"
import { hotelImg, noimg } from '../assets'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import useFecth from "../hooks/useFetch"
import { newSearch } from "../redux/searchSlice"

const SearchPanel = ({ search, setSearch }) => {
  const dispatch = useDispatch()
  const { dates: initialDates = null, options = { adults: 2, children: 0, rooms: 1 } } = search || {}
  const [dateIsOpen, setDateIsOpen] = useState(false)
  const params = new URLSearchParams(window.location.search);
  const destination = params.get('destination') || ""

  const [dates, setDates] = useState({
    startDate: initialDates ? new Date(initialDates.startDate) : new Date(),
    endDate: initialDates ? new Date(initialDates.endDate) : new Date(new Date().getTime() + (24 * 60 * 60 * 1000)),
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
    setDateIsOpen(prev=>!prev)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const destination = formData.get("destination")
    const newDates = {
      ...dates,
      startDate: dates.startDate.getTime(),
      endDate: dates.endDate.getTime()
    }

    dispatch(newSearch({ destination, dates: newDates, options }))

    setSearch({ destination, dates: newDates, options })
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-md max-w-xs">
      <h1 className="font-bold text-slate-900 text-xl mb-2">Search</h1>
      <div className="mb-1">
        <label htmlFor="destinationInput" className="text-slate-900">Destination</label>
        <input type="text" name="destination" className="w-full border border-primary rounded-md text-slate-900 p-1 focus:outline-none focus:ring" defaultValue={destination} />
      </div>
      {/* Dates input */}
      <div className="relative mb-2">
        <p>Check-in Date</p>
        <button type="button" onClick={openDate} className="w-full text-left border border-primary rounded-md text-slate-900 p-1">
          {`${format(dates.startDate, "MM/dd/yyyy")} to ${format(dates.endDate,"MM/dd/yyyy")}`}
        </button>
        {dateIsOpen && (
          <DateRange
            editableDateInputs={true}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            ranges={[dates]}
            minDate={new Date()}
            className="border border-primary rounded-md p-1 absolute z-50 top-16 left-1/2 -translate-x-1/2"
          />
        )}
      </div>
      {/* Options */}
      <div className="mb-4">
        <h1 className="font-semibold text-lg text-slate-900">Options</h1>
        <div className="flex justify-between items-center mb-1">
          <p className="text-slate-900">Min price per night</p>
          <input type="number" name="min" id="minInput" className="w-10 border border-primary rounded-md text-slate-900 p-1 focus:outline-none focus:ring" min={0} />
        </div>
        <div className="flex justify-between items-center mb-1">
          <p className="text-slate-900">Max price per night</p>
          <input type="number" name="min" id="minInput" className="w-10 border border-primary rounded-md text-slate-900 p-1 focus:outline-none focus:ring" min={0} />
        </div>
        <div className="flex justify-between items-center mb-1">
          <p className="text-slate-900">Adults</p>
          <input type="number" name="min" id="minInput" className="w-10 border border-primary rounded-md text-slate-900 p-1 focus:outline-none focus:ring" min={0} defaultValue={options.adults} />
        </div>
        <div className="flex justify-between items-center mb-1">
          <p className="text-slate-900">Children</p>
          <input type="number" name="min" id="minInput" className="w-10 border border-primary rounded-md text-slate-900 p-1 focus:outline-none focus:ring" min={0} defaultValue={options.children} />
        </div>
        <div className="flex justify-between items-center mb-1">
          <p className="text-slate-900">Room</p>
          <input type="number" name="min" id="minInput" className="w-10 border border-primary rounded-md text-slate-900 p-1 focus:outline-none focus:ring" min={1} defaultValue={options.rooms} />
        </div>
      </div>

      <button className="w-full py-2 px-4 bg-primary font-semibold text-white rounded-md">Search</button>
    </form>
  )
}

const SearchResult = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState(JSON.parse(localStorage.getItem("search")))
  const params = new URLSearchParams(window.location.search);
  const destination = params.get('destination') || ""

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(9999)
  
  const { data, loading, error, fetchData } = useFecth(`${process.env.REACT_APP_API}/hotels?city=${destination}&min=${min}&max=${max}`)

  useEffect(() => {
    fetchData()
  }, [search])
  

  if (loading) return <div>Loading...</div>
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="p-4">
            <SearchPanel search={search} setSearch={setSearch} />
          </div>

          <div className="w-full h-[700px] overflow-x-hidden overflow-y-auto my-4">
            <div className="flex flex-col gap-4 w-full">

              {data.length <= 0 && <span className="text-slate-500">No Hotel Found!</span>}
              {data.map((item, i) => (
                <div className="w-full flex flex-wrap bg-white shadow-lg rounded-md overflow-hidden p-2" key={i}>
                  <div className="w-full md:w-[30%]">
                    <img src={item.photos[0] || noimg} alt="" className="w-full h-full min-h-[200px] max-h-[250px] object-cover rounded-md" />
                  </div>
                  <div className="w-full md:w-[50%] p-2">
                    <h1 className="font-bold text-xl text-primary md:mb-2">{item.name}</h1>
                    <p className="hidden md:block text-slate-900 text-sm md:mb-1">{item.distance}</p>
                    <span className="hidden md:inline-block bg-green-500 text-white text-sm p-1 rounded-md md:mb-1">Free airport taxi</span>
                    <h2 className="hidden md:block text-slate-900 font-semibold md:mb-1">Studio Apartment with Air conditioning</h2>
                    <p className="hidden md:block text-slate-500">{item.desc}</p>
                  </div>
                  <div className="w-full md:w-[20%] md:text-right p-2">
                    <span className="font-semibold text-slate-900 text-lg md:block">$259</span>
                    <p className="hidden md:block text-slate-500 mb-2">Includes taxes and fees</p>
                    <Link to={`/hotels/${item._id}`} className="ml-1 bg-primary text-white py-1 px-2 rounded-md font-semibold whitespace-nowrap">See availability</Link>
                  </div>
                </div>
              ))}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult