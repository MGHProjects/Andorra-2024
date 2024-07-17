// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Countdown from './Components/Countdown/Countdown';
import Menu from './Components/Menu/Menu';
import Actividades from './Components/Actividades/Actividades';
import GestionTickets from './Components/GestionTickets/GestionTickets';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Menu />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Countdown />} />
            <Route path="/actividades" element={<Actividades />} />
            <Route path="/gestion-tickets" element={<GestionTickets />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
