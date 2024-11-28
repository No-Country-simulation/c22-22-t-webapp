import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/authContext";
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"

function PasswordRecovery() {
  const { sendResetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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
      setEmail("El correo electrónico no está registrado");
    } catch (error) {
      setError("Correo electrónico no ");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-md-6 col-12 mx-auto">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Restablecer Contraseña</h2>
            {success ? (
              <div className="alert alert-success">
                ¡Correo de restablecimiento enviado! Revisa tu bandeja de entrada.
              </div>
            ) : null}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit} autoComplete='off'>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  autoFocus={true}
                />
                <label htmlFor="email" className="form-label text-body-tertiary">documento@gmail.com </label>
              </div>
              <button type="submit" className="btn btn-primary btn__custom w-100 mb-3">
                Enviar
              </button>
            </form>
            <div className="text-center">
              <p className="small">
                ¿No deseas cambiar tu contraseña?{" "}
                <button
                  className="btn btn-link  p-0"
                  onClick={() => navigate("/login")}
                >
                  Volver atrás
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordRecovery