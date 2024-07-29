import React, { useState } from 'react';
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  ListIcon,
  Text,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';
import { AtSignIcon, CalendarIcon, CheckCircleIcon } from '@chakra-ui/icons';

const appCategories = [
  { name: 'Social', icon: AtSignIcon },
  { name: 'Productivity', icon: CalendarIcon },
  { name: 'Health', icon: CheckCircleIcon },
];

const gameCategories = [
  { name: 'Action', icon: AtSignIcon },
  { name: 'Puzzle', icon: CalendarIcon },
  { name: 'Adventure', icon: CheckCircleIcon },
];

const Category: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const bg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('black', 'white');
  const selectedColor = useColorModeValue('teal.500', 'teal.300');

  return (
    <Box 
      px="2"
      py="2"
      display={{ base: 'none', md: 'block' }}
    >
      <Heading mb={2} fontSize="sm" textAlign="start">Categories</Heading>

      <Box 
        bg={bg} 
        p="2" 
      >
        <Tabs 
          index={tabIndex} 
          onChange={setTabIndex} 
          variant="enclosed" 
          colorScheme="teal"
        >
          <TabList>
            <Tab 
              _selected={{ color: selectedColor, borderBottomColor: selectedColor }} 
              px="2" 
              py="1"
            >
              Apps
            </Tab>
            <Tab 
              _selected={{ color: selectedColor, borderBottomColor: selectedColor }} 
              px="2" 
              py="1"
            >
              Games
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="0">
              <List spacing={2}>
                {appCategories.map((category, index) => (
                  <ListItem 
                    key={index} 
                    display="flex" 
                    alignItems="center" 
                    px="2" 
                    py="1"
                  >
                    <ListIcon as={category.icon} color={selectedColor} />
                    <Text ml="2" color={textColor}>{category.name}</Text>
                  </ListItem>
                ))}
              </List>
            </TabPanel>
            <TabPanel p="0">
              <List spacing={2}>
                {gameCategories.map((category, index) => (
                  <ListItem 
                    key={index} 
                    display="flex" 
                    alignItems="center" 
                    px="2" 
                    py="1"
                  >
                    <ListIcon as={category.icon} color={selectedColor} />
                    <Text ml="2" color={textColor}>{category.name}</Text>
                  </ListItem>
                ))}
              </List>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Category;
