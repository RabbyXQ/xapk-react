import React from 'react';
import { Box, Image, Text, Stack, IconButton, useColorModeValue } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderData = [
  {
    title: 'Facebook',
    description: 'Connect with friends and the world around you.',
    developer: 'Facebook',
    rating: '4.2',
    reviews: '2M',
    installs: '5B+',
    image: 'https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=s96',
    packageName: 'com.facebook.katana',
    cover: 'https://play-lh.googleusercontent.com/uPC3VsBbDU5IakuOsLLFvFppuKyV6IDEIrX8EZRlR4EiRisRuSNrYCxhc30HiduWdkVi=w1052-h592'
  },
  {
    title: 'Instagram',
    description: 'Share your moments with your friends.',
    developer: 'Instagram',
    rating: '4.5',
    reviews: '1.5M',
    installs: '3B+',
    image: 'https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s96-rw',
    packageName: 'com.instagram.android',
    cover: 'https://play-lh.googleusercontent.com/W7J_rhJYWt65XQHaZ7N_6Nptu0wC6n4k9WX59qg46KRpe9b5I1LarJqZ7L-Uu9okgA=w1052-h592'
  },
];

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  const bg = useColorModeValue('white', 'gray.700');
  return (
    <IconButton
      aria-label="Next"
      icon={<ArrowForwardIcon />}
      onClick={onClick}
      className={className}
      position="absolute"
      right="0"
      top="50%"
      transform="translateY(-50%)"
      zIndex="1"
      bg={bg}
      borderRadius="full"
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  const bg = useColorModeValue('white', 'gray.700');
  return (
    <IconButton
      aria-label="Previous"
      icon={<ArrowBackIcon />}
      onClick={onClick}
      className={className}
      position="absolute"
      left="0"
      top="50%"
      transform="translateY(-50%)"
      zIndex="1"
      bg={bg}
      borderRadius="full"
    />
  );
};

const AppSlider: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const textBoxBg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.8)');

  return (
    <Box maxW="100%" overflow="hidden" position="relative" p={2}>
      <Slider {...sliderSettings}>
        {sliderData.map((item, index) => (
          <Box
            key={index}
            p={2}
            borderRadius="md"
            overflow="hidden"
            position="relative"
            height={{ base: "200px", md: "400px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            _before={{
              content: `""`,
              backgroundImage: `url(${item.cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              filter: "blur(2px)",
              zIndex: -1
            }}
          >
            <Box bg={textBoxBg} p={2} borderRadius="md" maxW={{ base: "90%", md: "sm" }} textAlign="center">
              <Image
                src={item.image}
                alt={item.title}
                borderRadius="full"
                boxSize={{ base: "48px", md: "96px" }}
                mb={2}
                mx="auto"
              />
              <Stack spacing={1}>
                <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="bold">
                  {item.title}
                </Text>
                <Text fontSize={{ base: "xs", md: "md" }}>{item.description}</Text>
                <Text fontSize="xs" color="gray.600">
                  Developer: {item.developer}
                </Text>
                <Text fontSize="xs" color="gray.600">
                  Rating: {item.rating} | Reviews: {item.reviews} | Installs: {item.installs}
                </Text>
                <Text fontSize="xs" color="gray.600">
                  Package Name: {item.packageName}
                </Text>
              </Stack>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AppSlider;
