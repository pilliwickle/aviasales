import React from 'react'

import TicketList from '../ticket-list/ticket-list'
import HeaderLogo from '../header-logo/header-logo'
import FiltersTabBar from '../filters-tab-bar/filters-tab-bar'
import Filters from '../filters/filters'

import style from './app.module.scss'

const App = () => {
  return (
    <main className={style['app']}>
      <HeaderLogo />
      <section className={style['section']}>
        <Filters />
        <div>
          <FiltersTabBar />
          <TicketList />
          <button className={style['button']}>Показать ещё 5 билетов!</button>
        </div>
      </section>
    </main>
  )
}

export default App
