import React, { useState } from 'react';

const LaboratoryReservation = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  const availableTimes = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM'];

  const handleDaySelection = (day) => {
    setSelectedDay(day);
    setSelectedTime(null); // Restablecer la selección de hora
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  return (
    <div>
      <h1>Reserva de Laboratorios</h1>
      <p>Selecciona un día de la semana:</p>
      <ul>
        {daysOfWeek.map((day) => (
          <li key={day}>
            <button onClick={() => handleDaySelection(day)}>{day}</button>
          </li>
        ))}
      </ul>
      {selectedDay && (
        <div>
          <p>Has seleccionado el día: {selectedDay}</p>
          <p>Selecciona un horario para {selectedDay}:</p>
          <ul>
            {availableTimes.map((time) => (
              <li key={time}>
                <button onClick={() => handleTimeSelection(time)}>{time}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedTime && (
        <p>Has seleccionado el horario: {selectedTime}</p>
        // Aquí puedes agregar lógica para enviar la reserva al servidor, si es necesario
      )}
    </div>
  );
};

export default LaboratoryReservation;
