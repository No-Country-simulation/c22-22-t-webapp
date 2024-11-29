import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import LoginForm from '../components/LoginForm/LoginForm';
import logo from '../assets/logo-footer.png';
import LoginImgSection from '../components/LoginImgSection/LoginImgSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Modal from '../components/Modal/Modal';
import RestorePasswdForm from '../components/RestorePasswdForm/RestorePasswdForm';


function Login() {
  const [user, setUser] = useState({
    dni: "",
    password: "",
  });
  const { login, checkDni, sendResetPassword } = useAuth();
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null); // useRef allow to create a reference for input element. Allow us manipulate DOM directly

  const handleChange = ({ target: { value, name } }) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e, action) => {
    e.preventDefault();
    setError("");
    if (action == "login") {
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
    } else if (action == "resetPasswd") {
      setSuccess(false);

      if (!email) {
        setError("Por favor ingrese un correo electrónico.");
        return;
      }

      try {
        // Send email
        console.log(email);
        await sendResetPassword(email);
        setSuccess(true);
      } catch (error) {
        setError("El correo electrónico no está registrado");
      }
    }
  };


  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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

  useEffect(() => {
    if (success) {
      setEmail(""); // Restablece el correo solo si hay éxito
    }
  }, [success]);

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
            handleOpenModal={handleOpenModal}
          />
        </div>
        {/* Image */}
        <LoginImgSection />
        <Modal
          show={showModal}
          onClose={handleCloseModal}
          title="Restablece tu contraseña"
        >
          <RestorePasswdForm
            handleSubmit={handleSubmit}
            success={success}
            error={error}
            email={email}
            setEmail={setEmail}
          />
        </Modal>
      </div>
    </div>
  )
}


export default Login