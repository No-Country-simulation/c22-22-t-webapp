import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [loginError, setLoginError] = useState("");
  const [resetPasswdError, setResetPasswdError] = useState("");
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
    if (action == "login") {
      setLoginError("");
      if (step === 1) {
        try {
          const response = await checkDni(user.dni);
          if (response.length === 0) {
            setLoginError("El Documento no se encuentra registrado.");
          } else if (response.includes("password")) {
            setStep(2);
          }
        } catch (error) {
          setLoginError(error.message);
        }
      } else if (step === 2) {
        try {
          if (user.password !== "") {
            await login(user.dni, user.password);
            navigate("/estudiante/home");
          } else {
            setLoginError("Por favor, ingresa tu contraseña")
          }
        } catch (error) {
          setLoginError(`${error.message}`);
        }
      }
    } else if (action == "resetPasswd") {
      setResetPasswdError("");
      setSuccess(false);

      if (!email) {
        setResetPasswdError("Por favor ingrese un correo electrónico.");
        return;
      }

      try {
        // Send email
        console.log(email);
        await sendResetPassword(email);
        setSuccess(true);
      } catch (error) {
        setResetPasswdError("El correo electrónico no está registrado");
      }
    }
  };


  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setEmail("");
    setResetPasswdError("");
    setSuccess(false);
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
          <Link to={'/'}>
            <div className='logo-login-container mb-5'>
              <h2>Conexión</h2>
              <h1>Académica</h1>
            </div>
          </Link>
          {/* Title */}
          <h1 className='fs-3 fw-normal'>Inicio de Sesión</h1>
          <p className='fw-light'>Ingresa tus datos</p>
          {/* Form */}
          <LoginForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            step={step}
            user={user}
            error={loginError}
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
            error={resetPasswdError}
            email={email}
            setEmail={setEmail}
          />
        </Modal>
      </div>
    </div>
  )
}


export default Login