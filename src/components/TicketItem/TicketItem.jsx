import React from 'react'

import FlightView from './FlightView'
import style from './TicketItem.module.scss'

const TicketItem = (ticketData) => {
  const { price, carrier, segments } = ticketData
  const [to, back] = segments
  const ticketLogo = `//pics.avs.io/99/36/${carrier}.png`

  return (
    <div className={style['ticket-item']}>
      <div className={style['ticket-item__header']}>
        <p className={style['ticket-item__price']}>{`${new Intl.NumberFormat('ru-RU').format(price)} ₽`} </p>
        <img src={ticketLogo} />
      </div>
      <ul className={style['ticket-item__info']}>
        <FlightView info={to} />
        <FlightView info={back} />
      </ul>
    </div>
  )
}

export default TicketItem
