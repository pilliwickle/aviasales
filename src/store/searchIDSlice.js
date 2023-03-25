import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSearchID = createAsyncThunk('ticket/fetchSearchID', async function (_, { rejectWithValue }) {
  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')

    if (!response.ok) {
      throw new Error('Search ID error', response.status)
    }

    const res = await response.json()
    return res.searchId
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const searchIDSlice = createSlice({
  name: 'searchID',
  initialState: {
    searchID: null,
    error: null,
  },
  extraReducers: {
    [fetchSearchID.pending]: (state) => {
      state.error = null
    },
    [fetchSearchID.fulfilled]: (state, action) => {
      state.searchID = action.payload
    },
    [fetchSearchID.rejected]: (state, action) => {
      state.error = action.payload
    },
  },
})

export default searchIDSlice.reducer
