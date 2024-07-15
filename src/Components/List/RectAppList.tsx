import React from 'react';
import { Box, Text, useColorModeValue, Button, Flex } from '@chakra-ui/react';
import RectAppCard from '../Card/RectAppCard'; // Import RectAppCard component
import { AppItem } from '../Card/AppItem'; // Import the type for better type safety

interface RectAppListProps {
  items: AppItem[];
  title: string;
}

const RectAppList: React.FC<RectAppListProps> = ({ items, title }) => {
  const titleColor = useColorModeValue('teal.600', 'teal.300');
  const cardBg = useColorModeValue('white', 'gray.700'); // Background color for the card
  const shadow = useColorModeValue('md', 'dark-lg'); // Shadow for the card

  // Number of cards per row
  const cardsPerRow = 3;

  // Rows needed for the grid
  const rows = Array.from({ length: Math.ceil(items.length / cardsPerRow) }, (_, rowIndex) =>
    items.slice(rowIndex * cardsPerRow, rowIndex * cardsPerRow + cardsPerRow)
  );

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
          <Button colorScheme="teal" variant="outline" size="sm">
            View All
          </Button>
        </Flex>

        <Box overflowX="auto">
          <Flex
            direction="row"
            wrap="nowrap"
            gap="3"
            minW="max-content"
          >
            {rows.map((row, rowIndex) => (
              <Box key={rowIndex} display="flex" flexDirection="column" mr="3">
                {row.map((item) => (
                  <Box key={item.packageName} p="2">
                    <RectAppCard item={item} />
                  </Box>
                ))}
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default RectAppList;
