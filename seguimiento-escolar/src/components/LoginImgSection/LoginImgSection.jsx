import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './loginImgSection.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginImgSection() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }

  // Tooltip
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);
  return (
    <div className="col-12 col-md-8 d-none d-md-flex align-items-center justify-content-center p-0" onClick={handleClick}>
      <img
        src="https://images.unsplash.com/photo-1555453337-32dff9bb054d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="login-image"
        className="img-login__custom w-100"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title="Acerca de nosotros" />
    </div>
  );
}

export default LoginImgSection