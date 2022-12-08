import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> 
        <nav className='navbar'>
          <NavLink to='/' className='ag' >Home</NavLink>
          <NavLink to='/resume' className='ag'>Resume</NavLink>
          <NavLink to='/portfolio' className='ag'>Portfolio</NavLink>
          <NavLink to='/contact' className='ag'>Contact</NavLink>
        </nav>
    </div>
  )
}

export default Navbar