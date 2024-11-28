import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import LoginForm from '../components/LoginForm/LoginForm';
import logo from '../assets/logo-footer.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LoginImgSection from '../components/LoginImgSection/LoginImgSection';


function Login() {
  const [user, setUser] = useState({
    dni: "",
    password: "",
  });
  const { login, checkDni } = useAuth();
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const inputRef = useRef(null); // useRef allow to create a reference for input element. Allow us manipulate DOM directly

  const handleChange = ({ target: { value, name } }) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (step === 1) {
      try {
        const response = await checkDni(user.dni);
        if (response.length === 0) {
          setError("El Documento no se encuentra registrado.");
        } else if (response.includes("password")) {
          setStep(2);
        }
      } catch (error) {
        setError(error.message);
      }
    } else if (step === 2) {
      try {
        if (user.password !== "") {
          await login(user.dni, user.password);
          navigate("/estudiante/home");
        } else {
          setError("Por favor, ingresa tu contraseña")
        }
      } catch (error) {
        setError(`${error.message}`);
      }
    }
  };


  useEffect(() => {
    if (step === 2) {
      // Restore password when user moves step 2
      setUser((prevState) => ({
        ...prevState,
        password: "",
      }));
      inputRef.current.focus(); // Manual focus for passwd input, because we are using the same form, it doesn't mount again
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
          <LoginForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            step={step} 
            user={user}
            error={error}
            inputRef={inputRef}
          />
        </div>
        {/* Image */}
        <LoginImgSection />
      </div>
    </div>
  )
}


export default Login