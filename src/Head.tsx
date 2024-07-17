// Header.tsx
import React from 'react';
import { Box, Flex, Image, Button, IconButton, Input, InputGroup, InputLeftElement, useDisclosure, useColorMode, Popover, PopoverTrigger, PopoverContent, PopoverBody, VStack, HStack, Text, Link as ChakraLink, Collapse } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" id="header" bg={colorMode === 'light' ? 'white' : 'gray.800'} shadow="md" position="relative">
      <Flex
        align="center"
        justify="space-between"
        p={4}
        maxW="container.lg"
        mx="auto"
        position="relative"
        flexWrap="wrap"
      >
        {/* Hamburger Icon for Mobile */}
        <IconButton
          aria-label="Menu"
          icon={<HamburgerIcon />}
          variant="outline"
          onClick={onOpen}
          display={{ base: 'inline-flex', md: 'none' }}
          position="absolute"
          left={4}
          top="50%"
          transform="translateY(-50%)"
          zIndex="2"
        />

        
        <Link to="/">
          <Image
            src="https://static.apkpure.com/mobile/static/imgs/logo_v1.png"
            alt="Logo"
            height="24px"
            width="100px"
            display="block" 
          />
        </Link>

        {/* Search and Mode Toggle */}
        <Flex align="center" display={{ base: 'none', md: 'flex' }} ml="auto">
          <InputGroup>
            <InputLeftElement>
              <SearchIcon />
            </InputLeftElement>
            <Input placeholder="Search" />
          </InputGroup>
          <Button onClick={toggleColorMode} ml={4}>
            {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </Flex>

        {/* Navigation Menu for Mobile */}
        <Collapse in={isOpen} animateOpacity>
          <Box
            id="nav_new"
            position="fixed"
            left="0"
            top="0"
            bg={colorMode === 'light' ? 'white' : 'gray.800'}
            width="100vw" // Ensure it takes full width of the viewport
            height="100%"
            shadow="md"
            transition="left 0.3s ease-in-out"
            zIndex="10"
            overflowY="auto"
            overflowX="hidden" // Disable horizontal scrolling
            p={4}
            display={{ base: 'block', md: 'none' }}
          >
            <IconButton
              aria-label="Close Menu"
              icon={<CloseIcon />}
              variant="outline"
              onClick={onClose}
              position="absolute"
              top={4}
              right={4}
            />
            <VStack spacing={4} align="start" mt={16}>
              <Link to="/" onClick={onClose}>Home</Link>
              <Link to="/game" onClick={onClose}>Games</Link>
              <Link to="/app" onClick={onClose}>Apps</Link>
              <Popover>
                <PopoverTrigger>
                  <Button variant="link">Articles</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverBody>
                    <VStack spacing={2} align="start">
                      <Link to="/news">News</Link>
                      <Link to="/reviews">Reviews</Link>
                      <Link to="/howto">How To</Link>
                      <Link to="/topics">Topics</Link>
                    </VStack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <Button variant="link">Products</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverBody>
                    <VStack spacing={2} align="start">
                      <Link to="/apkpure-app">APKPure App</Link>
                      <Link to="/apk-downloader">APK Download</Link>
                      <Link to="/aipure">AIPURE</Link>
                      <Link to="/windows-app">Windows APP</Link>
                      <Link to="/iphone-app">iPhone APP</Link>
                      <Link to="/game-store">Game Store</Link>
                      <Link to="/pre-register">Pre-register</Link>
                      <Link to="/chrome-extension">Chrome Extension</Link>
                    </VStack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <ChakraLink href="https://tvonic.com/" isExternal>TVOnic</ChakraLink>
            </VStack>
          </Box>
        </Collapse>

        {/* Desktop Navigation Menu */}
        <Box display={{ base: 'none', md: 'flex' }} ml="auto">
          <HStack spacing={4}>
            <Link to="/app">Apps</Link>
            <Link to="/game">Games</Link>
            <Popover>
              <PopoverTrigger>
                <Button variant="link">Articles</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverBody>
                  <VStack spacing={2} align="start">
                    <Link to="/news">News</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/howto">How To</Link>
                    <Link to="/topics">Topics</Link>
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger>
                <Button variant="link">Products</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverBody>
                  <VStack spacing={2} align="start">
                    <Link to="/apkpure-app">APKPure App</Link>
                    <Link to="/apk-downloader">APK Download</Link>
                    <Link to="/aipure">AIPURE</Link>
                    <Link to="/windows-app">Windows APP</Link>
                    <Link to="/iphone-app">iPhone APP</Link>
                    <Link to="/game-store">Game Store</Link>
                    <Link to="/pre-register">Pre-register</Link>
                    <Link to="/chrome-extension">Chrome Extension</Link>
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <ChakraLink href="https://tvonic.com/" isExternal>TVOnic</ChakraLink>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
