import React from "react";
import style from "./style.module.css";
import { AiFillLinkedin } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const[email,setEmail] = useState('')
  const[names,setNames] = useState('')
  const[emailDirty,setEmailDirty] = useState(false)
  const[namesDirty,setNamesDirty] = useState(false)
  const[emailError,setEmailError] = useState('Email is required!')
  const[namesError,setNamesError] = useState('Name is required!')
 
  const emailHandler = (e) =>{
    setEmail(e.target.value)
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(String(e.target.value).toLowerCase())){
      setEmailError('Invalid email')
      if(!e.target.value){
        setEmailError('Email is required!')
      }
    }else{
      setEmailError('')
    }
  }

  const namesHandler = (e) =>{
    setNames(e.target.value)
    if(e.target.value.length<3){
      setNamesError("at least 3 symbol!")
      if(!e.target.value){
        setNamesError("Name is required!")
      }
    }
    else{
      setNamesError('')
    }
  }

  const blurHandler = (e) =>{
    switch(e.target.name){
      case 'email':
          setEmailDirty(true)
          break
        case 'names':
          setNamesDirty(true)
          break
    }
  }

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
                    href="https://www.linkedin.com/in/yamil-lay%C4%B1cov-59aab5264/"
                    target="_blank"
                  >
                    LinkedIn/Yamil
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className={style.right_content}>
              <form   autocomplete = "off" className={style.inputs}>
                <div className={style.div_inputs}>
                    <div className={style.apple}>
                      <input onChange={e=>emailHandler(e)} value={email} onBlur={e=>blurHandler(e)} className={style.left_input} type="email" placeholder="Email" name="email"/>
                      <div>{(emailDirty && emailError) && <span  style={{color:'red'}}>{emailError}</span>}</div>
                    </div>
                    <div className={style.apple}>
                      <input onChange={e=>namesHandler(e)} value={names} onBlur={e=>blurHandler(e)} name="names" type="text" placeholder="Name" />
                      {(namesDirty && namesError) && <span style={{color:'red'}}>{namesError}</span>}
                    </div>
                </div>
                <div>
                <textarea
                  name="message"
                  id=""
                  cols="42"
                  rows="4"
                  placeholder="Message"
                ></textarea>
                </div>
                <button type="submit"  className={style.send_btn}>Send Message</button>
              </form>
          </div>
        </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
