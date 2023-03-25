import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectFilter } from '../../store/filterSlice'

import style from './filters.module.scss'

const Filters = () => {
  const filterState = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const onSelectFilter = (e) => {
    dispatch(selectFilter(e.target.name))
  }
  return (
    <div className={style['filters']}>
      <p className={style['filters__title']}>Количество пересадок</p>
      <div>
        <label htmlFor="allTrans" className={style['filters__filter-item']}>
          <input
            name="allTrans"
            type="checkbox"
            id="allTrans"
            className={style['filters__checkbox']}
            checked={filterState.allTrans}
            onChange={onSelectFilter}
          />
          Все
        </label>

        <label htmlFor="noneTrans" className={style['filters__filter-item']}>
          <input
            name="noneTrans"
            type="checkbox"
            id="noneTrans"
            className={style['filters__checkbox']}
            checked={filterState.noneTrans}
            onChange={onSelectFilter}
          />
          Без пересадок
        </label>

        <label htmlFor="oneTrans" className={style['filters__filter-item']}>
          <input
            name="oneTrans"
            type="checkbox"
            id="oneTrans"
            className={style['filters__checkbox']}
            checked={filterState.oneTrans}
            onChange={onSelectFilter}
          />
          1 пересадка
        </label>

        <label htmlFor="twoTrans" className={style['filters__filter-item']}>
          <input
            name="twoTrans"
            type="checkbox"
            id="twoTrans"
            className={style['filters__checkbox']}
            checked={filterState.twoTrans}
            onChange={onSelectFilter}
          />
          2 пересадки
        </label>

        <label htmlFor="threeTrans" className={style['filters__filter-item']}>
          <input
            name="threeTrans"
            type="checkbox"
            id="threeTrans"
            className={style['filters__checkbox']}
            checked={filterState.threeTrans}
            onChange={onSelectFilter}
          />
          3 пересадки
        </label>
      </div>
    </div>
  )
}

export default Filters
