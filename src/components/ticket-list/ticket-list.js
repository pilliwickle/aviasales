import React from 'react'

import TicketItem from '../ticket-item/ticket-item'

import style from './ticket-list.module.scss'

const TicketList = () => {
  return (
    <ul className={style['ticket-list']}>
      <TicketItem />
      <TicketItem />
    </ul>
  )
}

export default TicketList
