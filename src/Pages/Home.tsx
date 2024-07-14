import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Header from '../Components/Header'; // Import the Header component
import AppList from '../Components/List/AppList'; // Import the AppList component
import Footer from '../Components/Footer';

// mockData.js
export const mockData = [
    {
      title: 'WhatsApp',
      description: 'The world’s most popular messaging app.',
      developer: 'WhatsApp Inc.',
      rating: '4.8',
      reviews: '1M',
      installs: '5B+',
      image: 'https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=w480-h960',
      packageName: 'com.whatsapp'
    },
    {
      title: 'Facebook',
      description: 'Connect with friends and the world around you.',
      developer: 'Facebook',
      rating: '4.2',
      reviews: '2M',
      installs: '5B+',
      image: 'https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=s96',
      packageName: 'com.facebook.katana'
    },
    // Add more mock data as needed
  ];
  

const Home: React.FC = () => {
  return (
    <ChakraProvider>
      <Box>
        {/* Header */}
        <Header />
        <br/>
        <br/>
          {/* App List */}
          <AppList items={mockData} />
          <AppList items={mockData} />
          <AppList items={mockData} />
          <AppList items={mockData} />
          <AppList items={mockData} />
          <br/>
          <br/>
      </Box>
      <Footer/>
    </ChakraProvider>
  );
};

export default Home;
