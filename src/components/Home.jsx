import React, { useRef } from 'react'
import Modal from './Modal'
import Person from './person.jpg'
import {motion} from 'framer-motion'
 


const Home = () => {
  const modalRef  = useRef()
  return (
    <>
      <div className="main-box">  
            <motion.div
            initial={{
              opacity:0,
              transition:{
                duration:1
              },
              x:-50
            }}
            animate={{
              transition:{
                duration:1
              },
              opacity:1,
              x:0
            }}
             className='img-box'>
              <img src={Person} alt="" />
            </motion.div>
          <div className="txt-box"> 
              <h1 className='txt-name'>YAMIL <span className='part-color'>LAYICOV</span></h1>
              <div className="wrapper">
                <div className="static-txt">Software</div>
                <ul className='dynamic-txts'>
                  <li><span>Developer</span></li>
                </ul>
              </div>
              <div className='border'></div>
              <p className="txt-name">My name is <span className='in-Name'>Yamil Layicov</span>. I am Software developer, and I'm very passionate and dedicated to my work. With 2 years experience as a Software developer, I have acquired the skills and knowledge.</p>
              <Modal ref={modalRef}></Modal><button onClick={()=>modalRef.current.open()}   className='btn'>Learn More</button>
          </div>
        </div>
    </>
  )
}

export default Home