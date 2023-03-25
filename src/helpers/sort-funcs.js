export const sortWithPrice = (array) => {
  return array.sort((prevItem, nextItem) => prevItem.price - nextItem.price)
}

export const sortWithDuration = (array) => {
  return array.sort((prevItem, nextItem) => {
    const prevItemDuration = prevItem.segments[0].duration + prevItem.segments[1].duration
    const nextItemDuration = nextItem.segments[0].duration + nextItem.segments[1].duration

    return prevItemDuration - nextItemDuration
  })
}

export const sortWithOptimal = (array) => {
  const sortedWithPrice = sortWithPrice(array)
  const sortedWithDuration = sortWithDuration(array)

  const arrayWithOptimalValue = sortedWithPrice.map((item, index) => {
    const optimalValue = (sortedWithDuration.indexOf(item) + index) / 2
    return [item, optimalValue]
  })

  const sortedOptimal = arrayWithOptimalValue.sort((prevItem, nextItem) => {
    return prevItem[1] - nextItem[1]
  })

  return sortedOptimal.map((item) => item[0])
}
