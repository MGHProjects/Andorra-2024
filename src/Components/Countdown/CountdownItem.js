// src/components/CountdownItem.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const CountdownItem = ({ value }) => {
  return (
    <Box
      px="4"
      py="2"
      mx="1"
      bg="transparent"
      color="red.500"
      borderRadius="md"
      fontSize="2xl"
      fontWeight="bold"
    >
      <Text as="span" fontSize={{base:'2xl', md:'6xl'}} className='countdown'>
      {value}
      </Text>
    </Box>
  );
};

export default CountdownItem;
