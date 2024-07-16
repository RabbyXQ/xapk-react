import React, { ReactNode, useState } from 'react';
import { Box, Flex, IconButton, useColorMode, useColorModeValue, VStack, HStack, Text } from '@chakra-ui/react';
import { SunIcon, MoonIcon, InfoOutlineIcon, SettingsIcon } from '@chakra-ui/icons';
import SideItem from '../Components/Sidebar/SideItem';
import AdminSideBar from '../Components/Sidebar/AdminSideBar';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [activeLink, setActiveLink] = useState<string>('Home'); // Manage active link state
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  return (
    <Flex minHeight="100vh">
      <Box
        w="250px"
        bg={bg}
        color={color}
        p={5}
        borderRight="1px"
        borderColor={borderColor}
      >
        <AdminSideBar/>
      </Box>
      <Box flex="1" p={5} bg={useColorModeValue('white', 'gray.800')}>
        {children}
      </Box>
    </Flex>
  );
};

export default AdminLayout;
