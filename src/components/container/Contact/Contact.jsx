import React from 'react';
import "./Contact.scss";
import { motion } from 'framer-motion';

import { BrowserRouter as Router } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaTiktok } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="container" id="contato">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contato</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Envie uma mensagem!</h3>
          <p className='contact_text'>
          Tem algum projeto em mente e gostaria que eu participasse? <br/> Entre em contato e vamos criar juntos! <br/><br/> contato.alain@gmail.com <br/><br/> 41 9 8896-0127</p>

          <div className="social_icons">
            <Router>
              <div>
                <a href="https://wa.me/5541988960127" target="_blank" rel="noreferrer">
                  <BsWhatsapp />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/alainn_n/" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </div>
              <div>
                <a href="https://www.tiktok.com/@alainn_n" target="_blank" rel="noreferrer">
                  <FaTiktok />
                </a>
              </div>
              <div>
                <a href="https://www.threads.net/@alainn_n" target="_blank" rel="noreferrer">
                  <FaThreads />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/alainn__n" target="_blank" rel="noreferrer">
                  <FaXTwitter />
                </a>
              </div>

          </Router>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact