import React from 'react'
import Home from './components/Home'
import Portfolio from '../src/components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar'
import Particles from './components/Particles'
import { Routes,Route} from 'react-router-dom'
import Resume from './components/Resume'


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