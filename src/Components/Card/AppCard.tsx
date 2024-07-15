import React from 'react';
import { Box, Text, Image, useColorModeValue, VStack } from '@chakra-ui/react';
import { AppItem } from '../Card/AppItem'; // Import the type for better type safety

interface AppCardProps {
  item: AppItem;
}

const AppCard: React.FC<AppCardProps> = ({ item }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const itemHoverBg = useColorModeValue('gray.50', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const titleColor = useColorModeValue('teal.600', 'teal.300');
  const cardShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  const cardHoverShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';

  return (
    <Box
      p="4"
      borderRadius="md"
      _hover={{ bg: itemHoverBg, boxShadow: cardHoverShadow }}
      cursor="pointer"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      transition="all 0.2s ease"
      minH="160px" // Ensure the card has a minimum height
      minW="120px"
      maxW="160px" // Limit the maximum width
      position="relative"
      overflow="hidden"
    >
      <Image
        src={item.image}
        alt={item.title}
        boxSize="60px" // Adjust size for better scaling
        objectFit="cover"
        borderRadius="md"
        mb="2" // Margin bottom to separate from text
      />
      <VStack spacing="1" alignItems="center" w="full">
        <Text
          fontWeight="bold"
          color={titleColor}
          fontSize={{ base: 'sm', md: 'md' }} // Responsive font size
          whiteSpace="nowrap" // Prevent text from wrapping
          overflow="hidden" // Hide overflow text
          textOverflow="ellipsis" // Show ellipsis for overflowing text
          w="full" // Make sure the text container takes full width
        >
          {item.title}
        </Text>
        <Text
          color={textColor}
          fontSize={{ base: 'xs', md: 'sm' }} // Responsive font size
          whiteSpace="nowrap" // Prevent text from wrapping
          overflow="hidden" // Hide overflow text
          textOverflow="ellipsis" // Show ellipsis for overflowing text
          w="full" // Make sure the text container takes full width
        >
          {item.packageName}
        </Text>
      </VStack>
    </Box>
  );
};

export default AppCard;
