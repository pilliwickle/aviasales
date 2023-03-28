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
    all: filter.all && 4,
    without: filter.without && 0,
    one: filter.one && 1,
    two: filter.two && 2,
    three: filter.three && 3,
  }

  let ticketsToRender = []

  if (status === statuses.fulfilled) {
    tickets.map((item) => {
      if (filter.all) {
        ticketsToRender.push(item)
        return
      }

      const stopsTo = item.segments[0].stops.length
      const stopsBack = item.segments[1].stops.length

      if (
        (stopsTo === filters.without ||
          stopsTo === filters.one ||
          stopsTo === filters.two ||
          stopsTo === filters.three) &&
        (stopsBack === filters.without ||
          stopsBack === filters.one ||
          stopsBack === filters.two ||
          stopsBack === filters.three)
      ) {
        ticketsToRender.push(item)
        return
      }
    })
  }

  return ticketsToRender
}
