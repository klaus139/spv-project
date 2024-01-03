import React from "react"
//import Header from "../common/header/Header"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../home/Home"
//import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Layout from "../Layout/Layout";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/contact' element={<Contact/>} />
          </Route>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default Pages
