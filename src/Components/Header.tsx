import React, { useState, useEffect, useRef } from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar/Sidebar';
import NavBar from './NavBar/NavBar';
import Logo from './Header/Logo';
import Search from './Search';
import Profile from './Profile'; // Import the Profile component

const Header: React.FC = () => {
  const [showNavBar, setShowNavBar] = useState(true); // State to control NavBar visibility
  const [lastScrollTop, setLastScrollTop] = useState(0); // Track last scroll position
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null); // Timeout for scroll detection

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset;
    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      setShowNavBar(false);
    } else {
      // Scrolling up
      setShowNavBar(true);
    }
    setLastScrollTop(currentScrollTop);

    // Clear previous timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // Set a new timeout to show NavBar after scrolling stops
    setScrollTimeout(setTimeout(() => {
      setShowNavBar(true);
    }, 300)); // Show NavBar after 300ms of inactivity
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollTop, scrollTimeout]);

  return (
    <ChakraProvider>
      <Box>
        {/* Header Container */}
        <Box
          position="fixed"
          top="0"
          left="0"
          w="full"
          bg="white"
          boxShadow="md"
          zIndex="2"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p="4"
        >
          {/* Flex container for Logo, Search, and Profile */}
          <Flex
            alignItems="center"
            w="full"
            maxW="container.xl" // Optional: limit max width for better alignment
          >
            <Sidebar /> {/* Sidebar should be visible here */}
            <Box ml={{ base: '0', md: '8' }}> {/* Adjust margin based on screen size */}
              <Logo />
            </Box>
            <Flex ml="auto" alignItems="center" gap="4"> {/* Align items in a row and add space between them */}
              <Search />
              <Profile /> {/* Add the Profile component here */}
            </Flex>
          </Flex>
        </Box>

        {/* NavBar */}
        <Box
          position="fixed"
          top={showNavBar ? '56px' : '-56px'} // Adjust based on the header height
          left="0"
          w="full"
          zIndex="1"
          bg="white" // Ensure background is set to cover content beneath
          boxShadow="sm" // Add a shadow for separation if needed
          transition="top 0.3s ease" // Smooth transition for visibility change
        >
          <NavBar />
        </Box>

        {/* Main content container */}
        <Box
          mt="56px" // Space for fixed header
          ml={{ base: '0', md: '250px' }} // Space for sidebar on larger screens
          p="4"
          transition="margin 0.3s ease, margin-top 0.3s ease"
        >
          {/* Your main content goes here */}
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Header;
