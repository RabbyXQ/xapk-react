import React from 'react';
import { Box, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import logoLight from './Assets/icon.png'; // Update with the path to your logo image
import logoDark from './Assets/icon.png'; // Update with the path to your logo image

const Logo: React.FC = () => {
  const logoSrc = useBreakpointValue({
    base: logoLight, // Light logo for base and sm breakpoints
    md: logoDark,    // Dark logo for md and larger breakpoints
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="full"
      px="4"
      py="-10"
    >
      <Image
        src={logoSrc}
        alt="Logo"
        boxSize="35px" // Adjust size as needed
        objectFit="contain"
        ml="8"
        mr="2" // Add margin-right to separate logo from text
      />
      <Text
        fontSize={{ base: 'lg', md: '2xl' }} // Responsive font size
        fontWeight="bold"
        color="teal.600" // Adjust color based on your theme
        ml="2" // Margin-left to add space between logo and text
        textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)" // Adds subtle shadow for better readability
        letterSpacing="wider" // Adjust letter spacing for a more modern look
        fontFamily="sans-serif" // Custom font family
      >
        XAPK
      </Text>
    </Box>
  );
};

export default Logo;
