import React from 'react'

import style from './filters-tab-bar.module.scss'

const FiltersTabBar = () => {
  return (
    <ul className={style['filters-tabs']}>
      <li className={`${style['filters-tabs__item']} ${style['filters-tabs__item--selected']}`}>Самый дешевый</li>
      <li className={style['filters-tabs__item']}>Самый быстрый</li>
      <li className={style['filters-tabs__item']}>Oптимальный</li>
    </ul>
  )
}

export default FiltersTabBar
