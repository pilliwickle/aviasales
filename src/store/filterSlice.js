import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    allTrans: false,
    noneTrans: false,
    oneTrans: false,
    twoTrans: false,
    threeTrans: false,
  },
  reducers: {
    selectFilter(state, action) {
      const filterName = action.payload

      if (filterName === 'allTrans') {
        const allTransNewValue = !state.allTrans

        state.allTrans = allTransNewValue

        for (let filter in state) {
          state[filter] = allTransNewValue
        }
      } else {
        state[filterName] = !state[filterName]

        const specialFilters = Object.entries(state)
          .filter((item) => item[0] !== 'allTrans')
          .filter((item) => item[1])

        if (specialFilters.length < 4) {
          state.allTrans = false
        } else {
          state.allTrans = true
        }
      }
    },
  },
})

export const { selectFilter } = filterSlice.actions
export default filterSlice.reducer
