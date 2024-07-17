// src/components/GestionTickets.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const GestionTickets = () => {
  return (
    <Box p="6" bg="red.100" borderRadius="md">
      <Text fontSize="2xl" fontWeight="bold" mb="4">Gestión de Tickets</Text>
      <Text fontSize="md">Aquí se gestionarán los tickets de compra comunes</Text>
    </Box>
  );
};

export default GestionTickets;
