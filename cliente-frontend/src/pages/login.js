import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import loginImage from '../assets/login-image.jpg';
import loginImageLeft from '../assets/signin_screen-2.png';
import loginImageRight from '../assets/signin_screen-2.png';

function Login() {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-white">
            <img src={loginImageLeft} alt="Login" className="w-19 h-50 position-absolute start-0" style={{ objectFit: 'cover', zIndex: '-1', transform: 'scaleX(-1)' }} />
            <img src={loginImageRight} alt="Login" className="w-9 h-50 position-absolute end-0" style={{ objectFit: 'cover', zIndex: '-1',  }} />

      <div className="d-flex flex-column align-items-center">
        <div className="bg-white w-80 p-4 rounded shadow-sm border mb-4">
          <div className="d-flex align-items-center mb-3">
            <img src={logo} alt="Logo" className="me-2" style={{ width: '50px', height: '50px' }} />
            <h3 className="fs-4 text-dark">TECSITE</h3>
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
              <label className="form-check-label" htmlFor="rememberMe">Recuérdame</label>
            </div>
          </form>
          <p className="fs-5 text-secondary mt-4">
            ¿Olvidaste tu contraseña? <a href="#">Recupérala aquí</a>
          </p>
        </div>
      </div>
      <img src={loginImage} alt="Login" className="w-50 h-75" />

    </div>
  );
}

export default Login;
