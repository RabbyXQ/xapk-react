import React from 'react';
import { Flex, Button, useColorModeValue } from '@chakra-ui/react';
import { AddIcon, StarIcon } from '@chakra-ui/icons';

const BottomNav: React.FC = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex
      display={{ base: 'flex', md: 'none' }}
      position="fixed"
      bottom="0"
      width="100%"
      bg={bgColor}
      borderTop="1px"
      borderColor={borderColor}
      justifyContent="space-around"
      p="2"
      boxShadow="md"
    >
      <Button variant="ghost" leftIcon={<AddIcon />}>
        Apps
      </Button>
      <Button variant="ghost" leftIcon={<StarIcon />}>
        Games
      </Button>
    </Flex>
  );
};

export default BottomNav;
