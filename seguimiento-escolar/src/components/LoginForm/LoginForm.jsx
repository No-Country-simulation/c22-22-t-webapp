import React from 'react'
import { Link } from "react-router-dom";
import './loginFormStyles.css'

function LoginForm({ handleSubmit, handleChange, step, user, error }) {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="mb-3">
          <div className="form-floating col-sm-12">
            <input
              type={step == 1 ? 'text' : 'password'}
              name={step == 1 ? 'dni' : 'password'}
              id={step == 1 ? 'dni' : 'password'}
              value={step == 1 ? user.dni : user.password}
              className="form-control"
              placeholder=' '
              autoFocus={true}
              onChange={handleChange}
            />
            <label htmlFor={step == 1 ? 'dni' : 'password'} className="col-sm-12 col-form-label text-body-tertiary">{step == 1 ? 'Documento' : "Contraseña"}</label>
            <p className='text-danger'>{error}</p>
          </div>
        </div>
        {
          step == 2 && (
            <div className="mb-3 text-end">
              <Link
                to="/restablecercontraseña"
                className="text-decoration-none small text-primary"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          )
        }

        <div className='w-100'>
          <button
            type="submit"
            className='btn btn-primary btn__custom w-100'
          >
            {step == 1 ? "Siguiente" : "Ingresar"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm