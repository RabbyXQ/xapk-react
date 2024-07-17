// src/Pages/DesktopMenu.tsx

import React from 'react';
import { Flex, Text, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const DesktopMenu: React.FC = () => {
  const { colorMode } = useColorMode();

  // Define colors based on the color mode
  const colors = {
    light: {
      text: 'black',
      hover: 'teal.500',
      active: 'teal.700',
    },
    dark: {
      text: 'white',
      hover: 'teal.300',
      active: 'teal.500',
    },
  };

  // Choose colors based on the current color mode
  const currentColors = colorMode === 'light' ? colors.light : colors.dark;

  // Define menu items
  const menuItems = [
    { label: 'Apps', path: '/apps' },
    { label: 'Games', path: '/games' },
    { label: 'Blog', path: '/blog' },
    { label: 'Forum', path: '/forum' },
  ];

  return (
    <Flex px={10} align="center" gap={4}>
      {menuItems.map((item) => (
        <Link key={item.path} to={item.path}>
          <Text
            fontSize="md"
            fontWeight="semibold"
            color={currentColors.text}
            _hover={{ color: currentColors.hover }}
            _active={{ color: currentColors.active }}
            transition="color 0.3s"
          >
            {item.label}
          </Text>
        </Link>
      ))}
    </Flex>
  );
};

export default DesktopMenu;
