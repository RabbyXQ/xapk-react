import React from 'react';
import { Box, Text, useColorModeValue, Button, Flex } from '@chakra-ui/react';
import RectAppCard from '../Card/RectAppCard'; // Import RectAppCard component
import { AppItem } from '../Card/AppItem'; // Import the type for better type safety

interface TopWeekListProps {
  items: AppItem[];
  title: string;
}

const TopWeekList: React.FC<TopWeekListProps> = ({ items, title }) => {
  const titleColor = useColorModeValue('teal.600', 'teal.300');
  const cardBg = useColorModeValue('white', 'gray.800'); // Background color for the card
  const shadow = useColorModeValue('md', 'dark-lg'); // Shadow for the card

  return (
    <Box 
      maxW="container" 
      mx="auto" 
      px={{ base: '4', md: '6' }} // Responsive padding
      py="4" // Vertical padding
      overflowX="hidden" // Prevent horizontal overflow
    >
      <Box 
        bg={cardBg} 
        p={{ base: '4', md: '6' }} // Responsive padding
        borderRadius="md" 
        boxShadow={shadow}
        overflow="hidden" // Prevent inner overflow
      >
        <Flex
          mb="4"
          alignItems="center"
          justifyContent="space-between"
          p={{ base: '2', md: '4' }} // Responsive padding for Flex container
          borderRadius="md"
          width="full"
        >
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color={titleColor}>
            {title}
          </Text>
          <Button colorScheme="teal" variant="outline" size={{ base: 'sm', md: 'md' }}>
            View All
          </Button>
        </Flex>

        <Box overflowX="auto" whiteSpace="nowrap"> {/* Allow horizontal scrolling if needed */}
          <Flex
            direction="column"
            gap="4" // Consistent gap between items
            // Remove unnecessary overflow styles
          >
            {items.slice(0, 7).map((item) => (
              <Box 
                key={item.packageName} 
                borderBottom="1px solid" 
                borderColor="gray.200"
                overflow="hidden" // Prevent overflow for individual items
                maxW="full" // Ensure items do not exceed their container width
              >
                <RectAppCard item={item} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default TopWeekList;
