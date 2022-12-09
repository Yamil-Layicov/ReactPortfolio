import { useState,forwardRef,useImperativeHandle } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import {BsFillPersonFill} from 'react-icons/bs'
import {RiCalendarEventFill} from 'react-icons/ri'
import {MdOutlinePlace} from 'react-icons/md'
import {FaMobileAlt} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillCaretRightFill} from 'react-icons/bs'
import CV from './CV/Yamil.CV.pdf'

const Modal = forwardRef((props,ref) => {

  const[open,setOpen] = useState(false)

  useImperativeHandle(ref,()=>{
    return{
       open: () =>setOpen(true),
       close: () =>setOpen(false)
    }
  })
return (
  <>
      <AnimatePresence>
          {open && (
              <motion.div 
              className='modal-backdrop'>
                <motion.div
                initial={{
                  transition:{
                      duration:0.6,
                  },
                  y:-60
                }}
                animate={{
                  transition:{
                      duration:0.3,
                  },  
                  y:0
                }}
                exit={{
                    opacity:0,
                    transition:{
                      duration:0.3
                    },
                    y:100
                }}
                  className="modal-content-wrapper">

                  <motion.div  className="modal-content">{props.children}
                   <span onClick={()=>setOpen(false)}>X</span> 
                  </motion.div>
                      <div className="left-content">
                          <div className="left-header">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtR-0wBOpPATGXk3-MkO5-WG1seExny0sIYmDejDsz7I7mJGrOz3T1-w76fn4IWYfiTS8&usqp=CAU" alt="" />
                              <h3 className='header-name'>YAMIL <span className='lastName'>LAYICOV</span></h3>
                              <h4>Software Developer</h4>
                          </div>
                          <div className="about-adress">
                            <ul>
                              <li><span className='icon'><BsFillPersonFill/></span><span className='adress-span'>Yamil Layicov</span></li>
                              <li><span className='icon'><RiCalendarEventFill/></span><span className='adress-span'>10.01.1994</span></li>
                              <li><span className='icon'><MdOutlinePlace/></span><span className='adress-span'>Ave.Khirdalan.Baku,AZE</span></li>
                              <li><span className='icon'><FaMobileAlt/></span><span className='adress-span'>+994554273037</span></li>
                              <li><span className='icon'><AiOutlineMail/></span><span className='adress-span'>yamilbl@code.edu.az</span></li>
                            </ul>
                          </div>
                          <a download='' href={CV}><button className='btn-cv'>Download<span>CV</span></button></a>
                      </div>
                      <div className="right-content">
                        <h3>About <span className='me'>Me</span></h3>
                        <div className='right-border'></div>
                        <p>My name is Yamil Layicov. I am Software developer, and I'm very passionate and dedicated to my work. With 2 years experience as a professional a Software developer, I have acquired the skills and knowledge.</p>
                        <h3 className='quality'>Quality <span className='me'>Services</span></h3>
                        <div className='right-border'></div>
                        <ul>
                          <li><span className='icon'><BsFillCaretRightFill/></span><span className='text'>Responsive Design</span></li>
                          <li><span className='icon'><BsFillCaretRightFill/></span><span className='text'>Web Development</span></li>
                          <li><span className='icon'><BsFillCaretRightFill/></span><span className='text'>Mobile Apps</span></li>
                          <li><span className='icon'><BsFillCaretRightFill/></span><span className='text'>Software</span></li>
                        </ul>
                      </div>
                      <div className='vertical-border'></div>
                </motion.div> 
              </motion.div>
          )}
      </AnimatePresence>
  </> 
)
})

export default Modal