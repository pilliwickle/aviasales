import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as createKey } from 'uuid'

import TicketItem from '../ticket-item/ticket-item'
import { NetworkAlert, SearchAlert, LoadingSpinner } from '../user-messages/user-messages'
import { fetchSearchID } from '../../store/searchIDSlice'
import { fetchTickets } from '../../store/ticketSlice'
import { statuses } from '../../constants'
import { formWithCurrentSort, formWithFilters } from '../../helpers/sort-list-funcs'

import style from './ticket-list.module.scss'

const TicketList = () => {
  const dispatch = useDispatch()
  const [ticketCount, setTicketCount] = useState(5)
  const [error, setError] = useState(null)

  const { error: searchIDError } = useSelector((state) => state.searchID)
  const { status, ticketData } = useSelector((state) => state.ticket)

  const filter = useSelector((state) => state.filter)
  const { currentSort } = useSelector((state) => state.sort)

  const onMoreTicketsButton = () => {
    setTicketCount(ticketCount + 5)
  }

  useEffect(() => {
    const prepareData = async () => {
      const searchRes = await dispatch(fetchSearchID())

      if (searchRes.payload) {
        dispatch(fetchTickets(searchRes.payload))
      }

      if (searchIDError) {
        setError(searchIDError)
      }
    }

    prepareData()
  }, [])

  switch (status) {
    case statuses.loading:
      return <LoadingSpinner />

    case statuses.rejected:
      return <NetworkAlert />

    default:
      break
  }

  if (error) {
    console.warn(error)
    return <NetworkAlert />
  }

  const tickets = formWithCurrentSort(currentSort, ticketData.slice())
  const ticketsToRender = formWithFilters(filter, tickets, status)

  const ticketsContent = () => {
    if (!ticketsToRender.length) return <SearchAlert />

    if (ticketsToRender.length > ticketCount) {
      ticketsToRender.length = ticketCount
    }

    return ticketsToRender.map((item) => (
      <li key={createKey()}>
        <TicketItem {...item} key={createKey()} />
      </li>
    ))
  }
  return (
    <ul className={style['ticket-list']}>
      {ticketsContent(tickets)}
      <button
        className={style['button']}
        style={{ display: ticketsToRender.length ? 'block' : 'none' }}
        onClick={onMoreTicketsButton}
      >
        Показать ещё 5 билетов!
      </button>
    </ul>
  )
}

export default TicketList
