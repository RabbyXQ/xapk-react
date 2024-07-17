import React, { useState } from 'react';
import { Box, Flex, IconButton, Input, useDisclosure, useColorMode, useBreakpointValue, Avatar, Button } from '@chakra-ui/react';
import { SunIcon, MoonIcon, SearchIcon, CloseIcon, HamburgerIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu'; // Ensure correct import path
import DesktopMenu from './DesktopMenu';

const Head: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchToggle = () => {
    setIsSearching(!isSearching);
  };

  const colors = {
    light: {
      headerBg: 'white',
      headerText: 'black',
      iconColor: 'gray.800',
    },
    dark: {
      headerBg: 'gray.800',
      headerText: 'white',
      iconColor: 'white',
    }
  };

  return (
    <>
      <Flex
        as="header"
        bg={colors[colorMode].headerBg}
        color={colors[colorMode].headerText}
        py={2}
        px={4}
        align="center"
        justify="space-between"
        borderBottom="1px"
        borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
        position="sticky"
        top={0}
        left={0}
        width="100%"
        zIndex={20}
      >
        {isSearching ? (
          <>
            <IconButton
              icon={<ArrowBackIcon />}
              aria-label="Back"
              onClick={handleSearchToggle}
              variant="ghost" // Remove border and background
              mr={4}
              color={colors[colorMode].iconColor}
            />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              autoFocus
              width="full"
            />
          </>
        ) : (
          <>
            {isMobile && (
              <IconButton
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                onClick={isOpen ? onClose : onOpen}
                aria-label="Toggle Sidebar"
                variant="ghost" // Remove border and background
                mr={4}
                color={colors[colorMode].iconColor}
              />
            )}

            <Flex align="center" mr={4} width="full">
              <Link to="/">
                <Box fontSize="xl" fontWeight="bold">
                  XAPKHUB
                </Box>
              </Link>
              {!isMobile && <DesktopMenu />}
            </Flex>

            <Flex align="center" ml="auto">
              <IconButton
                icon={<SearchIcon />}
                aria-label="Search"
                variant="ghost" // Remove border and background
                mr={4}
                onClick={handleSearchToggle}
                color={colors[colorMode].iconColor}
              />
              <IconButton
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                aria-label="Toggle Theme"
                variant="ghost" // Remove border and background
                onClick={toggleColorMode}
                mr={4}
                color={colors[colorMode].iconColor}
              />
              {isLoggedIn ? (
                <Avatar
                  name="User Name"
                  src="https://bit.ly/dan-abramov" // Placeholder image URL
                  size="sm"
                  cursor="pointer"
                />
              ) : (
                <Button
                    size="sm"
                  as={Link}
                  to="/login"
                  variant="outline"
                  color={colors[colorMode].iconColor}
                >
                  Login
                </Button>
              )}
            </Flex>
          </>
        )}
      </Flex>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <MobileMenu onClose={onClose} />
      )}
    </>
  );
};

export default Head;
