// src/components/Actividades.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Actividades = () => {
  return (
    <Box p="6" bg="red.100" borderRadius="md">
      <Text fontSize="2xl" fontWeight="bold" mb="4">Actividades</Text>
      <Text fontSize="md">Aquí se podrán ver detalles de las actividades planificadas para el viaje.</Text>
    </Box>
  );
};

export default Actividades;
