import React from 'react'
import Contact from '../container/Contact/Contact'
import Footer from '../container/Footer/Footer'
import Home from '../container/Home/Home'
import Portfolio from '../container/Portfolio/Portfolio'
import Navbar from '../Navbar/Navbar'

const MainPage = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  )
}

export default MainPage