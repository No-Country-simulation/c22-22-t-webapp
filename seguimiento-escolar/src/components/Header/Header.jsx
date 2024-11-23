import React from 'react'
import logo from '../../assets/logo-footer.png'
import './headerStyles.css'
import NavBar from '../NavBar/NavBar'

function Header() {
  return (
    <div className='header-container'>
      {/* <h1>Logo</h1> */}
      {/* <div className='logo-container'>
        <img src={logo} alt="logo" />
      </div> */}
      <NavBar />
    </div>
  )
}

export default Header