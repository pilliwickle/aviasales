import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filterItems } from '../../constants'
import { selectFilter } from '../../store/filterSlice'

import style from './filters.module.scss'

const Filters = () => {
  const filterState = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  const moves = Object.keys(filterItems)
  const filterList = moves.map((item) => {
    return (
      <li key={item} className={style.FilterItem} onClick={() => dispatch(selectFilter(filterItems[item]))}>
        <input className={style['filters__checkbox']} type="checkbox" checked={filterState[item]} readOnly />
        <label htmlFor={item} className={style.FilterLabel}>
          {filterItems[item]}
        </label>
      </li>
    )
  })
  // const Filters = () => {
  //   const filterState = useSelector((state) => state.filter)
  //   const dispatch = useDispatch()

  //   const filterList = filterItems.map(({ name, label }) => {
  //     return (
  //       <label key={name} htmlFor={name} className={style['filters__filter-item']}>
  //         <input
  //           name={name}
  //           type="checkbox"
  //           id={name}
  //           className={style['filters__checkbox']}
  //           checked={filterState[name]}
  //           onChange={() => dispatch(selectFilter(name))}
  //         />
  //         {label}
  //       </label>
  //     )
  //   })

  return (
    <div className={style['filters']}>
      <p className={style['filters__title']}>Количество пересадок</p>
      <div>{filterList}</div>
    </div>
  )
}

export default Filters
