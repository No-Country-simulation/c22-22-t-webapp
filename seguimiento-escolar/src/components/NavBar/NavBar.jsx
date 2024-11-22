import React from 'react'
import './NavBarStyles.css'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation();
  return (
    <div className='navbar-container'>
      <nav className="navbar navbar-expand-lg fixed-top container">
        <div className="container-fluid">
          <Link className="navbar-brand flex-grow-0" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler navbar-toggler__custom"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Logo Mobile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className={`nav-link mx-lg-2 ${location.pathname === '/' ? 'active' : ''}`}
                    to='/'
                  >
                    Mi escritorio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link mx-lg-2 ${location.pathname === '/materias' ? 'active' : ''}`}
                    to='/materias'
                  >
                    Materias
                  </Link>
                </li>
                {/* We need to use nav-item__desktop to show in mobile navbar, but hiden it while we're in desktop. 
                This is because bootstrap needs declare here the items that will be in both navbars (mob and desk)
                */}
                <li className="nav-item dropdown nav-item__desktop">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Perfil
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Ver Perfil
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Otro item
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cerrar Sesión
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* We hide dropdown "Perfil" when we're in mobile. Instead, we're gonna show the li that are
           into div=offcanvas-body
          */}
          <ul className='navbar-nav justify-content-center flex-grow-0 pe-3 navbar-nav__mobile'>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Perfil
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Ver Perfil
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Otro item
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Cerrar Sesión
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Navbar