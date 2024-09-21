import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const LayoutOne = () => {
  return (
      <div>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default LayoutOne
