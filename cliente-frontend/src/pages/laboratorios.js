import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const LaboratoryReservation = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [horariosDisponibles, setHorariosDisponibles] = useState([]);
    const [reservationStatus, setReservationStatus] = useState(null);

    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

    const handleDaySelection = (day) => {
        setSelectedDay(day);
        setSelectedTime(null); // Restablecer la selección de hora
    };

    const handleTimeSelection = (time) => {
        setSelectedTime(time);
    };

    const handleReservation = async () => {
        try {
            // Hacer una solicitud al servidor para registrar la reserva
            const response = await axios.post('http://localhost:8090/reservalaboratorio/store', {
                day: selectedDay,
                time: selectedTime,
            });

            // Verificar la respuesta del servidor
            if (response.data.success) {
                setReservationStatus('Reserva exitosa');
            } else {
                setReservationStatus('Error al realizar la reserva');
            }
        } catch (error) {
            console.error('Error al realizar la reserva:', error);
            setReservationStatus('Error al realizar la reserva');
        }
    };

    useEffect(() => {
        const fetchHorariosDisponibles = async () => {
            try {
                const response = await axios.get('http://localhost:8090/horarios/getAll');
                setHorariosDisponibles(response.data);
            } catch (error) {
                console.error('Error al obtener los horarios disponibles:', error);
            }
        };

        fetchHorariosDisponibles();
    }, []); // Se ejecuta solo una vez al montar el componente

    return (
        <Container>
            <h1 className="mt-4 mb-4">Reserva de Laboratorios</h1>

            <Row className="mb-4">
                <Col>
                    <p>Selecciona un día de la semana:</p>
                    <ul className="list-unstyled">
                        {daysOfWeek.map((day) => (
                            <li key={day}>
                                <Button variant="secondary" onClick={() => handleDaySelection(day)}>
                                    {day}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>

            {selectedDay && (
                <Row className="mb-4">
                    <Col>
                        <p>Has seleccionado el día: {selectedDay}</p>
                        <Form.Group controlId="laboratorySelection">
                            <Form.Label>Selecciona un laboratorio:</Form.Label>
                            {/* Agrega aquí el componente de selección de laboratorio */}
                        </Form.Group>
                    </Col>
                </Row>
            )}

            {selectedDay && (
                <Row className="mb-4">
                    <Col>
                        <p>Selecciona un horario para {selectedDay}:</p>
                        <ul className="list-unstyled">
                            {horariosDisponibles.map((horario) => (
                                <li key={horario.id}>
                                    <Button variant="secondary" onClick={() => handleTimeSelection(horario.hora_inicio)}>
                                        {horario.hora_inicio} - {horario.hora_fin}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            )}

            {selectedTime && (
                <Row>
                    <Col>
                        <p>Has seleccionado el horario: {selectedTime}</p>
                        <Button variant="primary" onClick={handleReservation}>
                            Reservar laboratorio
                        </Button>
                        {reservationStatus && <p className="mt-2">{reservationStatus}</p>}
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default LaboratoryReservation;
