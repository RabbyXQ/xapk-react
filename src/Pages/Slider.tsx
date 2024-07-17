import React from 'react';
import Slider from 'react-slick';
import { Box, Image, Text, Button, IconButton } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Slider.css'; // Import the custom CSS

const sliderData = [
    {
      title: "Assoluto Racing APK",
      href: "https://apkpure.com/assoluto-racing/com.infinityvector.assolutoracing",
      imgSrc: "https://image.winudf.com/v2/image1/Y29tLmluZmluaXR5dmVjdG9yLmFzc29sdXRvcmFjaW5nX2Jhbm5lcl8xNzIxMTk5ODM3XzA0Nw/banner.webp?w=360&fakeurl=1&type=.webp",
      iconSrc: "https://image.winudf.com/v2/image1/Y29tLmluZmluaXR5dmVjdG9yLmFzc29sdXRvcmFjaW5nX2ljb25fMTU5NjQyOTMyN18wNTc/icon.webp?w=48&fakeurl=1&type=.webp",
      name: "Assoluto Racing",
      downloadLink: "https://apkpure.com/assoluto-racing/com.infinityvector.assolutoracing/download"
    },
    {
      title: "MONOPOLY GO! APK",
      href: "https://apkpure.com/monopoly-go/com.scopely.monopolygo",
      imgSrc: "https://image.winudf.com/v2/image1/Y29tLnNjb3BlbHkubW9ub3BvbHlnb19iYW5uZXJfMTcxNDU1ODMzMV8wMTk/banner.webp?w=360&fakeurl=1&type=.webp",
      iconSrc: "https://image.winudf.com/v2/image1/Y29tLnNjb3BlbHkubW9ub3BvbHlnb19pY29uXzE3MDYxMzcwNTdfMDQ1/icon.webp?w=48&fakeurl=1&type=.webp",
      name: "MONOPOLY GO!",
      downloadLink: "https://apkpure.com/monopoly-go/com.scopely.monopolygo/download"
    },
    {
      title: "Genshin Impact APK",
      href: "https://apkpure.com/genshin-impact/com.miHoYo.GenshinImpact",
      imgSrc: "https://image.winudf.com/v2/user/admin/YWRtaW5fQmFubmVyLTEwMjR4NTAwLmpwZ18xNzEwMzAzMzA1ODA0/banner.webp?w=360&fakeurl=1&type=.webp",
      iconSrc: "https://image.winudf.com/v2/image1/Y29tLm1pSG9Zby5HZW5zaGluSW1wYWN0X2ljb25fMTY0NDk2ODU0Ml8wNTc/icon.webp?w=48&fakeurl=1&type=.webp",
      name: "Genshin Impact",
      downloadLink: "https://apkpure.com/genshin-impact/com.miHoYo.GenshinImpact/download"
    },
    {
      title: "SMASH LEGENDS : Action Fight APK",
      href: "https://apkpure.com/smash-legends-action-fight/com.linegames.sl",
      imgSrc: "https://image.winudf.com/v2/image1/Y29tLmxpbmVnYW1lcy5zbF9iYW5uZXJfMTY4MTIzNTIwMF8wODk/banner.webp?w=360&fakeurl=1&type=.webp",
      iconSrc: "https://image.winudf.com/v2/image1/Y29tLmxpbmVnYW1lcy5zbF9pY29uXzE2NzYyNjY2MjVfMDE0/icon.webp?w=48&fakeurl=1&type=.webp",
      name: "SMASH LEGENDS : Action Fight",
      downloadLink: "https://apkpure.com/smash-legends-action-fight/com.linegames.sl/download"
    }
  ];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={className}
      style={{ ...style, display: 'block', right: '10px' }}
      icon={<ArrowRightIcon />}
      aria-label="Next Slide"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={className}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      icon={<ArrowLeftIcon />}
      aria-label="Previous Slide"
      onClick={onClick}
    />
  );
}

const SliderComponent: React.FC = () => {
  return (
    <Box id="top-slide-banner" className="slide-banner">
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <Box key={index} className="banner-item" as="a" href={item.href} title={item.title} style={{ display: 'block', verticalAlign: 'top', position: 'relative' }}>
            <Image className="banner-bg" alt={item.title} src={item.imgSrc} width="100%" height="auto" />
            <Box className="mask" />
            <Box className="info" position="absolute" bottom="20px" left="20px" backgroundColor="rgba(0, 0, 0, 0.5)" p="10px" borderRadius="5px">
              <Image className="icon" alt={item.name} src={item.iconSrc} width="32px" height="32px" />
              <Text className="name" color="white" fontWeight="bold">{item.name}</Text>
              <Button as="a" href={item.downloadLink} className="button" colorScheme="teal" mt="5px">Download</Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderComponent;
