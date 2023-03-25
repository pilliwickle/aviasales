import React from 'react'

import Flight from './ticket-item-info'
import style from './ticket-item.module.scss'

function TicketItem(ticketData) {
  const { price, carrier, segments } = ticketData
  const [to, back] = segments
  const ticketLogo = `//pics.avs.io/99/36/${carrier}.png`
  return (
    <div className={style['ticket-item']}>
      <div className={style['ticket-item__header']}>
        <p className={style['ticket-item__price']}>{price}</p>
        <img src={ticketLogo} />
      </div>
      <ul className={style['ticket-item__info']}>
        <Flight info={to} />
        <Flight info={back} />
      </ul>
    </div>
  )
}

export default TicketItem
