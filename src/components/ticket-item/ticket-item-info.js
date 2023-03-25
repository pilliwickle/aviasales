import React from 'react'
import { format, addMinutes } from 'date-fns'

import { stopsView, durationView } from '../../helpers/view-helpers'

import style from './ticket-item.module.scss'

export const FlightView = ({ info }) => {
  const { origin, destination, date, duration, stops } = info
  return (
    <li className={style['ticket-item__info-item']}>
      <p>
        <span>
          {origin} - {destination}
        </span>
        <span>
          {format(new Date(date), "HH':'mm")} - {format(addMinutes(new Date(date), duration), "HH':'mm")}
        </span>
      </p>
      <p>
        <span>В пути</span>
        <span>{durationView(duration)}</span>
      </p>
      <p>
        <span>{stopsView(stops)}</span>
        <span>{stops.join(', ')}</span>
      </p>
    </li>
  )
}

export default FlightView
