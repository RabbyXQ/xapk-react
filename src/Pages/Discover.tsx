import React, { useRef, useState, useEffect } from 'react';
import { Box, Text, Image, VStack, HStack } from '@chakra-ui/react';

const Discover: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const checkHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.clientHeight;
        setIsHidden(height > 500);
      }
    };

    checkHeight();
    window.addEventListener('resize', checkHeight);

    return () => window.removeEventListener('resize', checkHeight);
  }, []);

  if (isHidden) return null;

  return (
    <Box
      ref={containerRef}
      p={4}
      overflowX="auto"
      whiteSpace="nowrap"
      css={{
        '&::-webkit-scrollbar': {
          height: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray',
          borderRadius: '8px',
        },
      }}
    >
      <Text as="h3" fontSize="xl" mb={4} fontWeight="bold">
        Discover
      </Text>
      <HStack
        spacing={4}
        align="flex-start"
        py={4}
        px={2}
        minW="max-content"
      >
        {apps.map((app) => (
          <VStack
            key={app.title}
            align="center"
            spacing={2}
            minWidth="120px"
            maxWidth="120px"
            height={{ base: '150px', md: '200px' }}  // Responsive height
            borderRadius="md"
            borderWidth="1px"
            borderColor="gray.200"
            p={2}
            bg="white"
            shadow="md"
            position="relative"
          >
            <Image
              src={app.image}
              alt="Thumb"
              boxSize={{ base: '80px', md: '100px' }}  // Responsive image size
              objectFit="cover"
              borderRadius="md"
              mb={2}
            />
            <Text
              fontSize={{ base: 'xs', md: 'sm' }}  // Responsive font size
              noOfLines={2}
              textAlign="center"
              whiteSpace="normal"
              overflow="hidden"
            >
              {app.title}
            </Text>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
};

const apps = [
  {
    title: "Chamet - Live Video Chat & Meet",
    image: "https://image.winudf.com/v2/image1/Y29tLmhrZnVsaWFvLmNoYW1ldF9pY29uXzE2ODQ5NDAzNjVfMDM2/icon.webp?w=102&fakeurl=1&type=.webp"
  },
  {
    title: "OKX: Buy Bitcoin BTC & Crypto",
    image: "https://image.winudf.com/v2/image1/Y29tLm9raW5jLm9rZXguZ3BfaWNvbl8xNjQyNjY2ODA1XzA0OA/icon.webp?w=102&fakeurl=1&type=.webp"
  },
  {
    title: "Careem Captain",
    image: "https://image.winudf.com/v2/image1/Y29tLmNhcmVlbS5hZG1hX2ljb25fMTU1OTY1NzM2MV8wODA/icon.webp?w=102&fakeurl=1&type=.webp"
  },
  {
    title: "Love and Deepspace",
    image: "https://image.winudf.com/v2/image1/Y29tLnBhcGVnYW1lcy5seXNrLmVuX2ljb25fMTcwNTQ4MzEwOV8wNjU/icon.webp?w=102&fakeurl=1&type=.webp"
  },
  {
    title: "MX Player",
    image: "https://image.winudf.com/v2/image1/Y29tLm14dGVjaC52aWRlb3BsYXllci5hZF9pY29uXzE1NTgxMTM0NzJfMDcx/icon.webp?w=102&fakeurl=1&type=.webp"
  },
  {
    title: "Tonkeeper — TON Wallet",
    image: "https://image.winudf.com/v2/image1/Y29tLnRvbl9rZWVwZXJfaWNvbl8xNzE2ODE3MTEwXzAxMg/icon.webp?w=102&fakeurl=1&type=.webp"
  },
  {
    title: "Whoosh",
    image: "https://image.winudf.com/v2/image1/Y29tLnB1bmljYXBwLndob29zaF9pY29uXzE2ODU0NTAzNjZfMDg3/icon.webp?w=102&fakeurl=1&type=.webp"
  },
  {
    title: "TextNow: Call + Text Unlimited",
    image: "https://image.winudf.com/v2/image1/Y29tLmVuZmxpY2suYW5kcm9pZC5UZXh0Tm93X2ljb25fMTY1Mjc0MzUzN18wNDY/icon.webp?w=102&fakeurl=1&type=.webp"
  }
];

export default Discover;
