import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function ReservaPolideportivos() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [horariosDisponibles, setHorariosDisponibles] = useState([]);
  const [polideportivos, setPolideportivos] = useState([]);
  const [selectedPolideportivo, setSelectedPolideportivo] = useState(null);

  useEffect(() => {
    const fetchHorariosDisponibles = async () => {
      try {
        const response = await axios.get(
            `http://localhost:8090/horarios`
        );
        setHorariosDisponibles(response.data);
      } catch (error) {
        console.error('Error al obtener los horarios disponibles', error);
      }
    };

    const fetchPolideportivos = async () => {
      try {
        const response = await axios.get('http://localhost:8090/polideportivos/getAll');
        setPolideportivos(response.data);
      } catch (error) {
        console.error('Error al obtener los polideportivos', error);
      }
    };

    fetchHorariosDisponibles();
    fetchPolideportivos();
  }, [selectedDate, selectedPolideportivo]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleReserva = async (horaInicio) => {
    try {
      console.log('Reserva de polideportivo realizada:', horaInicio);
    } catch (error) {
      console.error('Error al realizar la reserva de polideportivo', error);
    }
  };

  return (
      <div className="container">
        <Link to="/home" className="navbar-brand d-flex align-items-center text-center">
          <img src={logo} alt="TECSITE Logo" width="100" height="100" className="mx-auto" />
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

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ marginRight: '20px' }}>
            <h2>Selecciona el Día:</h2>
            <Calendar onChange={handleDateChange} value={selectedDate} />
          </div>

          <div style={{ marginRight: '20px' }}>
            <h2>Selecciona el Polideportivo:</h2>
            <select onChange={(e) => setSelectedPolideportivo(e.target.value)}>
              <option value="">Selecciona un polideportivo</option>
              {polideportivos.map((polideportivo) => (
                  <option key={polideportivo.id} value={polideportivo.id}>
                    {polideportivo.nombre}
                  </option>
              ))}
            </select>
          </div>

          <div>
            <h2>Horarios Disponibles</h2>
            <table style={{ width: '100%' }}>
              <thead>
              <tr>
                <th>Hora Inicio</th>
                <th>Hora Fin</th>
                <th>Acciones</th>
              </tr>
              </thead>
              <tbody>
              {horariosDisponibles.map((horario) => {
                // Resto del código similar al ejemplo anterior
                return (
                    <tr key={horario.id}>
                      <td>{/*...*/}</td>
                      <td>{/*...*/}</td>
                      <td>
                        <button onClick={() => handleReserva(horario.hora_inicio)}>Reservar</button>
                      </td>
                    </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default ReservaPolideportivos;
