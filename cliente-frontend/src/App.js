import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Reservas from './pages/polideportivos';
import LaboratoryReservation from "./pages/laboratorios";

function App() {
  return (
    <Router>
      <div>
        <nav>
          
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/reservas/polideportivos" element={<Reservas />} />
          <Route path="/reservas/laboratorios" element={<LaboratoryReservation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
