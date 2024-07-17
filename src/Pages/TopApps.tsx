import React from 'react';
import { Box, Image, Link, Text, Flex, Grid, Heading, Button, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

// Define a type for app data with rating
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

const apps: App[] = [
  {
    title: "Chamet - Live Video Chat & Meet",
    image: "https://image.winudf.com/v2/image1/Y29tLmhrZnVsaWFvLmNoYW1ldF9pY29uXzE2ODQ5NDAzNjVfMDM2/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.5
  },
  {
    title: "OKX: Buy Bitcoin BTC & Crypto",
    image: "https://image.winudf.com/v2/image1/Y29tLm9raW5jLm9rZXguZ3BfaWNvbl8xNjQyNjY2ODA1XzA0OA/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.2
  },
  {
    title: "Careem Captain",
    image: "https://image.winudf.com/v2/image1/Y29tLmNhcmVlbS5hZG1hX2ljb25fMTU1OTY1NzM2MV8wODA/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.7
  },
  {
    title: "Love and Deepspace",
    image: "https://image.winudf.com/v2/image1/Y29tLnBhcGVnYW1lcy5seXNrLmVuX2ljb25fMTcwNTQ4MzEwOV8wNjU/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 3.9
  },
  {
    title: "MX Player",
    image: "https://image.winudf.com/v2/image1/Y29tLm14dGVjaC52aWRlb3BsYXllci5hZF9pY29uXzE1NTgxMTM0NzJfMDcx/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.8
  },
  {
    title: "Tonkeeper — TON Wallet",
    image: "https://image.winudf.com/v2/image1/Y29tLnRvbl9rZWVwZXJfaWNvbl8xNzE2ODE3MTEwXzAxMg/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.1
  },
  {
    title: "Whoosh",
    image: "https://image.winudf.com/v2/image1/Y29tLnB1bmljYXBwLndob29zaF9pY29uXzE2ODU0NTAzNjZfMDg3/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.3
  },
  {
    title: "TextNow: Call + Text Unlimited",
    image: "https://image.winudf.com/v2/image1/Y29tLmVuZmxpY2suYW5kcm9pZC5UZXh0Tm93X2ljb25fMTY1Mjc0MzUzN18wNDY/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.0
  }
];

const TopApps: React.FC = () => {
  const { colorMode } = useColorMode();
  const colorsMode = colors[colorMode]; // Use colors based on the current color mode

  const columns = useBreakpointValue({ base: 1, sm: 2, md: 2, lg: 2 });
  const gap = useBreakpointValue({ base: 1, sm: 2, md: 2 });

  return (
    <Box p={2} bg={colorsMode.backgroundColor} color={colorsMode.textColor}>
      <Heading mb={2} fontSize="sm" textAlign="start">Top Apps</Heading>
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
            display="flex"
            flexDirection="column"
            alignItems="stretch"
            borderRadius="md"
            overflow="hidden"
            boxShadow="sm"
            _hover={{ boxShadow: 'md', color: colorsMode.hoverColor }}
            width="100%"
            p={1}
            bg={colorsMode.backgroundColor}
          >
            <Flex
              direction="row"
              align="center"
              width="100%"
              mb={2}
            >
              <Box
                width="80px"
                height="80px"
                overflow="hidden"
                mr={2}
              >
                <Image
                  src={app.image}
                  alt={app.title}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box flex="1" p={1}>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  mb={0.5}
                  _hover={{ color: colorsMode.hoverColor }}
                  noOfLines={1}
                >
                  {app.title}
                </Text>
                <Box display="inline-flex" alignItems="center" mt={0.5}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon
                      key={i}
                      color={i < Math.floor(app.rating) ? colorsMode.hoverColor : 'gray.300'}
                      boxSize={3}
                    />
                  ))}
                </Box>
                <Text
                  fontSize="xs"
                  color="gray.600"
                  mt={0.5}
                >
                  {app.rating.toFixed(1)}
                </Text>
              </Box>
            </Flex>
          </Link>
        ))}
      </Grid>
      <Button
        mt={4}
        colorScheme="teal"
        variant="solid"
        size="sm"
        bg={colorsMode.hoverColor}
        color={colorsMode.textColor}
        _hover={{ bg: colorsMode.hoverColor, color: 'black' }}
      >
        Load More
      </Button>
    </Box>
  );
};

export default TopApps;
