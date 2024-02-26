import React from 'react'
import Home from './Components/Home/Home'
import Footer from './Components/Home/Footer'
import { Outlet } from 'react-router-dom'
import Header from './Components/Home/Header'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
