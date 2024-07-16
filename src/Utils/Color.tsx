import { useColorModeValue } from '@chakra-ui/react';

export const useThemeColors = () => {
  // SideBar Item Color Configuaration
  const sideItemBg = useColorModeValue('teal.100', 'teal.700'); 
  const sideItemhoverBg = useColorModeValue('teal.50', 'teal.600');
  const sideItemtextColor = useColorModeValue('gray.800', 'gray.200'); 

  return { sideItemBg, sideItemhoverBg, sideItemtextColor };
};
