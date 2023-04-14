import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filterItems } from '../../constants'
import { selectFilter } from '../../store/filterSlice'

import style from './filters.module.scss'

const Filters = () => {
  const filterState = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  const itemcheck = Object.keys(filterItems)
  const filterList = itemcheck.map((item) => {
    return (
      <li key={item} className={style.FilterItem} onClick={() => dispatch(selectFilter(filterItems[item]))}>
        <input className={style['filters__checkbox']} type="checkbox" checked={filterState[item]} readOnly />
        <label htmlFor={item} className={style.FilterLabel}>
          {filterItems[item]}
        </label>
      </li>
    )
  })

  return (
    <div className={style['filters']}>
      <p className={style['filters__title']}>Количество пересадок</p>
      <div>{filterList}</div>
    </div>
  )
}

export default Filters
