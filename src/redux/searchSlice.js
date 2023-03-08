import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  destination: "",
  dates: {
    startDate: new Date().getTime(),
    endDate: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).getTime()
  }, 
  options: { 
    adults: 2, 
    children: 0, 
    rooms: 1,
    minPrice: null,
    maxPrice: null,
  } 
} 
export const searchSlice = createSlice({
  name: 'search',
  initialState: JSON.parse(localStorage.getItem("search")) || initialState,
  reducers: {
    newSearch: (state, action) => {
      localStorage.setItem("search", JSON.stringify({ ...state, ...action.payload }))
      
      return { ...state, ...action.payload }
    },
    resetSearch: (state) => {
      localStorage.removeItem("search")

      return initialState
    }
  },
})

// Action creators are generated for each case reducer function
export const { newSearch, resetSearch } = searchSlice.actions

export default searchSlice.reducer