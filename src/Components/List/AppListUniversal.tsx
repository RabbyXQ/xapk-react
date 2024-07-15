import React from 'react';
import { Box, Text, useColorModeValue, Button, Flex } from '@chakra-ui/react';
import RectAppCard from '../Card/RectAppCard'; // Import RectAppCard component
import { AppItem } from '../Card/AppItem'; // Import the type for better type safety

interface AppListUniversalProps {
  items: AppItem[];
  title: string;
}

const AppListUniversal: React.FC<AppListUniversalProps> = ({ items, title }) => {
  const titleColor = useColorModeValue('teal.600', 'teal.300');
  const cardBg = useColorModeValue('white', 'gray.700'); // Background color for the card
  const shadow = useColorModeValue('md', 'dark-lg'); // Shadow for the card

  // Number of cards per row
  const cardsPerRow = 3;

  // Split items into rows of 3
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
        </Flex>

        {/* Container for the rows of cards */}
        <Flex direction="column" gap="4">
          {rows.map((row, rowIndex) => (
            <Flex
              key={rowIndex}
              wrap="wrap" // Wrap items to a new row if needed
              gap="4" // Space between cards
              direction={{ base: 'column', md: 'row' }} // Stack vertically on mobile, horizontally on larger screens
            >
              {row.map((item) => (
                <Box
                  key={item.packageName}
                  flex={{ base: '1 0 100%', md: '1 1 calc(33.333% - 16px)' }} // 100% width on mobile, 3 items per row on larger screens
                  minW={{ base: '100%', md: '150px' }} // Full width on mobile, fixed width on larger screens
                >
                  <RectAppCard item={item} />
                </Box>
              ))}
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default AppListUniversal;
