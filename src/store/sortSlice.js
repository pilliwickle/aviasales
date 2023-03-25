import { createSlice } from '@reduxjs/toolkit'

const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    currentSort: 'cheapest',
  },
  reducers: {
    selectSort(state, action) {
      state.currentSort = action.payload
    },
  },
})

export const { selectSort } = sortSlice.actions
export default sortSlice.reducer
