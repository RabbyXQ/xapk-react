import React from 'react';
import { Box, Text, useColorModeValue, Grid, Flex } from '@chakra-ui/react';
import SingleAppCard from '../Card/SingleAppCard'; // Import SingleAppCard component
import { AppItem } from '../Card/AppItem'; // Import the type for better type safety

interface SingleAppListProps {
  items: AppItem[];
  title: string;
}

const SingleAppList: React.FC<SingleAppListProps> = ({ items, title }) => {
  const titleColor = useColorModeValue('teal.600', 'teal.300');
  const cardBg = useColorModeValue('white', 'gray.700'); // Background color for the card
  const shadow = useColorModeValue('md', 'dark-lg'); // Shadow for the card

  return (
    <Box p="4" maxW="container" mx="auto">
      <Box bg={cardBg} p="6" borderRadius="md" boxShadow={shadow}>
        <Flex
          mb="4"
          alignItems="center"
          justifyContent="space-between"
          p="2"
          borderRadius="md"
          width="full"
        >
          <Text fontSize="xl" fontWeight="bold" color={titleColor}>
            {title}
          </Text>
        </Flex>

        <Box overflowX="auto" whiteSpace="nowrap">
          <Flex>
            {items.slice(0, 10).map((item) => (
              <Box key={item.packageName} m="2" flex="0 0 auto">
                <SingleAppCard item={item} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleAppList;
