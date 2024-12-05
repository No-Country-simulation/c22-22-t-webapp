import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './backButtonStyles.css'

function BackButton({ path }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  }
  return (
    <button
      className='btn btn-outline-dark btn_custom mb-5'
      onClick={() => handleClick()}
    >
      <div className='d-flex gap-1'>
        <i className="bi bi-chevron-left" />
        <span>Atrás</span>
      </div>
    </button>
  )
}

export default BackButton