import React from 'react';
import Head from './Head';
import { ChakraProvider } from '@chakra-ui/react';
import SliderComponent from './Slider';
import AppSlider from '../Components/Slider/AppSlider';
import Exclusive from './Exclusive';
import Popular from './Popular';
import { Box, Grid, useBreakpointValue } from '@chakra-ui/react';
import Discover from './Discover';
import TopApps from './TopApps';
import TopGames from './TopGames';
import Footer from './Footer';

const Layout: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false, lg: false });

  return (
    <Box>
      <Grid
        templateColumns={isMobile ? '1fr' : '1fr 1fr'} // Single column on mobile, two columns on larger screens
        gap={2}
      >
        <Box>
          <Discover/>
          <TopApps/>
        </Box>
        <Box>
        <Popular/>
        <TopGames/>
        </Box>
      </Grid>
    </Box>
  );
};



const Home: React.FC = () => {
  return (
  <ChakraProvider>
  <Head/>
  <Box>
    <Exclusive/>
  </Box>
  <Layout/>
  <Footer/>
  </ChakraProvider>
  );
};

export default Home;
