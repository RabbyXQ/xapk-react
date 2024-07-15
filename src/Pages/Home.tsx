import React from 'react';
import { Box, Grid, GridItem, ChakraProvider, useColorModeValue, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Header from '../Components/Header'; // Import the Header component
import AppList from '../Components/List/AppList'; // Import the AppList component
import Footer from '../Components/Footer';
import BottomNav from '../Components/NavBar/BottomNav';
import { mockData } from './mockData'; // Import mock data
import AppSlider from '../Components/Slider/AppSlider';

const Home: React.FC = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800'); // Background color
  const textColor = useColorModeValue('gray.600', 'gray.200'); // Text color

  const rightListData = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ];

  return (
    <ChakraProvider>
      <Box bg={bgColor} color={textColor} minH="100vh">
        <Header /> {/* Add Header component */}
        <Grid templateColumns={{ base: '1fr', md: '75fr 25fr' }} gap={6} mt={4}>
          <GridItem bg="white.200" paddingTop="10" borderRadius="md" overflowX="auto">

             <AppSlider/>
            <AppList title='Explore' items={mockData} />
          </GridItem>
          <GridItem bg="white.300" paddingTop="50" borderRadius="md">
            <Box>
              <List spacing={3}>
                {rightListData.map((item, index) => (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
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

export default Home;
