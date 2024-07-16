import React, { useState } from 'react';
import {
  VStack,
  HStack,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import SideItem from './SideItem'; // Adjust the import path as needed
import { adminSidebarItems } from './MenuItem/AdminMenuItems';

const AdminSideBar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [activeLink, setActiveLink] = useState('Dashboard'); // Default active link

  return (
    <VStack spacing={5} align="stretch">
      <HStack justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Admin Panel
        </Text>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </HStack>
      <VStack align="stretch" spacing={3}>
        {adminSidebarItems.map(({ name, icon: Icon, url }) => (
          <SideItem
            key={name}
            name={name}
            icon={Icon} // Pass the component type directly
            url={url}
            isActive={activeLink === name}
            onClick={() => setActiveLink(name)}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default AdminSideBar;
