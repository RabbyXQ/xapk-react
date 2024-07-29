import React from 'react';
import {
  Box,
  HStack,
  Button,
  Text,
  Image,
  useColorModeValue,

} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';


interface Items{
  path: string,
  title: string,
  imgSrc: string
}

interface NavBarProps{
  items: Items[]
}

const NavBar: React.FC<NavBarProps> = ({items}) => {
  const location = useLocation();
  const bgColor = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');
  const buttonBg = useColorModeValue('teal.50', 'teal.800');
  const buttonHoverBg = useColorModeValue('teal.100', 'teal.700');
  const buttonActiveBg = useColorModeValue('teal.200', 'teal.600');

  const getActiveButton = (path: string) => {
    return location.pathname === path ? buttonActiveBg : buttonBg;
  };

  return (
    <Box
      bg={bgColor}
      w="full"
      h="12"
      top="2"
      left="0"
      transition="transform 0.3s ease"
      zIndex="1"
      boxShadow="md"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      position="relative"
      overflowX="auto"
      whiteSpace="nowrap"
      sx={{
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
      }}
    >
      <HStack
        spacing="4"
        align="center"
        h="full"
        px="4"
        minW="max-content"
        whiteSpace="nowrap"
      >
        {items.map(({ path, title, imgSrc }) => (
          <Link key={path} to={path}>
            <Button
              aria-label={title}
              variant="solid"
              bg={getActiveButton(path)}
              color={color}
              size="sm"
              fontSize="sm"
              borderRadius="full"
              _hover={{
                bg: buttonHoverBg,
                transform: 'scale(1.05)',
                transition: 'background-color 0.3s, transform 0.3s',
              }}
              _active={{
                bg: buttonActiveBg,
                transform: 'scale(0.98)',
              }}
              _focus={{ boxShadow: 'none' }}
              leftIcon={<Image src={imgSrc} boxSize="24px" />}
            >
              <Text>{title}</Text>
            </Button>
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default NavBar;
