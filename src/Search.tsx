import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton, Input, useColorModeValue, Flex } from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

const Search: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Track the visibility of the search bar
  const searchRef = useRef<HTMLDivElement>(null);

  // Toggle search bar visibility
  const toggleSearchBar = () => setIsOpen(prev => !prev);

  // Close the search bar
  const closeSearchBar = () => setIsOpen(false);

  // Handle clicks outside the search bar to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close the search bar if clicked outside
      }
    };

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Define colors based on color mode
  const searchBarBg = useColorModeValue('white', 'gray.800');
  const inputBg = useColorModeValue('gray.50', 'gray.700');
  const inputColor = useColorModeValue('gray.800', 'white');
  const placeholderColor = useColorModeValue('gray.500', 'gray.400');
  const iconColor = useColorModeValue('teal.500', 'teal.300'); // Teal color for the icon

  return (
    <Box position="relative" display="inline-block">
      {/* Button to Toggle Search Bar */}
      <IconButton
      size="sm"
        aria-label={isOpen ? 'Close Search Bar' : 'Open Search Bar'}
        icon={isOpen ? <CloseIcon /> : <SearchIcon />}
        onClick={toggleSearchBar}
        variant="outline"
        colorScheme="teal"
        color={iconColor}
        borderRadius="full"
      />

      {/* Conditionally Render Search Bar with Animation */}
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            position="fixed" // Position fixed to overlay the screen
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg={searchBarBg}
            boxShadow="md"
            p="4"
            display="flex"
            justifyContent="center"
            zIndex="1"
            ref={searchRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }} // Adjust the duration to control the speed of the animation
          >
            <Flex direction="column" w="full" maxW="md" position="relative">
              <Input
                placeholder="Search..."
                variant="outline"
                bg={inputBg}
                color={inputColor}
                _placeholder={{ color: placeholderColor }}
                borderColor={iconColor}
                borderRadius="md"
                w="full"
                pl="10" // Add padding to accommodate the icon
              />
            </Flex>

            {/* Close Button at Top-Right Corner of the Screen */}
            <IconButton
              aria-label="Close Search Bar"
              icon={<CloseIcon />}
              onClick={closeSearchBar}
              variant="outline"
              colorScheme="teal"
              color={iconColor}
              borderRadius="full"
              position="absolute"
              top="4"
              right="4"
              zIndex="2"
            />
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Search;
