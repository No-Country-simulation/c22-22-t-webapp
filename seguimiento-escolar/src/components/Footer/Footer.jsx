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
        <a href="https://wa.me/59178327058?text=Hola%2C%20esto%20es%20una%20prueba" target='_blank'><i className="bi bi-whatsapp"></i></a>
        <a href='https://www.facebook.com/leomessi' target='_blank'><i className="bi bi-facebook"></i></a>
        <a href='https://x.com/leomessisite?lang=en' target='_blank'><i class="bi bi-twitter-x"></i></a>
        <a href='https://www.linkedin.com/company/nocountrytalent/posts/?feedView=all' target='_blank'><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  )
}

export default Footer