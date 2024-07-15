import React from 'react';
import { Box, Text, Stack, Link, useColorModeValue, Flex } from '@chakra-ui/react';

const Footer: React.FC = () => {
  const siteName = "XAPK";
  const bgColor = useColorModeValue('white', 'gray.800'); 
  const textColor = useColorModeValue('gray.600', 'gray.200'); 
  const linkColor = useColorModeValue('teal.600', 'teal.300'); 
  const linkHoverColor = useColorModeValue('teal.400', 'teal.200');
  const dividerColor = useColorModeValue('teal.300', 'teal.700');
  return (
    <Box
      bg={bgColor} // Ensure background color is white
      color={textColor}
      py="6"
      borderTopWidth="1px"
      borderTopColor={dividerColor}
      w="100%" // Ensure full width
      display={{ base: 'none', md: 'block' }} // Hide on mobile
    >
      <Stack spacing="6" align="center" justify="center" px={{ base: '4', md: '8' }}>
        <Flex direction={{ base: 'column', sm: 'row' }} align="center" justify="space-between" w="full">
          <Text fontSize="sm" fontWeight="bold">
            © {new Date().getFullYear()} {siteName}
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" align="center">
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              About Us
            </Link>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Contact Us
            </Link>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Privacy Policy
            </Link>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Terms of Service
            </Link>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Footer;
