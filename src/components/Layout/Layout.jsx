import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
//import Nav from '../Nav'

const Layout = () => {
  return (
    <>
    <Header />
    {/* <Nav /> */}
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout

