import React from "react";
import style from "./style.module.css";
import { AiFillLinkedin } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          transition: {
            duration: 0.6,
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
        className={style.apple}>
          <h1>Contact <span>Me</span></h1>
        <div className={style.main_container}>
        <div className={style.main_content}>
          <div className={style.left_content}>
            <ul>
              <li className={style.cotactAd}>
                <span className={style.icon}>
                  <MdOutlinePlace />
                </span>
                <span className={style.text}>Ave.Khirdalan.Baku.AZE</span>
              </li>
              <li className={style.cotactAd}>
                <span className={style.icon}>
                  <FaMobileAlt />
                </span>
                <span className={style.text}>+994554273037</span>
              </li>
              <li className={style.cotactAd}>
                <span className={style.icon}>
                  <AiOutlineMail />
                </span>
                <span className={style.text}>yamilbl@code.edu.az</span>
              </li>
              <li className={style.cotactAd}>
                <span className={style.icon}>
                  <AiFillLinkedin />
                </span>
                <span className={style.text}>
                  <a
                    href="https://www.linkedin.com/in/yamil-layicov-090945241/"
                    target="_blank"
                  >
                    LinkedIn/Yamil
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className={style.right_content}>
            <div className={style.inputs}>
              <input
                className={style.left_input}
                type="text"
                placeholder="Name"
              />
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols="46"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>
            <button className={style.send_btn}>Send Message</button>
          </div>
        </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
