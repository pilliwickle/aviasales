export const stopsView = (stopsArray) => {
  switch (stopsArray.length) {
    case 1:
      return '1 пересадка'
    case 2:
    case 3:
      return `${stopsArray.length} пересадки`
    default:
      return 'Без пересадок'
  }
}

export const durationView = (duration) => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours}ч ${minutes}м`
}
