import React from 'react'

import spinner from '../../images/spinner.svg'

import style from './user-messages.module.scss'

export const NetworkAlert = () => {
  return (
    <div className={style['user-message']}>
      <h1>Что-то явно пошло не так...</h1>
      <p>. Попробуйте снова через какое-то время!</p>
    </div>
  )
}

export const SearchAlert = () => {
  return (
    <div className={style['user-message']}>
      <h1>Неверный запрос...</h1>
      <p>Билетов не найдено. Попробуйте изменить его!</p>
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
