import React from 'react';
import { Box, Text, useColorModeValue, VStack, Image } from '@chakra-ui/react';
import { AppItem } from '../Card/AppItem'; // Import the type for better type safety

interface AppCardProps {
  item: AppItem;
}

const SingleAppCard: React.FC<AppCardProps> = ({ item }) => {
  const itemHoverBg = useColorModeValue('gray.50', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const titleColor = useColorModeValue('teal.600', 'teal.300');
  const cardShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  const cardHoverShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';

  return (
    <Box
      p="6"
      borderRadius="md"
      _hover={{ bg: itemHoverBg, boxShadow: cardHoverShadow }}
      cursor="pointer"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      transition="all 0.2s ease"
      minH={{ base: '150px', md: '150px' }} // Ensure the card has a larger minimum height
      minW={{ base: '150px', md: '150px' }} // Ensure the card has a larger minimum width
      maxW={{ base: '150px', md: '150px' }} // Limit the maximum width
      position="relative"
      overflow="hidden"
    >
      <Image
        src={item.image}
        alt={item.title}
        boxSize={{ base: '16', md: '20' }} // Larger icon size and responsive
        mb="4" // Margin bottom to separate from text
      />
      <VStack spacing="2" alignItems="center" w="full">
        <Text
          fontWeight="bold"
          color={titleColor}
          fontSize={{ base: 'md', md: 'lg' }} // Responsive font size
          whiteSpace="nowrap" // Prevent text from wrapping
          overflow="hidden" // Hide overflow text
          textOverflow="ellipsis" // Show ellipsis for overflowing text
          w="full" // Make sure the text container takes full width
        >
          {item.title}
        </Text>
      </VStack>
    </Box>
  );
};

export default SingleAppCard;
