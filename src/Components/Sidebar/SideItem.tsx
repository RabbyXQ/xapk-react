// SideItem.tsx
import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { useThemeColors } from '../../Utils/Color';

interface SideItemProps {
  name: string;
  icon: React.ElementType; // Change icon to React.ElementType
  url: string;
  isActive: boolean;
  onClick: () => void;
}

const SideItem: React.FC<SideItemProps> = ({ name, icon: Icon, url, isActive, onClick }) => {
  const { sideItemBg, sideItemhoverBg, sideItemtextColor } = useThemeColors();

  return (
    <Link to={url} onClick={onClick} style={{ textDecoration: 'none' }}> {/* Use Link for client-side routing */}
      <Flex
        alignItems="center"
        p={3}
        borderRadius="md"
        bg={isActive ? sideItemBg : 'transparent'}
        _hover={{ bg: sideItemhoverBg }}
      >
        <Box as="span" mr={3}>
          <Icon boxSize={5} color={sideItemtextColor} /> {/* Render the icon component with a color */}
        </Box>
        <Text fontWeight={isActive ? 'bold' : 'normal'} color={sideItemtextColor}>
          {name}
        </Text>
      </Flex>
    </Link>
  );
};

export default SideItem;
