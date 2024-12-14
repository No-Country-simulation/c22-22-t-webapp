import React, { useState } from 'react'
import logo from '../../assets/logo-footer.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Modal from '../Modal/Modal';
import './footerStyles.css'

function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className='footer-container'>
      <div className='logo-footer-container'>
        <img src={logo} alt="logo" />
      </div>
      <small>Copyright &copy; {new Date().getFullYear()}
        <button className='btn btn-team btn-link m-0 p-0 pe-1 ps-1' onClick={handleClick}><i className="bi bi-people-fill"></i> Equipo-c22-22-t-webapp. </button>
        Todos los derechos reservados.
      </small>
      <Modal show={showModal} onClose={handleClose} title="Información">
        <div>
          <p>
            <h4 className='text-center t-footer-color__custom pb-3 fw-bold'>EQUIPO-C22-22-T-WEBAPP</h4>
            <h3 className='t-footer-color__custom  fw-medium'> <i className="bi bi-code-slash" /> FRONT END DEVELOPERS</h3>
            <ul className='no-bullets'>
              <li>Juan Diego Elissalde Gudefin</li>
              <li>Leonardo Fuentes Claros</li>
            </ul>
            <h3 className='t-footer-color__custom fw-medium'> <i class="bi bi-pencil-square" /> UX/UI DESIGNERS</h3>
            <ul className='no-bullets'>
              <li>Ayelén Nayla Ferreyra</li>
              <li>Camila Berlincourt</li>
            </ul>
            <h3 className='t-footer-color__custom fw-medium'><i class="bi bi-check-circle" /> TESTERS QA</h3>
            <ul className='no-bullets'>
              <li>Kevin Rodallega</li>
              <li>María Gabriela Fermin</li>
            </ul>
          </p>
        </div>

      </Modal>
      <div className='social-container'>
        <a href='https://www.linkedin.com/company/nocountrytalent/posts/?feedView=all' target='_blank'><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  )
}

export default Footer