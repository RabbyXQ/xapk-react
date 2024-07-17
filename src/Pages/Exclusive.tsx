import { Box, Image, Flex, Button, Text, IconButton, useColorMode } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

const colors = {
  light: {
    hoverColor: '#00d49f',
    textColor: 'black',
    backgroundColor: 'white',
    buttonBg: '#138021',
    buttonHoverBg: '#3dd382',
    white: 'white',
    rgbaBlack50: 'rgba(0, 0, 0, 0.5)',
  },
  dark: {
    hoverColor: '#3dd382',
    textColor: 'white',
    backgroundColor: 'gray.800',
    buttonBg: '#138021',
    buttonHoverBg: '#3dd382',
    white: 'white',
    rgbaBlack50: 'rgba(0, 0, 0, 0.5)',
  }
};

const exclusiveItems = [
  {
    title: "Genshin Impact",
    link: "https://apkpure.com/genshin-impact/com.miHoYo.GenshinImpact",
    imgSrc: "https://image.winudf.com/v2/user/admin/YWRtaW5fQmFubmVyLTEwMjR4NTAwLmpwZ18xNzEwMzAzMzA1ODA0/banner.webp?w=360&fakeurl=1&type=.webp",
    iconSrc: "https://image.winudf.com/v2/image1/Y29tLm1pSG9Zby5HZW5zaGluSW1wYWN0X2ljb25fMTY0NDk2ODU0Ml8wNTc/icon.webp?w=48&fakeurl=1&type=.webp",
    downloadLink: "https://apkpure.com/genshin-impact/com.miHoYo.GenshinImpact/download"
  },
  {
    title: "SMASH LEGENDS : Action Fight",
    link: "https://apkpure.com/smash-legends-action-fight/com.linegames.sl",
    imgSrc: "https://image.winudf.com/v2/image1/Y29tLmxpbmVnYW1lcy5zbF9iYW5uZXJfMTY4MTIzNTIwMF8wODk/banner.webp?w=360&fakeurl=1&type=.webp",
    iconSrc: "https://image.winudf.com/v2/image1/Y29tLmxpbmVnYW1lcy5zbF9pY29uXzE3MjExMDEwMjlfMDE5/icon.webp?w=48&fakeurl=1&type=.webp",
    downloadLink: "https://apkpure.com/smash-legends-action-fight/com.linegames.sl/download"
  },
  {
    title: "MONOPOLY GO!",
    link: "https://apkpure.com/monopoly-go/com.scopely.monopolygo",
    imgSrc: "https://image.winudf.com/v2/image1/Y29tLnNjb3BlbHkubW9ub3BvbHlnb19iYW5uZXJfMTcxNDU1ODMzMV8wMTk/banner.webp?w=360&fakeurl=1&type=.webp",
    iconSrc: "https://image.winudf.com/v2/image1/Y29tLnNjb3BlbHkubW9ub3BvbHlnb19pY29uXzE3MDYxMzcwNTdfMDQ1/icon.webp?w=48&fakeurl=1&type=.webp",
    downloadLink: "https://apkpure.com/monopoly-go/com.scopely.monopolygo/download"
  },
  {
    title: "Assoluto Racing",
    link: "https://apkpure.com/assoluto-racing/com.infinityvector.assolutoracing",
    imgSrc: "https://image.winudf.com/v2/image1/Y29tLmluZmluaXR5dmVjdG9yLmFzc29sdXRvcmFjaW5nX2Jhbm5lcl8xNzIxMTk5ODM3XzA0Nw/banner.webp?w=360&fakeurl=1&type=.webp",
    iconSrc: "https://image.winudf.com/v2/image1/Y29tLmluZmluaXR5dmVjdG9yLmFzc29sdXRvcmFjaW5nX2ljb25fMTU5NjQyOTMyN18wNTc/icon.webp?w=48&fakeurl=1&type=.webp",
    downloadLink: "https://apkpure.com/assoluto-racing/com.infinityvector.assolutoracing/download"
  }
];

const Exclusive: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { colorMode } = useColorMode();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value as needed
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const currentColors = colors[colorMode];

  return (
    <Box position="relative" overflow="hidden">
      <IconButton
        aria-label="Scroll left"
        icon={<ChevronLeftIcon />}
        position="absolute"
        top="50%"
        left="0"
        transform="translateY(-50%)"
        zIndex="1"
        onClick={() => scroll('left')}
        bg={currentColors.buttonBg}
        color={currentColors.white}
        _hover={{ bg: currentColors.buttonHoverBg }}
      />
      <IconButton
        aria-label="Scroll right"
        icon={<ChevronRightIcon />}
        position="absolute"
        top="50%"
        right="0"
        transform="translateY(-50%)"
        zIndex="1"
        onClick={() => scroll('right')}
        bg={currentColors.buttonBg}
        color={currentColors.white}
        _hover={{ bg: currentColors.buttonHoverBg }}
      />
      <Flex
        ref={scrollContainerRef}
        direction="row"
        wrap="nowrap"
        overflowX="auto"
        overflowY="hidden"
        sx={{
          '::-webkit-scrollbar': {
            display: 'none'
          },
          'scrollbarWidth': 'none',
          'msOverflowStyle': 'none'
        }}
      >
        {exclusiveItems.map((item, index) => (
          <Box key={index} minWidth="300px" flex="none" m="2">
            <a href={item.link} title={item.title} target="_blank" rel="noopener noreferrer">
              <Box position="relative" mb="4">
                <Image src={item.imgSrc} alt={item.title} objectFit="cover" width="100%" />
                <Box position="absolute" bottom="0" left="0" right="0" p="4" background={currentColors.rgbaBlack50}>
                  <Flex align="center">
                    <Image src={item.iconSrc} alt={item.title} boxSize="32px" mr="2" />
                    <Text color={currentColors.white} fontWeight="bold">{item.title}</Text>
                    <Button as="a" 
                        href={item.downloadLink} 
                        target="_blank" 
                        rel="noopener 
                        noreferrer" 
                        ml="auto" 
                        size="sm" 
                        bg={currentColors.buttonBg}
                        _hover={{bg: currentColors.hoverColor}}>
                      Download
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </a>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Exclusive;
