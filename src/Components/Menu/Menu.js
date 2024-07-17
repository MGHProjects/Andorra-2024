// src/components/Menu.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faMapMarkedAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { IconButton, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        colorScheme="red"
        onClick={onOpen}
        icon={<FontAwesomeIcon icon={faBars} />}
        className="m-4"
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menú</DrawerHeader>
            <DrawerBody>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="flex items-center" onClick={onClose}>
                    <FontAwesomeIcon icon={faHome} size="lg" className="mr-2" />
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/actividades" className="flex items-center" onClick={onClose}>
                    <FontAwesomeIcon icon={faInfoCircle} size="lg" className="mr-2" />
                    Actividades
                  </Link>
                </li>
                <li>
                  <Link to="/gestion-tickets" className="flex items-center" onClick={onClose}>
                    <FontAwesomeIcon icon={faMapMarkedAlt} size="lg" className="mr-2" />
                    Gestión de Tickets
                  </Link>
                </li>
              </ul>
            </DrawerBody>
            <DrawerFooter>
              <button onClick={onClose} className="w-full py-2 bg-red-500 text-white rounded">Cerrar</button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Menu;
