import React from 'react';
import { Box, HStack, Button, Text, useColorModeValue } from '@chakra-ui/react';
import { InfoIcon, SunIcon, SearchIcon, StarIcon, SettingsIcon, ChatIcon, AddIcon, BellIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for route information

const NavBar = () => {
  const location = useLocation(); // Get current location
  const bgColor = useColorModeValue('white', 'gray.800'); // Background color for the navbar
  const color = useColorModeValue('gray.800', 'white'); // Text color for the buttons
  const buttonBg = useColorModeValue('teal.50', 'teal.800'); // Light green background for light mode, darker for dark mode
  const buttonHoverBg = useColorModeValue('teal.100', 'teal.700'); // Darker green on hover
  const buttonActiveBg = useColorModeValue('teal.200', 'teal.600'); // Active button background

  // Determine active button based on current path
  const getActiveButton = (path: string) => {
    return location.pathname === path ? buttonActiveBg : buttonBg;
  };

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
        <Link to="/">
          <Button
            aria-label="Home"
            variant="solid"
            bg={getActiveButton('/')}
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
            leftIcon={<InfoIcon />}
          >
            <Text>Home</Text>
          </Button>
        </Link>
        <Link to="/apps">
          <Button
            aria-label="Apps"
            variant="solid"
            bg={getActiveButton('/apps')}
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
            leftIcon={<AddIcon />}
          >
            <Text>Apps</Text>
          </Button>
        </Link>
        <Link to="/trending">
          <Button
            aria-label="Trending"
            variant="solid"
            bg={getActiveButton('/trending')}
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
            leftIcon={<SunIcon />}
          >
            <Text>Trending</Text>
          </Button>
        </Link>
        <Link to="/explore">
          <Button
            aria-label="Explore"
            variant="solid"
            bg={getActiveButton('/explore')}
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
            leftIcon={<SearchIcon />}
          >
            <Text>Explore</Text>
          </Button>
        </Link>
        <Link to="/favorites">
          <Button
            aria-label="Favorites"
            variant="solid"
            bg={getActiveButton('/favorites')}
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
            leftIcon={<StarIcon />}
          >
            <Text>Favorites</Text>
          </Button>
        </Link>
        <Link to="/settings">
          <Button
            aria-label="Settings"
            variant="solid"
            bg={getActiveButton('/settings')}
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
            leftIcon={<SettingsIcon />}
          >
            <Text>Settings</Text>
          </Button>
        </Link>
        <Link to="/messages">
          <Button
            aria-label="Messages"
            variant="solid"
            bg={getActiveButton('/messages')}
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
            leftIcon={<ChatIcon />}
          >
            <Text>Messages</Text>
          </Button>
        </Link>
        <Link to="/notifications">
          <Button
            aria-label="Notifications"
            variant="solid"
            bg={getActiveButton('/notifications')}
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
            leftIcon={<BellIcon />}
          >
            <Text>Notifications</Text>
          </Button>
        </Link>
        <Link to="/profile">
          <Button
            aria-label="Profile"
            variant="solid"
            bg={getActiveButton('/profile')}
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
            leftIcon={<AddIcon />} // Changed to AddIcon as placeholder
          >
            <Text>Profile</Text>
          </Button>
        </Link>
      </HStack>
    </Box>
  );
};

export default NavBar;
