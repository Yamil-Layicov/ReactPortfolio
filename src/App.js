import React from 'react'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar'
import Particles from './components/Particles'
import { Routes,Route} from 'react-router-dom'
import Resume from './pages/resume/Resume'
import Home from './pages/home/Home'


const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Particles id="tsparticles"/>
    </div>
  )
}

export default App