import React from 'react'
import logo from '../../assets/logo-footer.png'
import './headerStyles.css'
import NavBar from '../NavBar/NavBar'

function Header() {
  return (
    <>
      <div className='invisible-nav-container'></div>
      <div className='header-container'>
        <NavBar />
      </div>
    </>
  )
}

export default Header