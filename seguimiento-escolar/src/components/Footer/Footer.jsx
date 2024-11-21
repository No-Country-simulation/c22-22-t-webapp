import React from 'react'
import './footerStyles.css'

function Footer() {
  return (
    <div className='footer-container'>
    <small>Copyright &copy; {new Date().getFullYear()} Equipo-c22-22-t-webapp. Todos los derechos reservados.</small>  
    </div>
  )
}

export default Footer