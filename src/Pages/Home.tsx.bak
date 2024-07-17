import React from 'react';
import HomeLayout from '../Layouts/HomeLayout';
import { Box } from '@chakra-ui/react';
import AppSlider from '../Components/Slider/AppSlider';
import SingleAppList from '../Components/List/SingleAppList';
import RectAppList from '../Components/List/RectAppList';
import AppList from '../Components/List/AppList';
import { mockData } from './mockData';

const Home: React.FC = () => {
  return (
  <>
   <HomeLayout>
                
            <Box>
            <AppSlider/>
              </Box> 
            <Box>
            <AppList title='Explore' items={mockData} />
            </Box>
            <Box>
              <SingleAppList title='Quick Installation' items={mockData}/>
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
   </HomeLayout>
  </>
  );
};

export default Home;
