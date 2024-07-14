import React from 'react';
import { 
  Box, 
  Text, 
  SimpleGrid, 
  Image, 
  useColorModeValue, 
  Button, 
  VStack, 
  HStack 
} from '@chakra-ui/react';
import { AppItem } from '../Card/AppItem'; // Import the type for better type safety

interface AppListProps {
  items: AppItem[];
}

const AppList: React.FC<AppListProps> = ({ items }) => {
  // Define color values
  const cardBg = useColorModeValue('white', 'gray.800'); // Updated card background color
  const itemBg = useColorModeValue('gray.200', 'gray.900'); // Background for the main container
  const itemHoverBg = useColorModeValue('gray.50', 'gray.700'); // Hover background
  const textColor = useColorModeValue('gray.800', 'white'); // Text color
  const titleColor = useColorModeValue('teal.600', 'teal.300'); // Updated title color
  const buttonColor = useColorModeValue('teal.500', 'teal.300'); // Button color
  const cardShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Updated card shadow
  const cardHoverShadow = '0 6px 10px rgba(0, 0, 0, 0.2)'; // Updated hover shadow

  return (
    <Box p="4" maxW="container" mx="auto">
      {/* Header for the App List */}
      <Box
        mb="4"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="2"
        bg={itemBg}
        borderRadius="md"
        boxShadow="md"
        width="full"
      >
        <Text fontSize="xl" fontWeight="bold" color={titleColor}>
          Popular Applications
        </Text>
        <Button colorScheme="teal" variant="outline" size="sm">
          Add New
        </Button>
      </Box>

      {/* List of applications */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4, lg: 6 }} spacing="3">
        {items.map((item) => (
          <Box
            key={item.packageName}
            p="2"
            bg={cardBg}
            borderRadius="md"
            boxShadow={cardShadow} // Updated shadow
            _hover={{ bg: itemHoverBg, boxShadow: cardHoverShadow }} // Updated hover shadow
            cursor="pointer"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            transition="all 0.2s ease"
            h="120px" // Reduced height
            position="relative"
            overflow="hidden"
          >
            <HStack spacing="2" w="full" h="full" alignItems="center">
              <Image
                src={item.image}
                alt={item.title}
                boxSize="80px" // Image size
                objectFit="cover"
                borderRadius="md"
              />
              <VStack spacing="1" alignItems="flex-start" w="full">
                <Text fontWeight="bold" color={titleColor} fontSize="sm">
                  {item.title}
                </Text>
                <Text color={textColor} fontSize="xs">
                  Developer: {item.developer}
                </Text>
                <Text color={textColor} fontSize="xs">
                  Rating: {item.rating}
                </Text>
                <Text color={textColor} fontSize="xs">
                  Installs: {item.installs}
                </Text>
              </VStack>
            </HStack>
            <Button
              as="a"
              href={`https://play.google.com/store/apps/details?id=${item.packageName}`}
              target="_blank"
              colorScheme="teal"
              variant="solid"
              size="xs"
              mt="2"
              color="white" // Button text color
              bg={buttonColor} // Teal background for the button
              position="absolute"
              bottom="2"
              right="2"
            >
              View
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AppList;
