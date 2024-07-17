import React from 'react';
import Head from './Head';
import { ChakraProvider } from '@chakra-ui/react';
import SliderComponent from './Slider';
import AppSlider from '../Components/Slider/AppSlider';
import Exclusive from './Exclusive';

import { Box, Grid, useBreakpointValue } from '@chakra-ui/react';
import Discover from './Discover';

const Layout: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

  return (
    <Box>
      <Grid
        templateColumns={isMobile ? '1fr' : '1fr 1fr'} // Single column on mobile, two columns on larger screens
        gap={2}
      >
        <Box>
          <Discover/>
        </Box>
        <Box>
          
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
  </ChakraProvider>
  );
};

export default Home;
