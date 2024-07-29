import React from 'react';
import { Box, Image, Link, Text, Grid, Heading, Button, useBreakpointValue, Icon, useColorMode } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

// Define the type for App data with rating
interface App {
  title: string;
  image: string;
  href: string;
  rating: number; // Rating out of 5
}

// Define color configurations for light and dark modes
const colors = {
  light: {
    hoverColor: '#00d49f', // Color to use on hover in light mode
    textColor: 'black',
    backgroundColor: 'white',
  },
  dark: {
    hoverColor: '#3dd382', // Color to use on hover in dark mode
    textColor: 'white',
    backgroundColor: 'gray.800',
  }
};

interface AppListProps {
  apps: App[],
  title: string
}

const AppList: React.FC<AppListProps> = ({ apps, title }) => {
  const { colorMode } = useColorMode();
  const colorsMode = colors[colorMode]; // Use colors based on the current color mode

  const columns = useBreakpointValue({ base: 5, sm: 6, md: 8, lg: 10 });
  const gap = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  return (
    <Box p={4} bg={colorsMode.backgroundColor} color={colorsMode.textColor}>
      <Heading mb={4} fontSize="lg" textAlign="start">{title}</Heading>
      <Grid
        templateColumns={`repeat(${columns}, 1fr)`}
        gap={gap}
        width="100%"
      >
        {apps.map((app, index) => (
          <Link
            key={index}
            href={app.href}
            isExternal
            display="block"
            borderRadius="md"
            overflow="hidden"
            boxShadow="sm"
            _hover={{ boxShadow: 'md', color: colorsMode.hoverColor }}
            position="relative"
            p={1}
            bg={colorsMode.backgroundColor}
          >
            <Box
              position="relative"
              pb="100%" // Maintains a square aspect ratio
            >
              <Image
                src={app.image}
                alt={app.title}
                objectFit="cover"
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                width="100%"
                height="100%"
              />
            </Box>

            <Box
              mt={2}
              textAlign="center"
            >
              <Box display="inline-flex" alignItems="center">
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon
                    key={i}
                    as={StarIcon}
                    color={i < Math.floor(app.rating) ? colorsMode.hoverColor : 'gray.300'}
                    boxSize={4}
                  />
                ))}
              </Box>
              <Text
                mt={1}
                fontSize="xs"
                color="gray.600"
              >
                {app.rating.toFixed(1)}
              </Text>
            </Box>
            <Text
              mt={1}
              fontSize="xs"
              fontWeight="bold"
              textAlign="center"
              noOfLines={2}
              _hover={{ color: colorsMode.hoverColor }}
            >
              {app.title}
            </Text>
          </Link>
        ))}
      </Grid>
      <Button
        size="sm"
        mt={4}
        variant="solid"
        bg={colorsMode.hoverColor}
        color={colorsMode.textColor}
        _hover={{ bg: colorsMode.hoverColor, color: 'black' }}
      >
        Load More
      </Button>
    </Box>
  );
};

export default AppList;
