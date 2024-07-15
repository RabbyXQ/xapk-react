import React from 'react';
import { Box, Grid, GridItem, ChakraProvider, useColorModeValue, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Header from '../Components/Header'; // Import the Header component
import AppList from '../Components/List/AppList'; // Import the AppList component
import Footer from '../Components/Footer';
import BottomNav from '../Components/NavBar/BottomNav';
import { mockData } from './mockData'; // Import mock data
import AppSlider from '../Components/Slider/AppSlider';
import Category from '../Components/Sidebar/Category';
import RectAppList from '../Components/List/RectAppList';
import TopWeekList from '../Components/List/TopWeekList';

const Home: React.FC = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800'); // Background color
  const textColor = useColorModeValue('gray.600', 'gray.200'); // Text color

  return (
    <ChakraProvider>
      <Box bg={bgColor} color={textColor} minH="100vh">
        <Header /> {/* Add Header component */}
        <Grid templateColumns={{ base: '1fr', md: '75fr 25fr' }} gap={6} mt="10">
          <GridItem bg="white.200" paddingTop="10" borderRadius="md" overflowX="auto">
            
            <Box>
            <AppSlider/>
              </Box> 
            <Box>
            <AppList title='Explore' items={mockData} />
            </Box>
            <Box>
              <RectAppList title='Popular' items={mockData}/>
            </Box>
            <Box>
              <RectAppList title='Top Games' items={mockData}/>
            </Box>
            <Box>
              <RectAppList title='Top Apps' items={mockData}/>
            </Box>
            <Box>
              <RectAppList title='User Reviewed' items={mockData}/>
            </Box>
          </GridItem>
          <GridItem bg="white.300" paddingTop="50" borderRadius="md">
            <Box>
              <Category/>
            </Box>
            <Box>
              <TopWeekList title='Top 7 of The Week' items={mockData}/>
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
