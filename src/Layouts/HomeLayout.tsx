import React from 'react';
import { Box, Grid, GridItem, ChakraProvider, useColorModeValue } from '@chakra-ui/react';
import Header from '../Components/Header'; // Import the Header component
import Footer from '../Components/Footer';
import BottomNav from '../Components/NavBar/BottomNav';
import RightSidebar from '../Components/Sidebar/RightSidebar';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.800'); // Background color
  const textColor = useColorModeValue('gray.600', 'gray.200'); // Text color

  // Adjust GridItem background colors for dark mode
  const contentBgColor = useColorModeValue('white', 'gray.700');
  const sidebarBgColor = useColorModeValue('gray.50', 'gray.600');

  return (
    <ChakraProvider>
      <Header />
      <Box bg={bgColor} color={textColor} minH="100vh">
        <Grid templateColumns={{ base: '1fr', md: '75fr 25fr' }} gap={6} mt="10">
          <GridItem bg={contentBgColor} paddingTop="10" borderRadius="md" overflowX="auto">
            {children} {/* Content injected here */}
          </GridItem>
          <GridItem bg={sidebarBgColor} paddingTop="50" borderRadius="md">
            <RightSidebar />
          </GridItem>
        </Grid>
        <Box display={{ base: 'none', md: 'block' }}>
          <Footer /> 
        </Box>
        <BottomNav />
      </Box>
    </ChakraProvider>
  );
};

export default HomeLayout;
