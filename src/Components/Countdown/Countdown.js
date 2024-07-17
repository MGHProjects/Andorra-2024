// src/components/Countdown.js
import React, { useState, useEffect } from 'react';
import CountdownItem from './CountdownItem';
import { Box, Text, Flex } from '@chakra-ui/react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-08-02T15:00:00'); // Fecha de destino incluyendo la hora
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const getTimeUnitsToDisplay = (timeLeft) => {
    const units = ['dias', 'horas', 'minutos', 'segundos'];
    const nonZeroUnits = units.filter(unit => timeLeft[unit] !== undefined && timeLeft[unit] > 0);

    // If there are more than 3 units, only return the first 3
    if (nonZeroUnits.length > 3) {
      return nonZeroUnits.slice(0, 3);
    }

    return nonZeroUnits;
  };

  const timeUnitsToDisplay = getTimeUnitsToDisplay(timeLeft);

  return (
    <Box
      textAlign="center"
      mt="10"
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      bg="red.200"
      color="white"
    >
      <Text fontSize={{base:'2xl', md:'4xl'}} fontWeight="bold" mb="6" >Tiempo hasta el viaje</Text>
      <Flex justifyContent="center">
        {timeUnitsToDisplay.map((interval) => (
          <Box key={interval} textAlign="center" mx="2">
            <Flex>
              {String(timeLeft[interval]).padStart(2, '0').split('').map((digit, index) => (
                <CountdownItem key={index} value={digit} />
              ))}
            </Flex>
            <Text textTransform="uppercase" mt="2" fontSize={{base:'sm', md:'md'}} className='countdown'>{interval}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Countdown;
