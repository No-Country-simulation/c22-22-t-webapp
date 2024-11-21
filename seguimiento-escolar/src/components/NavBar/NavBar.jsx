import React from 'react'
import './NavBarStyles.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar-container'>
      <Link to='/'>
        Mi escritorio
      </Link>
      <Link to='/home'>
        Materias
      </Link>
    </div>
  )
}

export default Navbar