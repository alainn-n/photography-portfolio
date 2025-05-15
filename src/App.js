import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import NewPage from './components/NewPage/NewPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/nova-pagina" element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App