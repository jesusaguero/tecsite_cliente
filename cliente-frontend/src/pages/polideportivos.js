import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";


function Reservas() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [horariosDisponibles, setHorariosDisponibles] = useState([]);

  useEffect(() => {
    const fetchHorariosDisponibles = async () => {
      try {
        const response = await axios.get(
            `http://localhost:8090/reservapolideportivo/getAll?fecha=${selectedDate.toISOString()}`
        );
        setHorariosDisponibles(response.data);
      } catch (error) {
        console.error('Error al obtener los horarios disponibles', error);
      }
    };

    fetchHorariosDisponibles();
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleReserva = async (horaInicio) => {
    try {
      // Realizar lógica para realizar la reserva aquí
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
          <div style={{ marginRight: '20px' }}>
            <h1>Calendario</h1>
            <Calendar onChange={handleDateChange} value={selectedDate} />
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
              {horariosDisponibles.map((horario) => (
                  <tr key={horario.id}>
                    <td>{horario.horaInicio}</td>
                    <td>{horario.horaFin}</td>
                    <td>
                      <button onClick={() => handleReserva(horario.horaInicio)}>Reservar</button>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default Reservas;
