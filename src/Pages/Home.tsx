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
import EditorsChoice from './EditorsChoice';
import Category from '../Components/Sidebar/Category';
import LastDownloads from './LastDownloads';
import AppDetail from './AppDetail';

const Layout: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, xm: true, md: false, lg: false });

  return (
    <Box maxW="container">
      <Grid
        templateColumns={isMobile ? '1fr' : '70fr 30fr'} // Single column on mobile, two columns on larger screens
        gap={2}
      >
        <Box>
          <Discover/>
          <TopApps/>
          <Popular/>
          <TopGames/>
        </Box>
        <Box>
        <Category/>
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
