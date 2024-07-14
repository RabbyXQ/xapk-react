import React, { useState } from 'react';
import { Box, HStack, Button, Text, useColorModeValue } from '@chakra-ui/react';
import { InfoIcon, SunIcon, SearchIcon, StarIcon, SettingsIcon, ChatIcon, AddIcon, BellIcon } from '@chakra-ui/icons';

const NavBar = () => {
  const [activeButton, setActiveButton] = useState('Home'); // Default active button
  const bgColor = useColorModeValue('white', 'gray.800'); // Background color for the navbar
  const color = useColorModeValue('gray.800', 'white'); // Text color for the buttons
  const buttonBg = useColorModeValue('teal.50', 'teal.800'); // Light green background for light mode, darker for dark mode
  const buttonHoverBg = useColorModeValue('grtealeen.100', 'teal.700'); // Darker green on hover
  const buttonActiveBg = useColorModeValue('teal.200', 'teal.600'); // Active button background

  return (
    <Box
      bg={bgColor}
      w="full"
      h="12"
      top="10"
      left="0"
      transition="transform 0.3s ease"
      zIndex="1"
      boxShadow="md"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      position="relative"
      overflowX="auto" // Enable horizontal scrolling for the Box
      whiteSpace="nowrap" // Prevent content from wrapping
    >
      <HStack
        spacing="4"
        align="center"
        h="full"
        px="4"
        minW="max-content" // Ensure HStack's minimum width is enough to fit all items
        whiteSpace="nowrap" // Prevent buttons from wrapping to the next line
      >
        <Button
          aria-label="Home"
          variant="solid"
          bg={activeButton === 'Home' ? buttonActiveBg : buttonBg}
          color={color}
          size="sm"
          fontSize="sm"
          borderRadius="full"
          _hover={{
            bg: buttonHoverBg,
            transform: 'scale(1.05)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          _active={{
            bg: buttonActiveBg,
            transform: 'scale(0.98)',
          }}
          _focus={{ boxShadow: 'none' }}
          onClick={() => setActiveButton('Home')}
          leftIcon={<InfoIcon />}
        >
          <Text>Home</Text>
        </Button>
        <Button
          aria-label="Trending"
          variant="solid"
          bg={activeButton === 'Trending' ? buttonActiveBg : buttonBg}
          color={color}
          size="sm"
          fontSize="sm"
          borderRadius="full"
          _hover={{
            bg: buttonHoverBg,
            transform: 'scale(1.05)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          _active={{
            bg: buttonActiveBg,
            transform: 'scale(0.98)',
          }}
          _focus={{ boxShadow: 'none' }}
          onClick={() => setActiveButton('Trending')}
          leftIcon={<SunIcon />}
        >
          <Text>Trending</Text>
        </Button>
        <Button
          aria-label="Explore"
          variant="solid"
          bg={activeButton === 'Explore' ? buttonActiveBg : buttonBg}
          color={color}
          size="sm"
          fontSize="sm"
          borderRadius="full"
          _hover={{
            bg: buttonHoverBg,
            transform: 'scale(1.05)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          _active={{
            bg: buttonActiveBg,
            transform: 'scale(0.98)',
          }}
          _focus={{ boxShadow: 'none' }}
          onClick={() => setActiveButton('Explore')}
          leftIcon={<SearchIcon />}
        >
          <Text>Explore</Text>
        </Button>
        <Button
          aria-label="Favorites"
          variant="solid"
          bg={activeButton === 'Favorites' ? buttonActiveBg : buttonBg}
          color={color}
          size="sm"
          fontSize="sm"
          borderRadius="full"
          _hover={{
            bg: buttonHoverBg,
            transform: 'scale(1.05)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          _active={{
            bg: buttonActiveBg,
            transform: 'scale(0.98)',
          }}
          _focus={{ boxShadow: 'none' }}
          onClick={() => setActiveButton('Favorites')}
          leftIcon={<StarIcon />}
        >
          <Text>Favorites</Text>
        </Button>
        <Button
          aria-label="Settings"
          variant="solid"
          bg={activeButton === 'Settings' ? buttonActiveBg : buttonBg}
          color={color}
          size="sm"
          fontSize="sm"
          borderRadius="full"
          _hover={{
            bg: buttonHoverBg,
            transform: 'scale(1.05)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          _active={{
            bg: buttonActiveBg,
            transform: 'scale(0.98)',
          }}
          _focus={{ boxShadow: 'none' }}
          onClick={() => setActiveButton('Settings')}
          leftIcon={<SettingsIcon />}
        >
          <Text>Settings</Text>
        </Button>
        {/* New Items */}
        <Button
          aria-label="Messages"
          variant="solid"
          bg={activeButton === 'Messages' ? buttonActiveBg : buttonBg}
          color={color}
          size="sm"
          fontSize="sm"
          borderRadius="full"
          _hover={{
            bg: buttonHoverBg,
            transform: 'scale(1.05)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          _active={{
            bg: buttonActiveBg,
            transform: 'scale(0.98)',
          }}
          _focus={{ boxShadow: 'none' }}
          onClick={() => setActiveButton('Messages')}
          leftIcon={<ChatIcon />}
        >
          <Text>Messages</Text>
        </Button>
        <Button
          aria-label="Notifications"
          variant="solid"
          bg={activeButton === 'Notifications' ? buttonActiveBg : buttonBg}
          color={color}
          size="sm"
          fontSize="sm"
          borderRadius="full"
          _hover={{
            bg: buttonHoverBg,
            transform: 'scale(1.05)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          _active={{
            bg: buttonActiveBg,
            transform: 'scale(0.98)',
          }}
          _focus={{ boxShadow: 'none' }}
          onClick={() => setActiveButton('Notifications')}
          leftIcon={<BellIcon />}
        >
          <Text>Notifications</Text>
        </Button>
        <Button
          aria-label="Profile"
          variant="solid"
          bg={activeButton === 'Profile' ? buttonActiveBg : buttonBg}
          color={color}
          size="sm"
          fontSize="sm"
          borderRadius="full"
          _hover={{
            bg: buttonHoverBg,
            transform: 'scale(1.05)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          _active={{
            bg: buttonActiveBg,
            transform: 'scale(0.98)',
          }}
          _focus={{ boxShadow: 'none' }}
          onClick={() => setActiveButton('Profile')}
          leftIcon={<AddIcon />} // Changed to AddIcon as placeholder
        >
          <Text>Profile</Text>
        </Button>
      </HStack>
    </Box>
  );
};

export default NavBar;
