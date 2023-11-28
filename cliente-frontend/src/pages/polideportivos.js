import React, { useState } from 'react';

const containerStyle = {
  textAlign: 'center',
  backgroundColor: '#e9e9e9',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  maxWidth: '800px',
  margin: '0 auto',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  border: '2px solid #3e3e3e',
  borderRadius: '8px', // Agregamos bordes redondeados a la tabla
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Agregamos una sombra suave
};

const cellStyle = {
  padding: '10px',
  fontSize: '18px',
  border: '2px solid #3e3e3e',
  borderRadius: '8px', // Agregamos bordes redondeados a las celdas
  backgroundColor: 'white',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  textAlign: 'center', // Centramos el texto en las celdas
};

const selectedStyle = {
  backgroundColor: '#ff5733',
};

const tableContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

function Polideportivos() {
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [reserva, setReserva] = useState(null);

  const horariosDisponibles = [
    '9:00 AM - 10:00 AM',
    '10:30 AM - 11:30 AM',
    '12:00 PM - 1:00 PM',
    '2:00 PM - 3:00 PM',
  ];

  const diasDisponibles = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  const handleHorarioClick = (horario) => {
    setHorarioSeleccionado(horario);
  };

  const handleDiaClick = (dia) => {
    setDiaSeleccionado(dia);
  };

  const handleReservarClick = () => {
    if (diaSeleccionado && horarioSeleccionado) {
      setReserva(`Has reservado para el día ${diaSeleccionado} a las ${horarioSeleccionado}.`);
    } else {
      setReserva('No has seleccionado un día y horario para la reserva.');
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Selecciona un día y un horario:</h2>
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...cellStyle, border: 'none' }}></th>
              {diasDisponibles.map((dia, index) => (
                <th key={index} style={cellStyle} onClick={() => handleDiaClick(dia)}>
                  {dia}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {horariosDisponibles.map((horario, index) => (
              <tr key={index}>
                <td style={cellStyle}>{horario}</td>
                {diasDisponibles.map((dia, diaIndex) => (
                  <td
                    key={diaIndex}
                    style={{
                      ...cellStyle,
                      ...(dia === diaSeleccionado && horario === horarioSeleccionado
                        ? selectedStyle
                        : {}),
                    }}
                    onClick={() => {
                      handleDiaClick(dia);
                      handleHorarioClick(horario);
                    }}
                  >
                    {dia === diaSeleccionado && horario === horarioSeleccionado
                      ? 'Seleccionado'
                      : 'Disponible'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Día seleccionado: {diaSeleccionado || 'Ninguno seleccionado'} <br />
        Horario seleccionado: {horarioSeleccionado || 'Ninguno seleccionado'}
      </p>
      <button onClick={handleReservarClick} style={cellStyle}>
        Reservar
      </button>
      <p>{reserva}</p>
    </div>
  );
}

export default Polideportivos;
