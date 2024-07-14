import React from 'react';
import { Box, Text, Stack, Link, useColorModeValue, Divider, Flex } from '@chakra-ui/react';

const Footer: React.FC = () => {
    const siteName = "XAPK"
  const bgColor = useColorModeValue('gray.100', 'gray.800'); // Background color
  const textColor = useColorModeValue('gray.600', 'gray.200'); // Text color
  const linkColor = useColorModeValue('teal.600', 'teal.300'); // Link color
  const dividerColor = useColorModeValue('gray.300', 'gray.700'); // Divider color

  return (
    <Box bg={bgColor} color={textColor} py="6" borderTopWidth="1px" borderTopColor={dividerColor}>
      <Stack spacing="6" align="center" justify="center" maxW="container.lg" mx="auto" px={{ base: '4', md: '8' }}>
        <Flex direction={{ base: 'column', sm: 'row' }} align="center" justify="space-between" w="full">
          <Text fontSize="sm" fontWeight="bold">
            © {new Date().getFullYear()} {siteName}
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" align="center">
            <Link href="#" color={linkColor} _hover={{ textDecoration: 'underline', color: 'teal.500' }}>
              About Us
            </Link>
            <Link href="#" color={linkColor} _hover={{ textDecoration: 'underline', color: 'teal.500' }}>
              Contact Us
            </Link>
            <Link href="#" color={linkColor} _hover={{ textDecoration: 'underline', color: 'teal.500' }}>
              Privacy Policy
            </Link>
            <Link href="#" color={linkColor} _hover={{ textDecoration: 'underline', color: 'teal.500' }}>
              Terms of Service
            </Link>
          </Stack>
        </Flex>
        
      </Stack>
    </Box>
  );
};

export default Footer;
