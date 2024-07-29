import React from 'react';
import { Box, Button, Image, Text, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for routing

const categories = [
  { href: '/art_and_design', title: 'Art & Design', imgSrc: 'https://apkpure.com/static/image/grey.gif', alt: 'Art & Design' },
  { href: '/auto_and_vehicles', title: 'Auto & Vehicles', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLnB1bmljYXBwLndob29zaF9pY29uXzE2ODU0NTAzNjZfMDg3/icon.webp?w=48&fakeurl=1&type=.webp', alt: 'Auto & Vehicles' },
  { href: '/beauty', title: 'Beauty', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLmxhamV1bmVhbmRhc3NvY2lhdGVzbGxjLmJhcmJlcmNob3BkZXZfaWNvbl8xNjA1NzcwNzUwXzAwNQ/icon.webp?w=48&fakeurl=1&type=.webp', alt: 'Beauty' },
  { href: '/books_and_reference', title: 'Books & Reference', imgSrc: 'https://apkpure.com/static/image/grey.gif', alt: 'Books & Reference' },
  { href: '/business', title: 'Business', imgSrc: 'https://image.winudf.com/v2/image1/dXMuem9vbS52aWRlb21lZXRpbmdzX2ljb25fMTY2NDIyNjc2NV8wMjE/icon.webp?w=48&fakeurl=1&type=.webp', alt: 'Business' },
  { href: '/comics', title: 'Comics', imgSrc: 'https://apkpure.com/static/image/grey.gif', alt: 'Comics' },
  { href: '/communication', title: 'Communication', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLndoYXRzYXBwX2ljb25fMTU1OTg1MDA2NF8wNjI/icon.webp?w=48&fakeurl=1&type=.webp', alt: 'Communication' },
  { href: '/dating', title: 'Dating', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLnRpbmRlcl9pY29uX2lkXzE2MDM0MDczNTdfMDc5/icon.webp?w=48&fakeurl=1&type=.webp', alt: 'Dating' },
  { href: '/education', title: 'Education', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLngweC5jb2xvdXI5MWNsdWJfaWNvbl8xNzA0NTYwODc4XzAwNg/icon.webp?w=48&fakeurl=1&type=.webp', alt: 'Education' },
  { href: '/entertainment', title: 'Entertainment', imgSrc: 'https://image.winudf.com/v2/image1/ZGV2X2ltYWdlXzI2ODU2MTY1XzIwOTUzMV8yMDIzMTIxMzExMjMxODk0OA/icon.webp?w=48&fakeurl=1&type=.webp', alt: 'Entertainment' },
  { href: '/events', title: 'Events', imgSrc: 'https://apkpure.com/static/image/grey.gif', alt: 'Events' },
  { href: '/finance', title: 'Finance', imgSrc: 'https://image.winudf.com/v2/image1/aWQuZGFuYV9pY29uXzE1NjcyMTcyNjRfMDU2/icon.webp?w=48&fakeurl=1&type=.webp', alt: 'Finance' },
  { href: '/food_and_drink', title: 'Food & Drink', imgSrc: 'https://image.winudf.com/v2/image1/cnUuaW5zdGFtYXJ0X2ljb25fMTcxOTkwMTcyM18wMTM/icon.webp?w=48&fakeurl=1&type=.webp', alt: 'Food & Drink' },
  { href: '/health_and_fitness', title: 'Health & Fitness', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLmZvY3Vzb25zaGFyaW5nLndhbGtjYXNoX2ljb25fMTcwNzMwMDUwMl8wODg/icon.webp?w=48&fakeurl=1&type=.webp', alt: 'Health & Fitness' },
  { href: '/house_and_home', title: 'House & Home', imgSrc: 'https://image.winudf.com/v2/image1/cnUuc2liZ2VuY28uZ2VuZXJhbF9pY29uXzE1NDk2MTI3NDlfMDg4/icon.webp?w=48&fakeurl=1&type=.webp', alt: 'House & Home' },
  { href: '/libraries_and_demo', title: 'Libraries & Demo', imgSrc: 'https://apkpure.com/static/image/grey.gif', alt: 'Libraries & Demo' },
  { href: '/lifestyle', title: 'Lifestyle', imgSrc: 'https://apkpure.com/static/image/grey.gif', alt: 'Lifestyle' },
  { href: '/maps_and_navigation', title: 'Maps & Navigation', imgSrc: 'https://image.winudf.com/v2/image1/cnUueWFuZGV4LnRheGltZXRlcl9pY29uXzE2NzIzODg5NDVfMDEw/icon.webp?w=48&fakeurl=1&type=.webp', alt: 'Maps & Navigation' },
  { href: '/medical', title: 'Medical', imgSrc: 'https://image.winudf.com/v2/image1/YXBwLmJwanMubW9iaWxlX2ljb25fMTcwMjY5NzQ2M18wMTM/icon.webp?w=48&fakeurl=1&type=.webp', alt: 'Medical' },
  { href: '/music_and_audio', title: 'Music & Audio', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLnNwb3RpZnkubXVzaWNfaWNvbl8xNzE2NDYwMTQ4XzA0Nw/icon.webp?w=48&fakeurl=1&type=.webp', alt: 'Music & Audio' },
  { href: '/news_and_magazines', title: 'News & Magazines', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLnR3aXR0ZXIuYW5kcm9pZC5saXRlX2ljb25fMTU1NTU2MDI...', alt: 'News & Magazines' }
];

const AppCategoryList = () => {
  const navigate = useNavigate(); // Use useNavigate for routing

  const handleClick = (href: string) => {
    navigate(href); // Navigate to the desired route
  };

  return (
    <Box
      padding={4}
      backgroundColor="gray.50"
      boxShadow="md"
      borderRadius="md"
      overflowX="auto"
      whiteSpace="nowrap"
      sx={{
        '&::-webkit-scrollbar': {
          height: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'teal',
          borderRadius: '8px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'gray.200',
          borderRadius: '8px',
        },
      }}
    >
      <Flex
        direction="row"
        align="center"
        gap={4}
        wrap="nowrap"
      >
        {categories.map((category) => (
          <Button
            key={category.href}
            onClick={() => handleClick(category.href)}
            variant="solid"
            colorScheme="teal"
            borderRadius="md"
            overflow="hidden"
            _hover={{ boxShadow: 'lg', transform: 'scale(1.05)' }}
            textAlign="center"
            padding={2}
            width="150px"
            height="auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Image
              src={category.imgSrc}
              alt={category.alt}
              borderRadius="full"
              boxSize="50px"
              objectFit="cover"
              margin="auto"
            />
            <Text marginTop={2} fontSize="sm">
              {category.title}
            </Text>
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default AppCategoryList;
