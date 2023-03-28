import { createSlice } from '@reduxjs/toolkit'

import { filterItems } from '../constants'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    all: false,
    without: true,
    one: false,
    two: false,
    three: false,
  },
  reducers: {
    selectFilter: (state, action) => {
      switch (action.payload) {
        case filterItems.all:
          if (state.all) {
            for (let key in state) {
              state[key] = false
            }
          } else {
            for (let key in state) {
              state[key] = true
            }
          }
          break
        case filterItems.without:
          state.without = !state.without
          break
        case filterItems.one:
          state.one = !state.one
          break
        case filterItems.two:
          state.two = !state.two
          break
        case filterItems.three:
          state.three = !state.three
          break
        default:
          break
      }
      let allStatus
      for (let key in state) {
        if (key !== 'all' && !state[key]) {
          allStatus = true
        }
      }
      state.all = allStatus ? false : true
    },
  },
})
//     const filterName = action.payload

//     if (filterName === 'allTrans') {
//       const allTransNewValue = !state.allTrans

//       state.allTrans = allTransNewValue

//       for (let filter in state) {
//         state[filter] = allTransNewValue
//       }
//     } else {
//       state[filterName] = !state[filterName]

//       const specialFilters = Object.entries(state)
//         .filter((item) => item[0] !== 'allTrans')
//         .filter((item) => item[1])

//       if (specialFilters.length < 4) {
//         state.allTrans = false
//       } else {
//         state.allTrans = true
//       }
//     }
//   },
// },
//})

export const { selectFilter } = filterSlice.actions
export default filterSlice.reducer
