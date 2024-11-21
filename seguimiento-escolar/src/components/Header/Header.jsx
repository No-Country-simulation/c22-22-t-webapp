import React from 'react'
import Navbar from '../NavBar/Navbar'
import logo from '../../assets/logo-footer.png'
import './headerStyles.css'

function Header() {
  return (
    <div className='header-container'>
      <h1>Logo</h1>
      {/* <div className='logo-container'>
        <img src={logo} alt="logo" />
      </div> */}
      <Navbar />
    </div>
  )
}

export default Header