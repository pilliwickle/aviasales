import { configureStore } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-named-as-default
import filterSlice from './filterSlice'
import searchIDSlice from './searchIDSlice'
import ticketSlice from './ticketSlice'
import sortSlice from './sortSlice'

const store = configureStore({
  reducer: {
    filter: filterSlice,
    searchID: searchIDSlice,
    ticket: ticketSlice,
    sort: sortSlice,
  },
})

export default store
