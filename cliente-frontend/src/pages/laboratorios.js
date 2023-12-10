import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function ReservaLaboratorios() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [horarios, setHorarios] = useState([]);
    const [laboratorios, setLaboratorios] = useState([]);
    const [selectedLaboratorio, setSelectedLaboratorio] = useState(null);
    const [selectedHorario, setSelectedHorario] = useState(null);

    useEffect(() => {
        const fetchHorarios = async () => {
            try {
                const response = await axios.get('http://localhost:8090/horarios/getAll');
                setHorarios(response.data);
            } catch (error) {
                console.error('Error al obtener los horarios disponibles', error);
            }
        };

        const fetchLaboratorios = async () => {
            try {
                const response = await axios.get('http://localhost:8090/laboratorios/getAll');
                setLaboratorios(response.data);
            } catch (error) {
                console.error('Error al obtener los laboratorios', error);
            }
        };

        fetchHorarios();
        fetchLaboratorios();
    }, [selectedHorario, selectedLaboratorio]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleReserva = async () => {
        try {
            const reservaData = {
                fecha: selectedDate,
                laboratorio_id: selectedLaboratorio,
                horario_id: selectedHorario,
            };

            const response = await axios.post('http://localhost:8090/reservalaboratorio/store', reservaData);

            if (response.status === 200) {
                console.log('Reserva de laboratorio realizada:', selectedLaboratorio);
            } else {
                console.error('Error al realizar la reserva de laboratorio. Estado:', response.status);
            }
        } catch (error) {
            console.error('Error al realizar la reserva de laboratorio', error);
            console.error('Detalles completos del error:', error.response);
        }

    };


    return (
        <div className="container mt-4">
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

            <div className="d-flex justify-content-center align-items-center mt-4">
                <div className="me-3">
                    <Calendar onChange={handleDateChange} value={selectedDate} />
                </div>

                <div className="me-3">
                    <select className="form-select" onChange={(e) => setSelectedLaboratorio(e.target.value)}>
                        <option value="">Selecciona un laboratorio</option>
                        {laboratorios.map((laboratorio) => (
                            <option key={laboratorio.id} value={laboratorio.id}>
                                {laboratorio.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="me-3">
                    <select className="form-select" onChange={(e) => setSelectedHorario(e.target.value)}>
                        <option value="">Selecciona un horario</option>
                        {horarios.map((horario) => (
                            <option key={horario.id} value={horario.id}>
                                {`${horario.hora_inicio} - ${horario.hora_fin}`}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="btn btn-primary" onClick={handleReserva}>
                    Reservar
                </button>
            </div>
        </div>
    );
}

export default ReservaLaboratorios;
