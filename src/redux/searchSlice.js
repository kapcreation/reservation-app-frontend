import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dates: null,
  options: {
    adult: null,
    children: null,
    room: null,
  },
}
export const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
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