import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "./data";
import { motion } from "framer-motion";

const Portfolio = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          transition: {
            duration: 1,
          },
          x: -100,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
          x: 0,
        }}
      >
        <h1 className="port">
          Bacola <span>Ecommerce</span>
        </h1>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          transition: {
            duration: 1,
          },
          y: -50,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
          y: 0,
        }}
        className="portfolio"
      >
        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <div className="card" key={item.id}>
              <div className="card_top">
                <img src={item.linkImg} />
              </div>
              <div className="demo_code">
                  <a href="https://mellow-quokka-00eca5.netlify.app/" target="_blank"><button>Demo</button></a>
                  <a href="https://github.com/Yamil-Layicov/Bacola" target='_blank'><button>Code</button></a> 
                </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </>
  );
};

export default Portfolio;
