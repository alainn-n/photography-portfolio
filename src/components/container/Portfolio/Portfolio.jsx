import React from 'react';
import "./Portfolio.scss"
import { motion } from 'framer-motion';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import photo1 from "../../../assets/photo1.png";
import photo2 from "../../../assets/photo2.png";
import photo3 from "../../../assets/photo3.png";
import photo4 from "../../../assets/photo4.png";
import photo5 from "../../../assets/photo5.png";
import photo6 from "../../../assets/photo6.png";
import photo7 from "../../../assets/photo7.png";
import photo8 from "../../../assets/photo8.png";
import photo9 from "../../../assets/photo9.png";
import photo10 from "../../../assets/photo10.png";

import design1 from "../../../assets/design1.png";
import design2 from "../../../assets/design2.png";
import design3 from "../../../assets/design3.png";
import design4 from "../../../assets/design4.png";
import design5 from "../../../assets/design5.png";
import design6 from "../../../assets/design6.png";
import design7 from "../../../assets/design7.png";
import design8 from "../../../assets/design8.png";
import design9 from "../../../assets/design9.png";
import design10 from "../../../assets/design10.png";
import design11 from "../../../assets/design11.png";
import design12 from "../../../assets/design12.png";

import brand1 from "../../../assets/brand1.png";
import brand2 from "../../../assets/brand2.png";
import brand3 from "../../../assets/brand3.png";
import brand4 from "../../../assets/brand4.png";
import brand5 from "../../../assets/brand5.png";
import brand6 from "../../../assets/brand6.png";
import brand7 from "../../../assets/brand7.png";
import brand8 from "../../../assets/brand8.png";
import brand9 from "../../../assets/brand9.png";

const Portfolio = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="container" id="portfolio">
      
    {/* --------------# PHOTO #-------------- */}

      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="title"
      
      >
            <span>Portfolio</span>
            <h1>Fotografia</h1>
      </motion.div>
        <Carousel responsive={responsive} infinite={true} >
          <div>
            <img src={photo1} alt="" />
          </div>

          <div>
            <img src={photo2} alt="" />
          </div>

          <div>
            <img src={photo3} alt="" />
          </div>

          <div>
            <img src={photo4} alt="" />
          </div>

          <div>
            <img src={photo5} alt="" />
          </div>

          <div>
            <img src={photo6} alt="" />
          </div>

          <div>
            <img src={photo7} alt="" />
          </div>

          <div>
            <img src={photo8} alt="" />
          </div>

          <div>
            <img src={photo9} alt="" />
          </div>

          <div>
            <img src={photo10} alt="" />
          </div>
        </Carousel>
        <br/>
        <br/>

    {/* --------------# DESIGN #-------------- */}

        <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="title"
      
      >
            <span>Portfolio</span>
            <h1>Design</h1>
        </motion.div>
        <Carousel responsive={responsive} infinite={true} >
          <div>
            <img src={design1} alt="" />
          </div>
          <div>
            <img src={design2} alt="" />
          </div>
          <div>
            <img src={design3} alt="" />
          </div>
          <div>
            <img src={design4} alt="" />
          </div>
          <div>
            <img src={design5} alt="" />
          </div>
          <div>
            <img src={design6} alt="" />
          </div>
          <div>
            <img src={design7} alt="" />
          </div>
          <div>
            <img src={design8} alt="" />
          </div>
          <div>
            <img src={design9} alt="" />
          </div>
          <div>
            <img src={design10} alt="" />
          </div>
          <div>
            <img src={design11} alt="" />
          </div>
          <div>
            <img src={design12} alt="" />
          </div>
        </Carousel>
        <br/>
        <br/>

    {/* --------------# DESIGN #-------------- */}

        <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="title"
      
      >
            <span>Portfolio</span>
            <h1>Branding</h1>
        </motion.div>
        <Carousel responsive={responsive} infinite={true} >
          <div>
            <img src={brand1} alt="" />
          </div>
          <div>
            <img src={brand2} alt="" />
          </div>
          <div>
            <img src={brand3} alt="" />
          </div>
          <div>
            <img src={brand4} alt="" />
          </div>
          <div>
            <img src={brand5} alt="" />
          </div>
          <div>
            <img src={brand6} alt="" />
          </div>
          <div>
            <img src={brand7} alt="" />
          </div>
          <div>
            <img src={brand8} alt="" />
          </div>
          <div>
            <img src={brand9} alt="" />
          </div>
        </Carousel>

    </div>
  )
}

export default Portfolio