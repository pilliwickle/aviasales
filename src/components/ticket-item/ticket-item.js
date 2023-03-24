import React from 'react'

import s7logo from '../../images/S7 Logo.png'

import style from './ticket-item.module.scss'

const TicketItem = () => {
  return (
    <li className={style['ticket-item']}>
      <div className={style['ticket-item__header']}>
        <p className={style['ticket-item__price']}>13 000 P</p>
        <img src={s7logo} />
      </div>
      <ul className={style['ticket-item__info']}>
        <li className={style['ticket-item__info-item']}>
          <p>
            <span>SITY - SITY</span>
            <span>10:45 - 08:00</span>
          </p>
          <p>
            <span>В пути</span>
            <span>21ч 15м</span>
          </p>
          <p>
            <span>2 пересадки</span>
            <span>SITY, SITY</span>
          </p>
        </li>
        <li className={style['ticket-item__info-item']}>
          <p>
            <span>SITY - SITY</span>
            <span>11:20 - 00:50</span>
          </p>
          <p>
            <span>В пути</span>
            <span>13ч 30м</span>
          </p>
          <p>
            <span>1 пересадка</span>
            <span>SITY</span>
          </p>
        </li>
      </ul>
    </li>
  )
}

export default TicketItem
