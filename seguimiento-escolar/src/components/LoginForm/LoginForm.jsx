import React from 'react'
import './loginFormStyles.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function LoginForm({ handleSubmit, handleChange, step, user, error, inputRef, handleOpenModal }) {

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e, "login")}
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
              onChange={handleChange}
              maxLength={step == 1 ? 12 : 20}
              autoFocus
              ref={step === 2 ? inputRef : null} // Asign the reference to the paswd input
            />
            <label htmlFor={step == 1 ? 'dni' : 'password'} className="col-sm-12 col-form-label text-body-tertiary">{step == 1 ? 'Documento' : "Contraseña"}</label>
            <p className='text-danger'>{error}</p>
          </div>
        </div>
        {
          step == 2 && (
            <div className="mb-4 text-end">
              <button
                href=''
                onClick={(event) => {
                  event.preventDefault(); // Previene el envío del formulario
                  handleOpenModal(); // Abre el modal
                }}
                className="btn btn-link text-decoration-none p-0 m-0"
              >
                <small>¿Olvidaste tu contraseña?</small>
              </button>
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