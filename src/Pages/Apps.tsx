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
import SingleAppList from '../Components/List/SingleAppList';
import RightSidebar from '../Components/Sidebar/RightSidebar';
import AppListUniversal from '../Components/List/AppListUniversal';
import HomeLayout from '../Layouts/HomeLayout';

const Apps: React.FC = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800'); // Background color
  const textColor = useColorModeValue('gray.600', 'gray.200'); // Text color

  return (
    <>
    <HomeLayout>
        <AppListUniversal title='Cat Name' items={mockData}/>
    </HomeLayout>
    </>
  );
};

export default Apps;
