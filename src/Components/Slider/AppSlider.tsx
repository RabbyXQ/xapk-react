import React from 'react';
import { Box, Image, Text, Stack } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data for the slider
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
  },
  {
    title: 'Instagram',
    description: 'Share your moments with your friends.',
    developer: 'Instagram',
    rating: '4.5',
    reviews: '1.5M',
    installs: '3B+',
    image: 'https://play-lh.googleusercontent.com/BGf18IZB37IUXS4z6G7hZsm9L1gK3gogT4Muf3a6lxukV1w6MLbRZc4X5srrA4YmHhZk=s96',
    packageName: 'com.instagram.android',
  },
  // Add more items as needed
];

const AppSlider: React.FC = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    // Responsive breakpoints
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box maxW="100%" overflow="hidden">
      <Slider {...sliderSettings}>
        {sliderData.map((item, index) => (
          <Box key={index} p={4} bg="gray.100" borderRadius="md">
            <Image src={item.image} alt={item.title} borderRadius="md" mb={4} />
            <Stack spacing={3}>
              <Text fontSize="lg" fontWeight="bold">
                {item.title}
              </Text>
              <Text fontSize="md">{item.description}</Text>
              <Text fontSize="sm" color="gray.600">
                Developer: {item.developer}
              </Text>
              <Text fontSize="sm" color="gray.600">
                Rating: {item.rating} | Reviews: {item.reviews} | Installs: {item.installs}
              </Text>
              <Text fontSize="sm" color="gray.600">
                Package Name: {item.packageName}
              </Text>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AppSlider;
