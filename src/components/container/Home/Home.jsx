import React from 'react'
import portfolio from "../../../assets/portfolio.jpg"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <>
          <h3 className='name'>Alai<span>n</span> Christia<span>n</span></h3>
          <span className='job'>Photographer & Digital Media Creator</span>
          <span className='text'>Fotógrafo & Criador de Mídias Digitais. <br/>Me aventuro projetos independentes envolvendo Fotografia, Design e Social Media.</span>
        </>
        
        <motion.a
          href="#portfolio"
          whileHover={{ scale: 1.1, backgroundColor: "#E1094A" }}
          variants={moveVariants}
          animate="animation"
          ><p>Portfolio</p></motion.a>
          </div>
        </motion.div>
  )
}

export default Home