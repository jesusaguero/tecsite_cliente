import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Polideportivos from './pages/polideportivos';

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
