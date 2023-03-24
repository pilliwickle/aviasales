import React from 'react'

import style from './filters.module.scss'

const Filters = () => {
  return (
    <div className={style['filters']}>
      <p className={style['filters__title']}>Количество пересадок</p>
      <div>
        <p className={style['filters__filter-item']}>
          <input type="checkbox" className={style['filters__checkbox']} />
          Все
        </p>
        <p className={style['filters__filter-item']}>
          <input type="checkbox" className={style['filters__checkbox']} /> Без пересадок
        </p>
        <p className={style['filters__filter-item']}>
          <input type="checkbox" className={style['filters__checkbox']} /> 1 пересадка
        </p>
        <p className={style['filters__filter-item']}>
          <input type="checkbox" className={style['filters__checkbox']} /> 2 пересадки
        </p>
        <p className={style['filters__filter-item']}>
          <input type="checkbox" className={style['filters__checkbox']} /> 3 пересадки
        </p>
      </div>
    </div>
  )
}

export default Filters
