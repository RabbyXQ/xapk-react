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
      p="2"
      bg={cardBg}
      borderRadius="md"
      boxShadow={cardShadow}
      _hover={{ bg: itemHoverBg, boxShadow: cardHoverShadow }}
      cursor="pointer"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      transition="all 0.2s ease"
      h="120px"
      w="120px"
      position="relative"
      overflow="hidden"
    >
      <Image
        src={item.image}
        alt={item.title}
        boxSize="50px"
        objectFit="cover"
        borderRadius="md"
      />
      <VStack spacing="1" alignItems="center">
        <Text fontWeight="bold" color={titleColor} fontSize="md">
          {item.title}
        </Text>
        <Text color={textColor} fontSize="sm">
          {item.packageName}
        </Text>
      </VStack>
    </Box>
  );
};

export default AppCard;
