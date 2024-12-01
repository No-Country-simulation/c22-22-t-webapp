import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './loginImgSection.css';

function LoginImgSection() {
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
    </>
  );
}

export default LoginImgSection