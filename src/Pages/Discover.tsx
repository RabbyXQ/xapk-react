import React from 'react';
import { Box, Image, Link, Text, Grid, Heading, Button, useBreakpointValue, useColorMode } from '@chakra-ui/react';

// Define the type for app data
interface App {
  title: string;
  image: string;
  href: string;
}

// Define color configurations for light and dark modes
const colors = {
  light: {
    hoverColor: '#138021', // Color to use on hover in light mode
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
    href: "#"
  },
  {
    title: "OKX: Buy Bitcoin BTC & Crypto",
    image: "https://image.winudf.com/v2/image1/Y29tLm9raW5jLm9rZXguZ3BfaWNvbl8xNjQyNjY2ODA1XzA0OA/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#"
  },
  {
    title: "Careem Captain",
    image: "https://image.winudf.com/v2/image1/Y29tLmNhcmVlbS5hZG1hX2ljb25fMTU1OTY1NzM2MV8wODA/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#"
  },
  {
    title: "Love and Deepspace",
    image: "https://image.winudf.com/v2/image1/Y29tLnBhcGVnYW1lcy5seXNrLmVuX2ljb25fMTcwNTQ4MzEwOV8wNjU/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#"
  },
  {
    title: "MX Player",
    image: "https://image.winudf.com/v2/image1/Y29tLm14dGVjaC52aWRlb3BsYXllci5hZF9pY29uXzE1NTgxMTM0NzJfMDcx/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#"
  },
  {
    title: "Tonkeeper — TON Wallet",
    image: "https://image.winudf.com/v2/image1/Y29tLnRvbl9rZWVwZXJfaWNvbl8xNzE2ODE3MTEwXzAxMg/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#"
  },
  {
    title: "Whoosh",
    image: "https://image.winudf.com/v2/image1/Y29tLnB1bmljYXBwLndob29zaF9pY29uXzE2ODU0NTAzNjZfMDg3/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#"
  },
  {
    title: "TextNow: Call + Text Unlimited",
    image: "https://image.winudf.com/v2/image1/Y29tLmVuZmxpY2suYW5kcm9pZC5UZXh0Tm93X2ljb25fMTY1Mjc0MzUzN18wNDY/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#"
  }
];

const Discover: React.FC = () => {
  const { colorMode } = useColorMode();
  const colorsMode = colors[colorMode]; // Use colors based on the current color mode

  const columns = useBreakpointValue({ base: 5, sm: 6, md: 8, lg: 10, xl: 10 });
  const gap = useBreakpointValue({ base: 1, sm: 2, md: 3 }); // Adjust gap based on breakpoint

  return (
    <Box p={4} bg={colorsMode.backgroundColor} color={colorsMode.textColor}>
      <Heading mb={4} fontSize="lg" textAlign="start">Discover</Heading>
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
            p={1} // Reduced padding for smaller items
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
            <Text
              mt={1} // Reduced margin-top
              fontSize="xs" // Smaller font size for mobile
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
        mt={4}
        size="sm"
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

export default Discover;
