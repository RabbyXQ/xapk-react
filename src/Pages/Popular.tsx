import React from 'react';
import { Box, Image, Link, Text, Grid, Heading, Button, useBreakpointValue, Icon, useColorMode } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

// Define the type for game data with rating
interface Game {
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

const games: Game[] = [
  {
    title: "Fortnite",
    image: "https://example.com/fortnite.jpg",
    href: "#",
    rating: 4.5
  },
  {
    title: "Call of Duty: WarzoneCall of Duty: WarzoneCall of Duty: WarzoneCall of Duty: WarzoneCall of Duty: Warzone",
    image: "https://image.winudf.com/v2/image1/Y29tLmhrZnVsaWFvLmNoYW1ldF9pY29uXzE2ODQ5NDAzNjVfMDM2/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.7
  },
  {
    title: "Minecraft",
    image: "https://example.com/minecraft.jpg",
    href: "#",
    rating: 4.6
  },
  {
    title: "Apex Legends",
    image: "https://example.com/apex-legends.jpg",
    href: "#",
    rating: 4.4
  },
  {
    title: "Genshin Impact",
    image: "https://example.com/genshin-impact.jpg",
    href: "#",
    rating: 4.8
  },
  {
    title: "Among Us",
    image: "https://example.com/among-us.jpg",
    href: "#",
    rating: 4.3
  },
  {
    title: "PUBG Mobile",
    image: "https://example.com/pubg-mobile.jpg",
    href: "#",
    rating: 4.2
  }
];

const TopGames: React.FC = () => {
  const { colorMode } = useColorMode();
  const colorsMode = colors[colorMode]; // Use colors based on the current color mode

  const columns = useBreakpointValue({ base: 4, sm: 6, md: 5, lg: 6 });
  const gap = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  return (
    <Box p={4} bg={colorsMode.backgroundColor} color={colorsMode.textColor}>
      <Heading mb={4} fontSize="lg" textAlign="start">Popular</Heading>
      <Grid
        templateColumns={`repeat(${columns}, 1fr)`}
        gap={gap}
        width="100%"
      >
        {games.map((game, index) => (
          <Link
            key={index}
            href={game.href}
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
                src={game.image}
                alt={game.title}
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
            <Text
              mt={1}
              fontSize="xs"
              fontWeight="bold"
              textAlign="center"
              noOfLines={2}
              _hover={{ color: colorsMode.hoverColor }}
            >
              {game.title}
            </Text>
            <Box
              mt={2}
              textAlign="center"
            >
              <Box display="inline-flex" alignItems="center">
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon
                    key={i}
                    as={StarIcon}
                    color={i < Math.floor(game.rating) ? colorsMode.hoverColor : 'gray.300'}
                    boxSize={4}
                  />
                ))}
              </Box>
              <Text
                mt={1}
                fontSize="xs"
                color="gray.600"
              >
                {game.rating.toFixed(1)}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <Button
        size="sm"
        mt={4}
        colorScheme="teal"
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

export default TopGames;
