import React from 'react'

import spinner from '../../images/spinner.svg'

import style from './UserMessages.module.scss'

export const ServerErrorAlert = () => {
  return (
    <div className={style['user-message']}>
      <h1>Что-то явно пошло не так...</h1>
      <p>Проблема не в вас, просто серверу немного грустно. Попробуйте снова через какое-то время!</p>
    </div>
  )
}

export const SearchAlert = () => {
  return (
    <div className={style['user-message']}>
      <h1>Неверный запрос...</h1>
      <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
    </div>
  )
}

export const LoadingSpinner = () => {
  return (
    <div className={style['user-message']}>
      <img src={spinner} />
    </div>
  )
}
