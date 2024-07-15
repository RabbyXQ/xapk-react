import React, { useState } from 'react';
import { Box, Avatar, Text, Collapse, VStack, Button, useColorModeValue } from '@chakra-ui/react';

const Profile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Manage profile details visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  // Toggle the visibility of profile details
  const toggleProfile = () => setIsOpen(prev => !prev);

  // Define colors based on color mode
  const avatarBg = useColorModeValue('gray.200', 'gray.700');
  const profileBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  // Dynamic user data
  const userName = "John Doe"; // Replace with dynamic user name
  const profilePicUrl = "https://bit.ly/dan-abramov"; // Replace with dynamic profile picture URL

  return (
    <Box position="relative">
      {isLoggedIn ? (
        <>
          {/* Avatar */}
          <Avatar
            size="sm"
            name={userName}
            src={profilePicUrl}
            bg={avatarBg}
            cursor="pointer"
            onClick={toggleProfile}
            mb="4"
            my="2"
          />

          {/* Profile Details */}
          <Collapse in={isOpen}>
            <Box
              position="absolute"
              top="100%" // Position below the avatar
              right="0"
              bg={profileBg}
              boxShadow="md"
              borderRadius="md"
              p="4"
              mt="2"
              zIndex="2"
              width="250px" // Set a fixed width for the profile dropdown
              transition="all 0.3s ease-in-out" // Smooth transition for appearance
            >
              <VStack spacing="4" align="start">
                <Text fontWeight="bold" color={textColor}>{userName}</Text>
                <Text color={textColor}>Email: user@example.com</Text>
                <Text color={textColor}>Profile Settings</Text>
                <Text color={textColor}>Logout</Text>
              </VStack>
            </Box>
          </Collapse>
        </>
      ) : (
        <Button my="2" size="sm" colorScheme="teal" onClick={() => setIsLoggedIn(true)}>
          Login
        </Button>
      )}
    </Box>
  );
};

export default Profile;
