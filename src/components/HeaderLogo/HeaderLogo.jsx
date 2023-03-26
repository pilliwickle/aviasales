import React from 'react'

import logo from '../../images/Logo.svg'

import style from './HeaderLogo.module.scss'

const HeaderLogo = () => {
  return (
    <header className={style['logo-block']}>
      <img src={logo} className={style['logo']} alt="Aviasales logo" />
    </header>
  )
}

export default HeaderLogo
