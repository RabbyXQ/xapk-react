import React from 'react';
import {
  Box,
  ChakraProvider,
  useColorModeValue,
} from '@chakra-ui/react';
import Header from '../Components/Header'; // Import the Header component
import Footer from '../Components/Footer';
import BottomNav from '../Components/NavBar/BottomNav';
import SingleAppList from '../Components/List/SingleAppList';
import { mockData } from '../Pages/mockData';

interface DetailLayoutProps {
  children: React.ReactNode;
}

const DetailLayout: React.FC<DetailLayoutProps> = ({ children }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.800'); // Background color
  const textColor = useColorModeValue('gray.600', 'gray.200'); // Text color

  return (
    <ChakraProvider>
      <Header /> 
      <Box bg={bgColor} color={textColor} minH="100vh" display="flex" flexDirection="column">
       
        <Box  maxW="container" p="4" my="10">
          {children} 
        </Box>
        
        <Box display={{ base: 'none', md: 'block' }}><Footer /></Box>
        <Box><BottomNav/></Box>
      </Box>
    </ChakraProvider>
  );
};

export default DetailLayout;
