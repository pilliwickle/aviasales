export const sorts = {
  cheapest: 'cheapest',
  fastest: 'fastest',
  optimal: 'optimal',
}

export const statuses = {
  loading: 'loading',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
}

export const sortItems = [
  {
    label: 'Самый дешёвый',
    name: 'cheapest',
  },
  {
    label: 'Самый быстрый',
    name: 'fastest',
  },
  {
    label: 'Oптимальный',
    name: 'optimal',
  },
]

export const filterItems = [
  {
    name: 'allTrans',
    label: 'Все',
  },
  {
    name: 'noneTrans',
    label: 'Без пересадок',
  },
  {
    name: 'oneTrans',
    label: '1 пересадка',
  },
  {
    name: 'twoTrans',
    label: '2 пересадки',
  },
  {
    name: 'threeTrans',
    label: '3 пересадки',
  },
]
