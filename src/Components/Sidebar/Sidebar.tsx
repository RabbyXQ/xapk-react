// Sidebar.tsx
import React, { useState } from 'react';
import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import {
  SunIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
} from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom'; // Import useLocation
import SideItem from './SideItem'; // Import the SideItem component
import menuItems from './MenuItem/GlobalMenuItems';

const Sidebar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get current location

  // Set the active link based on the current URL path
  const activeLink = location.pathname;

  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Function to handle link click and update the active link
  const handleLinkClick = (url: string) => () => {
    // Use client-side navigation if needed here
    setIsSidebarOpen(false); // Optionally close the sidebar after selection
  };

  return (
    <>
      {/* Button to toggle Sidebar */}
      <IconButton
        aria-label={isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        icon={isSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
        variant="outline"
        size="sm"
        onClick={handleToggleSidebar}
        background="none"
        position="fixed"
        top="4"
        left="4"
      />

      <Drawer
        placement="left"
        isOpen={isSidebarOpen}
        onClose={handleToggleSidebar}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarHeader
            colorMode={colorMode}
            toggleColorMode={toggleColorMode}
            closeSidebar={handleToggleSidebar}
          />
          <SidebarBody
            menuItems={menuItems} // Pass menuItems to SidebarBody
            activeLink={activeLink}
            onLinkClick={handleLinkClick}
          />
        </DrawerContent>
      </Drawer>
    </>
  );
};

// SidebarHeader Component
const SidebarHeader: React.FC<{
  colorMode: string;
  toggleColorMode: () => void;
  closeSidebar: () => void;
}> = ({ colorMode, toggleColorMode, closeSidebar }) => (
  <DrawerHeader>
    <Flex align="center" justify="space-between">
      <Heading size="md">Menu</Heading>
      <Flex>
        <IconButton
          aria-label="Toggle Color Mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="outline"
          marginRight={2}
        />
        <IconButton
          aria-label="Close Sidebar"
          icon={<CloseIcon />}
          variant="outline"
          onClick={closeSidebar}
        />
      </Flex>
    </Flex>
  </DrawerHeader>
);

// SidebarBody Component
const SidebarBody: React.FC<{
  menuItems: { name: string; icon: React.ElementType; url: string }[];
  activeLink: string;
  onLinkClick: (url: string) => () => void;
}> = ({ menuItems, activeLink, onLinkClick }) => (
  <DrawerBody>
    {menuItems.map(({ name, icon, url }) => (
      <SideItem
        key={url} // Use URL as key to ensure uniqueness
        name={name}
        icon={icon} // Pass icon as a component
        url={url}
        isActive={activeLink === url} // Set active state based on the current URL
        onClick={onLinkClick(url)}
      />
    ))}
  </DrawerBody>
);

export default Sidebar;
