import React from 'react';
import { Box, Text, Image, useColorModeValue, VStack } from '@chakra-ui/react';
import { AppItem } from '../Card/AppItem'; // Import the type for better type safety

interface RectAppCardProps {
  item: AppItem;
}

const RectAppCard: React.FC<RectAppCardProps> = ({ item }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const itemHoverBg = useColorModeValue('gray.50', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const titleColor = useColorModeValue('teal.600', 'teal.300');
  const cardShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  const cardHoverShadow = '0 5px 10px rgba(0, 0, 0, 0.2)';

  return (
    <Box
      p="4"
      borderRadius="md"
      _hover={{ bg: itemHoverBg, boxShadow: cardHoverShadow }}
      cursor="pointer"
      display="flex"
      flexDirection="row"
      alignItems="center"
      textAlign="left"
      transition="all 0.2s ease"
      h="100px"
      maxW="320px"
      overflowX="hidden" // Ensure overflow content is hidden
    >
      <Image
        src={item.image}
        alt={item.title}
        boxSize="60px"
        objectFit="cover"
        borderRadius="md"
        mr="4"
      />
      <VStack spacing="1" alignItems="start" flex="1" overflow="hidden">
        <Text
          fontWeight="bold"
          color={titleColor}
          fontSize="md"
          whiteSpace="nowrap" // Prevent text from wrapping
          overflow="hidden" // Hide overflow text
          textOverflow="ellipsis" // Show ellipsis for overflowing text
        >
          {item.title}
        </Text>
        <Text
          color={textColor}
          fontSize="sm"
          whiteSpace="nowrap" // Prevent text from wrapping
          overflow="hidden" // Hide overflow text
          textOverflow="ellipsis" // Show ellipsis for overflowing text
        >
          {item.packageName}
        </Text>
      </VStack>
    </Box>
  );
};

export default RectAppCard;
