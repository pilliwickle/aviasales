import React from 'react'

import logo from '../../images/Logo.svg'

import style from './header-logo.module.scss'

const HeaderLogo = () => {
  return (
    <div className={style['logo-block']}>
      <img src={logo} className={style['logo']} alt="Aviasales logo" />
    </div>
  )
}

export default HeaderLogo
