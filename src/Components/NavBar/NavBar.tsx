import React from 'react';
import {
  Box,
  HStack,
  Button,
  Text,
  useColorModeValue,
  Icon,
  IconProps
} from '@chakra-ui/react';
import { InfoIcon, SunIcon, SearchIcon, StarIcon, SettingsIcon, ChatIcon, AddIcon, BellIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for route information

const navItems = [
  { path: '/', label: 'Home', icon: InfoIcon },
  { path: '/apps', label: 'Apps', icon: AddIcon },
  { path: '/trending', label: 'Trending', icon: SunIcon },
  { path: '/explore', label: 'Explore', icon: SearchIcon },
  { path: '/favorites', label: 'Favorites', icon: StarIcon },
  { path: '/settings', label: 'Settings', icon: SettingsIcon },
  { path: '/messages', label: 'Messages', icon: ChatIcon },
  { path: '/notifications', label: 'Notifications', icon: BellIcon },
  { path: '/profile', label: 'Profile', icon: AddIcon } // Changed to AddIcon as placeholder
];

const NavBar: React.FC = () => {
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
      top="2"
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
        {navItems.map(({ path, label, icon: IconComponent }) => (
          <Link key={path} to={path}>
            <Button
              aria-label={label}
              variant="solid"
              bg={getActiveButton(path)}
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
              leftIcon={<IconComponent />}
            >
              <Text>{label}</Text>
            </Button>
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default NavBar;
