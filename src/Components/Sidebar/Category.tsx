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
  useColorModeValue
} from '@chakra-ui/react';
import { AtSignIcon, CalendarIcon, CheckCircleIcon } from '@chakra-ui/icons';

const appCategories = [
  { name: 'Social', icon: AtSignIcon },
  { name: 'Productivity', icon: CalendarIcon },
  { name: 'Health', icon: CheckCircleIcon },
  // Add more app categories as needed
];

const gameCategories = [
  { name: 'Action', icon: AtSignIcon },
  { name: 'Puzzle', icon: CalendarIcon },
  { name: 'Adventure', icon: CheckCircleIcon },
  // Add more game categories as needed
];

const Category: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  // Using useColorModeValue to set colors based on the current color mode
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('black', 'white');
  const selectedColor = useColorModeValue('teal.500', 'teal.300');

  return (
    <Box 
      maxW="container" 
      mx="auto" 
      px={{ base: '4', md: '6' }} // Add padding for better spacing
      py="1.5" // Add vertical padding
      display={{ base: 'none', md: 'block' }} 
    >
      <Box 
        bg={bg} 
        p="4" // Increased padding for better visual spacing
        borderRadius="md" 
        boxShadow="md"
      >
        <Tabs 
          index={tabIndex} 
          onChange={index => setTabIndex(index)} 
          variant="enclosed" 
          colorScheme="teal"
          isLazy
        >
          <TabList>
            <Tab 
              _selected={{ color: selectedColor, borderBottom: `2px solid ${selectedColor}` }} 
              px="4" 
              py="2"
              fontWeight="bold"
              fontSize="md"
            >
              Apps
            </Tab>
            <Tab 
              _selected={{ color: selectedColor, borderBottom: `2px solid ${selectedColor}` }} 
              px="4" 
              py="2"
              fontWeight="bold"
              fontSize="md"
            >
              Games
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="0">
              <List spacing={3}>
                {appCategories.map((category, index) => (
                  <ListItem 
                    key={index} 
                    display="flex" 
                    alignItems="center" 
                    px="4"
                    py="2"
                    borderBottom="1px solid" 
                    borderColor={borderColor}
                  >
                    <ListIcon as={category.icon} color={selectedColor} />
                    <Text ml="3" fontSize="md" color={textColor}>{category.name}</Text>
                  </ListItem>
                ))}
              </List>
            </TabPanel>
            <TabPanel p="0">
              <List spacing={3}>
                {gameCategories.map((category, index) => (
                  <ListItem 
                    key={index} 
                    display="flex" 
                    alignItems="center" 
                    px="4"
                    py="2"
                    borderBottom="1px solid" 
                    borderColor={borderColor}
                  >
                    <ListIcon as={category.icon} color={selectedColor} />
                    <Text ml="3" fontSize="md" color={textColor}>{category.name}</Text>
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
