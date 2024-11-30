import React, { useState } from 'react'
import { useAuth } from "../../context/authContext";
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import Modal from '../Modal/Modal';

function RestorePasswdForm({ handleSubmit, success, error, email, setEmail }) {
  const { sendResetPassword } = useAuth();
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState(false);

  /* const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Por favor ingrese un correo electrónico.");
      return;
    }

    try {
      // Send email

      await sendResetPassword(email);
      setSuccess(true);
      setError("El correo electrónico no está registrado");
    } catch (error) {
      setError("Correo electrónico no válido");
    }
  }; */
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-12 mx-auto">
          <div className="card shadow-sm p-3">
            {success ? (
              <div className="alert alert-success text-center" role="alert">
                
                ¡Correo de restablecimiento enviado! Revisa tu bandeja de entrada.
              </div>
            ) : null}
            <p className="text-center mb-4">Ingresa la dirección de correo electrónico que utilizas en Conexión Academica. Te enviaremos un enlace para restablecer tu contraseña.</p>
            <form onSubmit={(e) => handleSubmit(e, "resetPasswd")} autoComplete='off'>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  autoFocus
                />
                <label htmlFor="email" className="form-label text-body-tertiary">documento@gmail.com </label>
              {error && <p className='text-danger'>{error}</p>}
              </div>
              <button type="submit" className="btn btn-primary btn__custom w-100 mb-2">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestorePasswdForm