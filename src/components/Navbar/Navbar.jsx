import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navLinks } from '../../Data';

import { BrowserRouter as Router } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaTiktok } from 'react-icons/fa';

import logoicon from '../../assets/logoiconcrop.png'

const Navbar = () => {
    
    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false)
    
    const menuVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration: 0.5,
            }
        }
    }
    const navLinkVariants = {
        hidden: {
            display: "none",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            transition: {
                delay: 0.7
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    },[])
  return (
      <motion.div
          initial={{ y: -25 }}
          animate={{ y: -5 }}
          transition={{duration: 0.5}}
          className={scroll ? "header active" : "header"}>
          <div className="Nav_container">
              <div className="logo">
                <img src={logoicon} alt="" className='logoicon'/>
              </div>
              <ul
                      className="nav_links"
                   >
                  {navLinks.map((navlink,index) => {
                      return <li key={index}><a href={`#${navlink}`}>{navlink}</a></li>
                  })}
              </ul>
              <div className="social_icons" >
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
              <div className="menu" >
                  <HiMenuAlt4 onClick={() => {setToggle(true)}}/>
              </div>
              <motion.div className="closeMenu"
                          variants={menuVariants}
                          initial="hidden" animate= {toggle ?"visible": "hidden"}
                      >
              </motion.div>
              
          <motion.div
                  variants={navLinkVariants}
                  animate={toggle ? "visible" : "hidden"}
                  className="menuX"
              >
                  <HiX onClick={() => setToggle(false)}/>
                  {navLinks.map((navlink,index) => {
                      return <li
                          key={index}><a
                         
                          href={`#${navlink}`} onClick={() => setToggle(false)}>{navlink}</a></li>
                  })}
              </motion.div>
              
          </div>
    </motion.div>
  )
}

export default Navbar