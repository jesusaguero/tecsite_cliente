import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Reservas() {
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
      console.log('Reserva realizada:', horaInicio);
    } catch (error) {
      console.error('Error al realizar la reserva', error);
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
          {/* Primera Sección: Calendario */}
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
                console.log('Horario:', horario);

                // Check if hora_inicio exists and is not undefined
                if (horario.hora_inicio && typeof horario.hora_inicio === 'string') {
                  // Assuming the time is in HH:mm:ss format, split the time string and create a new Date object
                  const [inicioHours, inicioMinutes, inicioSeconds] = horario.hora_inicio.split(':');
                  const [finHours, finMinutes, finSeconds] = horario.hora_fin.split(':');

                  const fechaInicio = new Date();
                  fechaInicio.setHours(Number(inicioHours), Number(inicioMinutes), Number(inicioSeconds));

                  const fechaFin = new Date();
                  fechaFin.setHours(Number(finHours), Number(finMinutes), Number(finSeconds));

                  return (
                      <tr key={horario.id}>
                        <td>{fechaInicio.toLocaleTimeString()}</td>
                        <td>{fechaFin.toLocaleTimeString()}</td>
                        <td>
                          <button onClick={() => handleReserva(horario.hora_inicio)}>Reservar</button>
                        </td>
                      </tr>
                  );
                } else {
                  // Handle the case where hora_inicio is missing or not a string
                  console.error('Invalid or missing hora_inicio for the entry:', horario);
                  return null; // or display an error message or placeholder
                }
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default Reservas;
