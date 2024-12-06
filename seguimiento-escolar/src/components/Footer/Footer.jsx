import React from 'react'
import logo from '../../assets/logo-footer.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './footerStyles.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='logo-footer-container'>
        <img src={logo} alt="logo" />
      </div>
      <small>Copyright &copy; {new Date().getFullYear()} Equipo-c22-22-t-webapp. Todos los derechos reservados.</small>
      <div className='social-container'>
        <a href='https://www.linkedin.com/company/nocountrytalent/posts/?feedView=all' target='_blank'><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  )
}

export default Footer