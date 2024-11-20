import React from 'react'
import Navbar from '../NavBar/Navbar'
import './headerStyles.css'

function Header() {
  return (
    <div className='header-container'>
      <div>
        Header
        <Navbar />
      </div>
    </div>
  )
}

export default Header