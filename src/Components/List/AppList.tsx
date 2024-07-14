import React from 'react';
import { Box, Text, useColorModeValue, Button, Grid, Flex } from '@chakra-ui/react';
import AppCard from '../Card/AppCard'; // Import AppCard component
import { AppItem } from '../Card/AppItem'; // Import the type for better type safety

interface AppListProps {
  items: AppItem[];
  title: string;
}

const AppList: React.FC<AppListProps> = ({ items, title }) => {
  const titleColor = useColorModeValue('teal.600', 'teal.300');

  return (
    <Box p="4" maxW="container" mx="auto">
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
        <Grid
          templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
          gap="3"
          minW="100%"
          gridAutoFlow="column"
          autoColumns="minmax(150px, 1fr)"
          gridTemplateRows="repeat(3, 1fr)"
        >
          {items.map((item) => (
            <Box key={item.packageName} m="2">
              <AppCard item={item} />
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AppList;
