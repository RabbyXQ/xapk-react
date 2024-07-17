import React, { useState } from 'react';
import { Box, Flex, IconButton, Collapse, Text, useColorMode, useDisclosure, useTheme } from '@chakra-ui/react';
import { SunIcon, MoonIcon, CloseIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

// Define menu items in JSON format
const menuItems = [
  { label: 'Home', path: '/' },
  {
    label: 'Categories',
    path: '#',
    subMenu: [
      { label: 'Apps', path: '/apps' },
      { label: 'Games', path: '/games' },
      { label: 'Blog', path: '/blog' },
      { label: 'Forum', path: '/forum' },
    ]
  },
  { label: 'Contact', path: '/contact' },
];

// Define color schemes as JSON objects
const colorSchemes = {
  light: {
    bgColor: 'rgba(0, 0, 0, 0.9)', // Light mode background with slight opacity
    textColor: 'white',
    hoverBgColor: 'teal.200',
    subMenuHoverBgColor: 'teal.100',
  },
  dark: {
    bgColor: 'rgba(0, 0, 0, 0.8)', // Dark mode background with opacity
    textColor: 'white',
    hoverBgColor: 'gray.700',
    subMenuHoverBgColor: 'gray.600',
  }
};

const MobileMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Use the color scheme based on the current color mode
  const currentColors = colorSchemes[colorMode];

  const handleMenuToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      as="aside"
      position="fixed"
      top="60px" // Adjust this based on the height of your header
      left={0}
      width="100%"
      height={`calc(100% - 60px)`} // Full height minus header height
      bg={currentColors.bgColor}
      color={currentColors.textColor}
      zIndex={10} // Ensure this is below the header
      boxShadow="md"
      p={4}
      display="flex"
      flexDirection="column"
      backdropFilter="blur(10px)" // Apply blur effect
    >
      <Flex direction="column" mb={8} width="full">
        {menuItems.map((item, index) => (
          <Box key={index} mb={2}>
            <Link to={item.path} onClick={item.subMenu ? () => handleMenuToggle(index) : onClose}>
              <Flex
                align="center"
                p={2}
                _hover={{
                  bg: currentColors.hoverBgColor,
                  transform: 'scale(1.05)', // Zoom effect on hover
                  transition: 'transform 0.3s ease', // Smooth zoom transition
                }}
                transition="background-color 0.3s ease"
              >
                <Text fontSize="md" fontWeight="semibold">{item.label}</Text>
                {item.subMenu && (
                  <IconButton
                    icon={openIndex === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    aria-label={openIndex === index ? "Collapse" : "Expand"}
                    variant="link"
                    ml={2}
                    transition="transform 0.3s ease" // Smooth transition for the arrow
                    transform={openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'} // Rotation animation
                  />
                )}
              </Flex>
            </Link>
            {item.subMenu && (
              <Collapse in={openIndex === index} animateOpacity>
                <Box pl={4} mt={2} transition="max-height 0.3s ease" overflow="hidden">
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link key={subIndex} to={subItem.path} onClick={onClose}>
                      <Flex
                        align="center"
                        p={2}
                        _hover={{
                          bg: currentColors.subMenuHoverBgColor,
                          transform: 'scale(1.03)', // Slight zoom effect for sub-menu items
                          transition: 'transform 0.3s ease', // Smooth zoom transition
                        }}
                        transition="background-color 0.3s ease"
                      >
                        <Text fontSize="sm">{subItem.label}</Text>
                      </Flex>
                    </Link>
                  ))}
                </Box>
              </Collapse>
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default MobileMenu;
