import { useEffect, useState } from "react"
import format from "date-fns/format"
import { DateRange } from "react-date-range"
import { noimg } from '../assets'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import useFecth from "../hooks/useFetch"
import { newSearch } from "../redux/searchSlice"

const SearchPanel = ({ search }) => {
  const dispatch = useDispatch()
  const { destination, options } = search
  const [dates, setDates] = useState(search.dates)

  const [dateIsOpen, setDateIsOpen] = useState(false)  

  function handleSelect(ranges){
    const newDates = {
      startDate: ranges.selection.startDate.getTime(),
      endDate: ranges.selection.endDate.getTime()
    }
    
    setDates(newDates)
    setDateIsOpen(false)
  }
  
  function openDate() {
    setDateIsOpen(prev=>!prev)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const form = e.currentTarget;
    const { 
      destination, 
      minPrice = null, 
      maxPrice = null, 
      adults, 
      children, 
      rooms 
    } = Object.fromEntries(new FormData(form));

    const options = { 
      minPrice: minPrice ? parseInt(minPrice) : null,
      maxPrice: maxPrice ? parseInt(maxPrice) : null,
      adults: parseInt(adults),
      children: parseInt(children),
      rooms: parseInt(rooms),
    };

    dispatch(newSearch({ destination, dates, options }))
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-md min-w-[300px] max-w-[350px]">
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
            ranges={[{ startDate: new Date(dates.startDate), endDate: new Date(dates.endDate), key: 'selection' }]}
            minDate={new Date()}
            className="border border-primary rounded-md p-1 absolute z-50 top-16 left-1/2 -translate-x-1/2"
          />
        )}
      </div>
      {/* Options */}
      <div className="mb-4">
        <h1 className="font-semibold text-lg text-slate-900">Options</h1>
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="minPriceInput" className="text-slate-900">Min price per night</label>
          <input type="number" name="minPrice" id="minPriceInput" className="w-16 border border-primary rounded-md text-slate-900 p-1 focus:outline-none focus:ring" min={0} defaultValue={options.minPrice} />
        </div>
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="maxPriceInput" className="text-slate-900">Max price per night</label>
          <input type="number" name="maxPrice" id="maxPriceInput" className="w-16 border border-primary rounded-md text-slate-900 p-1 focus:outline-none focus:ring" min={0} defaultValue={options.maxPrice} />
        </div>
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="adultsInput" className="text-slate-900">Adults</label>
          <input type="number" name="adults" id="adultsInput" className="w-16 border border-primary rounded-md text-slate-900 p-1 focus:outline-none focus:ring" min={0} defaultValue={options.adults} />
        </div>
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="childrenInput" className="text-slate-900">Children</label>
          <input type="number" name="children" id="childrenInput" className="w-16 border border-primary rounded-md text-slate-900 p-1 focus:outline-none focus:ring" min={0} defaultValue={options.children} />
        </div>
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="roomsInput" className="text-slate-900">Room</label>
          <input type="number" name="rooms" id="roomsInput" className="w-16 border border-primary rounded-md text-slate-900 p-1 focus:outline-none focus:ring" min={1} defaultValue={options.rooms} />
        </div>
      </div>

      <button className="w-full py-2 px-4 bg-primary font-semibold text-white rounded-md">Search</button>
    </form>
  )
}

const SearchResult = () => {
  const search = useSelector(state=>state.search)
  const { destination, dates, options } = search
  const { minPrice, maxPrice } = options
  
  const queryParams = {
    city: destination,
    ...(minPrice && { min: minPrice }),
    ...(maxPrice && { max: maxPrice }),
  };
  const apiUrl = `${process.env.REACT_APP_API}/hotels?${new URLSearchParams(queryParams)}`;
  const { data, loading, error, fetchData } = useFecth(apiUrl);

  useEffect(() => {
    fetchData()
  }, [search])
  
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="p-4">
            <SearchPanel search={search} />
          </div>

          {loading ? "Loading..." : <div className="w-full h-[700px] overflow-x-hidden overflow-y-auto my-4">
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
                    <span className="font-semibold text-slate-900 text-lg md:block">${item.cheapestPrice}</span>
                    <p className="hidden md:block text-slate-500 mb-2">Includes taxes and fees</p>
                    <Link to={`/hotels/${item._id}`} className="ml-1 bg-primary text-white py-1 px-2 rounded-md font-semibold whitespace-nowrap">See availability</Link>
                  </div>
                </div>
              ))}
             
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default SearchResult