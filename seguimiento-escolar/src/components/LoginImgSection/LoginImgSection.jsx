import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
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
    <>
      <div className="hero-section col-12 col-md-8 d-none d-md-flex align-items-center justify-content-center p-0">
        <div className="overlay"></div>
        <div className="content text-center text-white">
          <div></div>
          <div>
            {/* <h1 class="display-4 fw-bold">Bienvenido a Conexión Académica</h1> */}
            <p className='lead fw-bold'>"Somos Conexión Académica, un equipo dedicado a revolucionar la forma en la que los estudiantes se conectan para potenciar el aprendizaje"</p>
            {/* <p class="lead">"Somos Conexión Académica, un equipo dedicado a revolucionar la forma en la que los estudiantes se conectan para potenciar el aprendizaje"</p> */}
          </div>
          <Link to="/" className="btn btn-light btn-sm mt-3 btn-about-us__custom">Ir al sitio &gt;</Link>
        </div>
      </div>
      {/* <div className="col-12 col-md-8 d-none d-md-flex align-items-center justify-content-center p-0" onClick={handleClick}>
        <img
          src="https://images.unsplash.com/photo-1555453337-32dff9bb054d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="login-image"
          className="img-login__custom w-100"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Acerca de nosotros" />
      </div> */}
    </>
  );
}

export default LoginImgSection