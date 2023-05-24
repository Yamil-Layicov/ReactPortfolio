import React from 'react' 
import { useState,useEffect} from 'react'
import {HiAcademicCap} from 'react-icons/hi'
import {FaBriefcase} from 'react-icons/fa'
import {FaCalendarDay} from 'react-icons/fa'
import {motion} from 'framer-motion'


const Resume = () => {

  const [htmlFilled, htmlsetFilled] = useState(0);
  const [cssFilled, csssetFilled] = useState(0);
  const [jsFilled, jssetFilled] = useState(0);
  const [reactFilled, reactsetFilled] = useState(0);
  const [csharpFilled, csharpsetFilled] = useState(0);

  const[toggleState,settoggleState] = useState(1);

  const toggleTab = (index) =>{
    settoggleState(index)
  }

  useEffect(() => {
    if (htmlFilled < 90) {
      setTimeout(() => htmlsetFilled(html => html += 5), 100)
    } 
    if (cssFilled < 70) { 
      setTimeout(() => csssetFilled(css => css += 5), 100)
    } 
    if (jsFilled < 75) {
      setTimeout(() => jssetFilled(css => css += 5), 100)
    } 
    if (reactFilled < 60) {
      setTimeout(() => reactsetFilled(css => css += 5), 100)
    } 
    if (csharpFilled < 85) {
      setTimeout(() => csharpsetFilled(css => css += 5), 60)
    } 
  }, [htmlFilled]);

  
  return (
    <div className='root'>
      <div className="container">
        <h3 className='little-text'>Skills</h3>

        <div className="skill-box">
          <span className="title">Html</span>
          <div className="skill-bar">
            <span className="skill-per html">
              <span className="tooltip">{htmlFilled}%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Css</span>
          <div className="skill-bar">
            <span className="skill-per css">
              <span className="tooltip">{cssFilled}%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">JavaScript</span>
          <div className="skill-bar">
            <span className="skill-per javascript">
              <span className="tooltip">{jsFilled}%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">React</span>
          <div className="skill-bar">
            <span className="skill-per react">
              <span className="tooltip">{reactFilled}%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">C#</span>
          <div className="skill-bar">
            <span className="skill-per csharp">
              <span className="tooltip">{csharpFilled}%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">ASP.NET MVC</span>
          <div className="skill-bar">
            <span className="skill-per asp">
              <span className="tooltip">{jsFilled}%</span>
            </span>
          </div>
        </div>
      </div>

      
      <motion.div
       initial={{
        transition:{
          duration:0.9
        },
        x:100,
        opacity:0
       }}
       animate={{
        transition:{
            duration:0.9
        },  
        x:0,
        opacity:1
      }}
       className="container">
          

          <div className="qualification section">
            <div className="qualif-container">
              <div className="qualif_sections">
                  <div className={toggleState === 1 ? 'qualif_content qualif_content_active' : 'qualif_content'}>
                    <div className="qualif_data">
                      <div>
                          <h3 className='qualif_title'>Credit and Finance</h3>
                          <p className="qualif_subtitle">Ukrainian Institute</p>
                          <p className="qualif_calender">
                            <span className='resume-icon'><FaCalendarDay/></span><span className="year">2012 - 2016</span>
                          </p>
                      </div>
                      <div>
                        <span className='qualif_rounder'></span>
                        <div className="qualif_line"></div>
                      </div>
                    </div>
                    <div className="qualif_data">
                      <div></div>
                      <div>
                        <span className='qualif_rounder'></span>
                        <span className="qualif_line"></span>
                      </div>
                      <div>
                          <h3 className='qualif_title'>Master Degree</h3>
                          <span className="qualif_subtitle">Azerbaijan Technical University</span>
                          <div className="qualif_calender">
                          <span className='resume-icon'><FaCalendarDay/></span><span className="year">2018 - 2020</span>
                          </div>
                      </div>
                    </div>
                    <div className="qualif_data">
                      <div>
                          <h3 className='qualif_title'>Software Development</h3>
                          <p className="qualif_subtitle">Code Academy</p>
                          <p className="qualif_calender">
                          <span className='resume-icon'><FaCalendarDay/></span><span className="year">2021 - 2022</span>
                          </p>
                      </div>
                      <div>
                        <span className='qualif_rounder'></span>
                        <div className="qualif_line"></div>
                      </div>
                    </div>
                  </div>
                  <div className={toggleState === 2 ? 'qualif_content qualif_content_active' : 'qualif_content'}>
                    <div className="qualif_data">
                      <div>
                          <h3 className='qualif_title'>Web Developer</h3>
                          <span className="qualif_subtitle">Code Acedamy</span><br />
                          <span className="qualif_calender">
                          <span className='resume-icon'><FaCalendarDay/></span><span className='year'>2021 - 2022</span>
                          </span>
                      </div>
                      <div>
                        <span className='qualif_rounder'></span>
                        <div className="qualif_line"></div>
                      </div>
                    </div>
                    <div className="qualif_data">
                      <div></div>

                      <div>
                        <span className='qualif_rounder'></span>
                        <span className="qualif_line"></span>
                      </div>

                      <div>
                          <h3 className='qualif_title'>Web Developer</h3>
                          <span className="qualif_subtitle">Code Acedamy</span>
                          <div className="qualif_calender">
                          <span className='resume-icon'><FaCalendarDay/></span><span className='year'>2021 - 2022</span>
                          </div>
                      </div>
                    </div>
                    <div className="qualif_data">
                      <div>
                          <h3 className='qualif_title'>Web Developer</h3>
                          <span className="qualif_subtitle">Code Acedamy</span><br />
                          <span className="qualif_calender">
                          <span className='resume-icon'><FaCalendarDay/></span><span className='year'>2021 - 2022</span>
                          </span>
                      </div>
                      <div>
                        <span className='qualif_rounder'></span>
                        <div className="qualif_line"></div>
                      </div>
                    </div>
                    
                  </div>
              </div>
              
            </div>
          </div>
          
      </motion.div>

      <div className="side">
          <h2 className='quaf-header-text'>Qualification</h2>
          <div className="qualif-tabs">

                  <div className={toggleState === 1 ? 'quaf-button quaf-active' : 'quaf-button'} onClick={()=>toggleTab(1)}
                  >
                      <span  className='qualif-icon cap'><HiAcademicCap/></span><span className='qualif-icon-text'>Education</span>
                  </div>
                  <div className={toggleState === 2 ? 'quaf-button quaf-active' : 'quaf-button'}
                  onClick={()=>toggleTab(2)}
                  >
                    <span className='qualif-icon'><FaBriefcase/></span><span className='qualif-icon-text'>Experience</span>
                  </div>

          </div>
      </div>
      
    </div>
  )
}

export default Resume