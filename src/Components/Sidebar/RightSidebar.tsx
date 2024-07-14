import React from 'react';
import { Box, Flex, Text, useDisclosure, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useColorModeValue } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const RightSidebar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <>
      {/* Mobile Button to open sidebar */}
      <Button
        display={{ base: 'block', md: 'none' }}
        position="fixed"
        right="4"
        top="4"
        zIndex="tooltip"
        onClick={onOpen}
        variant="outline"
        colorScheme="teal"
        borderRadius="full"
      >
        <ChevronRightIcon />
      </Button>

      {/* Drawer for mobile */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent bg={bgColor} borderLeft={`1px solid ${borderColor}`}>
          <DrawerCloseButton />
          <DrawerHeader>Sidebar Title</DrawerHeader>

          <DrawerBody>
            <Box p="4">
              <Text mb="4">Item 1</Text>
              <Text mb="4">Item 2</Text>
              <Text mb="4">Item 3</Text>
              <Text mb="4">Item 4</Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Fixed sidebar for larger screens */}
      <Flex
        display={{ base: 'none', md: 'flex' }}
        position="fixed"
        right="0"
        top="0"
        height="100vh"
        width="250px"
        bg={bgColor}
        borderLeft={`1px solid ${borderColor}`}
        p="4"
        direction="column"
        boxShadow="md"
        zIndex="sticky"
      >
        <Text fontSize="lg" fontWeight="bold" mb="4">Sidebar Title</Text>
        <Text mb="4">Item 1</Text>
        <Text mb="4">Item 2</Text>
        <Text mb="4">Item 3</Text>
        <Text mb="4">Item 4</Text>
      </Flex>
    </>
  );
};

export default RightSidebar;
