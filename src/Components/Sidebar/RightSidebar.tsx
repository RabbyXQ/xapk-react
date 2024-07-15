import React from 'react';
import { Box, Flex, Text, useDisclosure, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useColorModeValue } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { mockData } from '../../Pages/mockData';
import Category from './Category';
import TopWeekList from '../List/TopWeekList';

const RightSidebar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <>
      <Box>
        <Category/>
      </Box>
      <Box>
        <TopWeekList title='Top 7 of The Week' items={mockData}/>
      </Box>
            
    </>
  );
};

export default RightSidebar;
