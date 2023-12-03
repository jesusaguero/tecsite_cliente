import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import image1 from '../assets/laboratoriobk.png';
import image2 from '../assets/polideportivobk.png';
import loginImageLeft from '../assets/signin_screen-2.png';
import loginImageRight from '../assets/signin_screen-2.png';
function Home() {
  return (
    <div>
      <header>
            <div className="container">
              <Link to="/" className="navbar-brand d-flex align-items-center">
                <img src={logo} alt="TECSITE Logo" width="100" height="100" className="me-2" />
              </Link>
              <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
    </header>
    <div>


      <img src={loginImageLeft} alt="Login" className="w-19 h-50 position-absolute start-0" style={{ objectFit: 'cover', zIndex: '-1', transform: 'scaleX(-1)' }} />
    <img src={loginImageRight} alt="Login" className="w-19 h-50 position-absolute end-0" style={{ objectFit: 'cover', zIndex: '-1',  }} />

      <main>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card border-0 position-relative card-animation">
                  <img
                    src={image2}
                    alt="Imagen 1"
                    className="card-img-bottom"
                    style={{
                      borderTopLeftRadius: '0',
                      borderTopRightRadius: '0',
                      width: '100%',
                      height: '500px',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="card-body text-center position-absolute top-50 start-50 translate-middle">
                    <h2 className="card-title text-white">Reserva Polideportivos</h2>
                    <Link to="/reservas/polideportivos" className="btn btn-primary">
                      Click para reservar
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 position-relative card-animation">
                  <img
                    src={image1}
                    alt="Imagen 2"
                    className="card-img-bottom"
                    style={{
                      borderTopLeftRadius: '0',
                      borderTopRightRadius: '0',
                      width: '100%',
                      height: '500px',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="card-body text-center position-absolute top-50 start-50 translate-middle">
                    <h2 className="card-title text-white">Reserva de Laboratorios</h2>
                    <Link to="/reservas/laboratorios" className="btn btn-primary">
                      Click para reservar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
}

export default Home;