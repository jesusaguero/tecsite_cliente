import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import loginImageLeft from '../assets/layout.png';
import loginImageRight from '../assets/layout.png';

function Login() {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 ">
            <img src={loginImageLeft} alt="Login" className="w-19 h-100 position-absolute start-0" style={{ objectFit: 'cover', zIndex: '-1', transform: 'scaleX(-1)' }} />
            <img src={loginImageRight} alt="Login" className="w-19 h-100 position-absolute end-0" style={{ objectFit: 'cover', zIndex: '-1',  }} />

        <div className="bg-white w-80 p-4 rounded shadow-sm border mb-4">
          <div className="d-flex align-items-center mb-3">
            <img src={logo} alt="Logo" className="me-2" style={{ width: '100px', height: '100px' }} />
          </div>
          <h3 className="fs-4 text-dark mb-3">Iniciar Sesión</h3>
          <form>
            <p className="fs-5 text-dark mb-4">
              Reserva de los Polideportivos y Laboratorios al alcance de todos!
            </p>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Código de estudiante</label>
              <input type="text" name="numer" className="form-control" placeholder="Ingrese su código de estudiante" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" name="password" className="form-control" placeholder="Ingrese su contraseña" />
            </div>
            <Link to="/home" className="d-block">
              <button className="btn btn-primary w-100" style={{ background: '#1e4d92', border: 'none' }}>
                Iniciar Sesión
              </button>
            </Link>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Recordar</label>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Login;
