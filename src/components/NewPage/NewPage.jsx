import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../container/Footer/Footer'
import "./NewPage.scss"

const NewPage = () => {
  return (
    <div>
      <Navbar />
      <div className="new-page-container">
        <h1>Nova Página</h1>
        <p>Conteúdo da nova página aqui</p>
      </div>
      <Footer />
    </div>
  )
}

export default NewPage