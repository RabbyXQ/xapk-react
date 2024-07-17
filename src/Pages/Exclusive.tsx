import React from 'react';
import Slider from 'react-slick';
import { Box, Image, Link, Text, Heading, useBreakpointValue, useColorMode, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons';

// Define color schemes using JSON format
const colorSchemes = {
  light: {
    primary: '#00d49f',
    secondary: '#138021', // Light mode hover color
    background: 'white',
    text: 'gray.800',
    overlay: 'rgba(255, 255, 255, 0.5)',
  },
  dark: {
    primary: '#3dd382',
    secondary: '#138021', // Dark mode hover color
    background: 'gray.800',
    text: '#ffffff',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
};

interface App {
  title: string;
  image: string;
  packageName: string;
  cover: string;
}

const apps: App[] = [
  {
    title: 'Facebook',
    image: 'https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=s96',
    packageName: 'com.facebook.katana',
    cover: 'https://play-lh.googleusercontent.com/uPC3VsBbDU5IakuOsLLFvFppuKyV6IDEIrX8EZRlR4EiRisRuSNrYCxhc30HiduWdkVi=w1052-h592'
  },
  {
    title: 'Instagram',
    image: 'https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s96-rw',
    packageName: 'com.instagram.android',
    cover: 'https://play-lh.googleusercontent.com/W7J_rhJYWt65XQHaZ7N_6Nptu0wC6n4k9WX59qg46KRpe9b5I1LarJqZ7L-Uu9okgA=w1052-h592'
  },
  // Add more apps here...
];

const Exclusive: React.FC = () => {
  const { colorMode } = useColorMode();
  const colors = colorSchemes[colorMode];

  const breakpoint = useBreakpointValue({ base: 'mobile', md: 'tablet', lg: 'pc' });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: breakpoint === 'mobile' ? 1 : 3,
    slidesToScroll: 1,
    arrows: breakpoint === 'mobile',
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Box p={4} bg={colors.background} color={colors.text}>
      <Heading mb={4} fontSize="lg" textAlign="start" color={colors.text}>Exclusive Apps</Heading>
      <Box position="relative">
        <Slider {...settings}>
          {apps.map((app, index) => (
            <Box
              key={index}
              borderWidth="0"
              borderRadius="md"
              overflow="hidden"
              boxShadow="sm"
              _hover={{ boxShadow: 'md', borderColor: colors.primary }}
              width={breakpoint === 'mobile' ? 'full' : '240px'}
              mx={2}
              position="relative"
              backgroundImage={`url(${app.cover})`}
              backgroundSize="cover"
              backgroundPosition="center"
              height="200px"
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              color={colors.text}
            >
              <Box
                p={2}
                backdropFilter="blur(4px)"
                display="flex"
                alignItems="center"
                bg={colors.overlay}
                position="relative"
              >
                <Image
                  src={app.image}
                  alt={app.title}
                  borderRadius="full"
                  boxSize="40px"
                  mr={2}
                />
                <Text fontSize="sm" fontWeight="bold" _hover={{ color: colors.primary }}>
                  {app.title}
                </Text>
              </Box>
              <Box
                position="absolute"
                bottom={2}
                right={2}
                display="flex"
                justifyContent="flex-end"
                width="auto"
              >
                <Link
                  href={`https://play.google.com/store/apps/details?id=${app.packageName}`}
                  isExternal
                  display="flex"
                  alignItems="center"
                  p={1}
                  borderRadius="md"
                  bg={colors.primary}
                  color={colors.text}
                  _hover={{ bg: '#00a87e' }}
                  fontSize="sm"
                  textAlign="center"
                >
                  <ExternalLinkIcon boxSize="12px" mr={1} />
                  Download
                </Link>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Exclusive;
