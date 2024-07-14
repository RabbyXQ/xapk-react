import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorMode,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { InfoIcon, SunIcon, SearchIcon, StarIcon, SettingsIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Sidebar = () => {
  const { colorMode } = useColorMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home'); // State for the active link

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Static menu items
  const menuItems = [
    { name: 'Home', icon: <InfoIcon />, url: '#' },
    { name: 'Trending', icon: <SunIcon />, url: '#' },
    { name: 'Explore', icon: <SearchIcon />, url: '#' },
    { name: 'Favorites', icon: <StarIcon />, url: '#' },
    { name: 'Settings', icon: <SettingsIcon />, url: '#' },
  ];

  return (
    <>
      {/* Button to open/close the Sidebar */}
      <IconButton
        aria-label={isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        icon={isSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
        variant="outline"
        size="sm"
        onClick={toggleSidebar}
        background="none"
        position="fixed"
        top="4"
        left="4"
      />

      {/* Drawer Component for Mobile */}
      <Drawer
        placement="left"
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex align="center" justify="space-between">
              <Heading size="md">Menu</Heading>
              <IconButton
                aria-label="Close Sidebar"
                icon={<CloseIcon />}
                variant="outline"
                onClick={toggleSidebar}
                background="none"
              />
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            {menuItems.map(({ name, icon, url }) => (
              <Link
                key={name}
                href={url}
                onClick={() => setActiveLink(name)}
                _hover={{ textDecoration: 'none' }}
              >
                <Flex
                  marginY={4}
                  alignItems="center"
                  padding={2}
                  borderRadius={12}
                  backgroundColor={activeLink === name ? (colorMode === 'light' ? 'teal.200' : 'teal.600') : 'transparent'}
                  _hover={{
                    backgroundColor: colorMode === 'light' ? 'teal.200' : 'teal.600',
                  }}
                >
                  <Box marginRight={4}>{icon}</Box>
                  <Text>{name}</Text>
                </Flex>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
