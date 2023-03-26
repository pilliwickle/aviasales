import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectSort } from '../../store/sortSlice'
import { sortItems } from '../../constants'

import style from './FiltersTabBar.module.scss'

const FiltersTabBar = () => {
  const dispatch = useDispatch()
  const { currentSort } = useSelector((state) => state.sort)

  const sortTabs = sortItems.map((item) => {
    return (
      <li
        key={item.name}
        className={`${style['filters-tabs__item']} ${
          currentSort === item.name ? style['filters-tabs__item--selected'] : ''
        }`}
        onClick={() => dispatch(selectSort(item.name))}
      >
        {item.label}
      </li>
    )
  })

  return <ul className={style['filters-tabs']}>{sortTabs}</ul>
}

export default FiltersTabBar
