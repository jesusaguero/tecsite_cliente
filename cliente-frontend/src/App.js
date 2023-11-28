import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Polideportivos from './polideportivos'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          {/* Agregamos una ruta para el componente Horarios */}
          <Route path="./polideportivos" element={<Polideportivos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
