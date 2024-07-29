import React from 'react';
import Head from './Head';
import { ChakraProvider,  Box} from '@chakra-ui/react';
import Footer from './Footer';
import AppDetail from './AppDetail';
import Discover from './Discover';



const Home: React.FC = () => {
  return (
  <ChakraProvider>
  <Head/>
  <Box>
    <AppDetail/>
  </Box>
  <Discover/>
  <Discover/>
  <Footer/>
  </ChakraProvider>
  );
};

export default Home;
