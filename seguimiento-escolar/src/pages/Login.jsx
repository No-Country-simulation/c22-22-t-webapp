import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import LoginForm from '../components/LoginForm/LoginForm';
import logo from '../assets/logo-footer.png';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function Login() {
  const [user, setUser] = useState({
    dni: "",
    password: "",
  });
  const { login, verifyDni, sendResetPassword } = useAuth();
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (step === 1) {
      try {
        const response = await verifyDni(user.dni);
        if (response.length === 0) {
          setError("El Documento no se encuentra registrado.");
        } else if (response.includes("password")) {
          setStep(2);
        } else {
          setError("Método de inicio de sesión no soportado.");
        }
      } catch (error) {
        setError(error.message);
      }
    } else if (step === 2) {
      try {
        await login(`${user.dni}@gmail.com`, user.password);
        console.log("Usuario autenticado correctamente");
        navigate("/estudiante/home");
      } catch (error) {
        setError("Contraseña incorrecta. ");
      }
    }
  };



  const handleChange = ({ target: { value, name } }) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleClick = () => {
    navigate('/');
  }

  useEffect(() => {
    // Verifica si window.bootstrap está disponible
    if (window.bootstrap) {
      const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new window.bootstrap.Tooltip(tooltipTriggerEl);
      });
    } else {
      console.error('Bootstrap no está cargado correctamente.');
    }
  }, []);

  useEffect(() => {
    if (step === 2) {
      // Restablecer el password al pasar al paso 2
      setUser((prevState) => ({
        ...prevState,
        password: "",
      }));
    }
  }, [step]);

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center">
          {/* Logo */}
          <div className='w-50'>
            <img src={logo} alt="logo" className='w-100' />
          </div>
          {/* Title */}
          <h1>Inicio de Sesión</h1>
          <p>Ingresa tus datos</p>
          {/* Form */}
          <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} step={step} user={user} error={error}/>
        </div>
        {/* Image */}
        <div
          className="col-12 col-md-8 d-none d-md-flex align-items-center justify-content-center bg-primary p-0"
          onClick={handleClick}
        >
          <img
            src="https://images.unsplash.com/photo-1555453337-32dff9bb054d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="login-image"
            className="w-100"
            style={{
              height: "100vh",
              maxHeight: "100vh",
              objectFit: "cover",
              cursor: "pointer"
            }}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Acerca de nosotros"
          />
        </div>
      </div>
    </div>
  )
}

export default Login