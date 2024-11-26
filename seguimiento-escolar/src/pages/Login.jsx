import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useAuth } from "../context/authContext";

function Login() {
  const [user, setUser] = useState({
    dni: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(`${user.dni}@gmail.com`, user.password);
      navigate("/estudiante/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });


  /*   const handleResetPassword = async (e) => {
      e.preventDefault();
      if (!user.email) return setError("Write an email to reset password");
      try {
        await resetPassword(user.email);
        setError('We sent you an email. Check your inbox')
      } catch (error) {
        setError(error.message);
      }
    }; */
  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
      <p>{error}</p>
      <div>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h1>Login</h1>
          <p>Ingresa tus credenciales</p>
          <div className="mb-3 row">
            <label htmlFor="text" className="col-sm-2 col-form-label">
              DNI
            </label>
            <div className="col-sm-12">
              <input
                type="text"
                name='dni'
                id="dni"
                className="form-control"
                placeholder='XXXXXXXXXXXX'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Contraseña
            </label>
            <div className="col-sm-12">
              <input
                type="password"
                name='password'
                id="password"
                className="form-control"
                placeholder='************'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3 text-end">
            <Link
              to="/reestablecercontraseña"
              className="text-decoration-none small text-primary"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className='btn btn-primary'
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login