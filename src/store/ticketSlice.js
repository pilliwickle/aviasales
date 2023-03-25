import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTickets = createAsyncThunk('ticket/fetchTickets', async function (searchID, { rejectWithValue }) {
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchID}`)

    if (!response.ok) {
      throw new Error('Tickets fetch error', response.status)
    }

    const res = await response.json()
    return res.tickets
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    ticketData: [],
    status: 'loading',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTickets.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchTickets.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.ticketData = action.payload
    },
    [fetchTickets.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})

export default ticketSlice.reducer
