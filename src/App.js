import React from 'react'
import "./App.css"
import Contact from './components/container/Contact/Contact'
import Footer from './components/container/Footer/Footer'
import Home from './components/container/Home/Home'
import Portfolio from './components/container/Portfolio/Portfolio'
import Navbar from './components/Navbar/Navbar'

const App = () => {
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

export default App
