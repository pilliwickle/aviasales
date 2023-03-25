import { sortWithPrice, sortWithDuration, sortWithOptimal } from '../helpers/sort-funcs'
import { sorts, statuses } from '../constants'

export const formWithCurrentSort = (currentSort, tickets) => {
  switch (currentSort) {
    case sorts.cheapest:
      return (tickets = sortWithPrice(tickets))

    case sorts.fastest:
      return (tickets = sortWithDuration(tickets))

    case sorts.optimal:
      return (tickets = sortWithOptimal(tickets))
    default:
      return
  }
}

export const formWithFilters = (filter, tickets, status) => {
  const filters = {
    allTrans: filter.allTrans && 4,
    noneTrans: filter.noneTrans && 0,
    oneTrans: filter.oneTrans && 1,
    twoTrans: filter.twoTrans && 2,
    threeTrans: filter.threeTrans && 3,
  }

  let ticketsToRender = []

  if (status === statuses.fulfilled) {
    tickets.map((item) => {
      if (filter.allTrans) {
        ticketsToRender.push(item)
        return
      }

      const stopsTo = item.segments[0].stops.length
      const stopsBack = item.segments[1].stops.length

      if (
        (stopsTo === filters.noneTrans ||
          stopsTo === filters.oneTrans ||
          stopsTo === filters.twoTrans ||
          stopsTo === filters.threeTrans) &&
        (stopsBack === filters.noneTrans ||
          stopsBack === filters.oneTrans ||
          stopsBack === filters.twoTrans ||
          stopsBack === filters.threeTrans)
      ) {
        ticketsToRender.push(item)
        return
      }
    })
  }

  return ticketsToRender
}
