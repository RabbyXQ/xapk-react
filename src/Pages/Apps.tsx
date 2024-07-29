import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Head from './Head';
import Footer from './Footer';
import TopApps from './TopApps';
import AppCategoryList from './AppCategoryList';
import NavBar from '../Components/NavBar/NavBar';
import AppList from './AppList';



const categories = [
  { path: '/apps', title: 'All Apps', imgSrc: "https://apkpure.com/static/image/grey.gif" },
  { path: '/art_and_design', title: 'Art & Design', imgSrc: 'https://apkpure.com/static/image/grey.gif' },
  { path: '/auto_and_vehicles', title: 'Auto & Vehicles', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLnB1bmljYXBwLndob29zaF9pY29uXzE2ODU0NTAzNjZfMDg3/icon.webp?w=48&fakeurl=1&type=.webp' },
  { path: '/beauty', title: 'Beauty', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLmxhamV1bmVhbmRhc3NvY2lhdGVzbGxjLmJhcmJlcmNob3BkZXZfaWNvbl8xNjA1NzcwNzUwXzAwNQ/icon.webp?w=48&fakeurl=1&type=.webp' },
  { path: '/books_and_reference', title: 'Books & Reference', imgSrc: 'https://apkpure.com/static/image/grey.gif' },
  { path: '/business', title: 'Business', imgSrc: 'https://image.winudf.com/v2/image1/dXMuem9vbS52aWRlb21lZXRpbmdzX2ljb25fMTY2NDIyNjc2NV8wMjE/icon.webp?w=48&fakeurl=1&type=.webp' },
  { path: '/comics', title: 'Comics', imgSrc: 'https://apkpure.com/static/image/grey.gif' },
  { path: '/communication', title: 'Communication', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLndoYXRzYXBwX2ljb25fMTU1OTg1MDA2NF8wNjI/icon.webp?w=48&fakeurl=1&type=.webp' },
  { path: '/dating', title: 'Dating', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLnRpbmRlcl9pY29uX2lkXzE2MDM0MDczNTdfMDc5/icon.webp?w=48&fakeurl=1&type=.webp' },
  { path: '/education', title: 'Education', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLngweC5jb2xvdXI5MWNsdWJfaWNvbl8xNzA0NTYwODc4XzAwNg/icon.webp?w=48&fakeurl=1&type=.webp' },
  { path: '/entertainment', title: 'Entertainment', imgSrc: 'https://image.winudf.com/v2/image1/ZGV2X2ltYWdlXzI2ODU2MTY1XzIwOTUzMV8yMDIzMTIxMzExMjMxODk0OA/icon.webp?w=48&fakeurl=1&type=.webp' },
  { path: '/events', title: 'Events', imgSrc: 'https://apkpure.com/static/image/grey.gif' },
  { path: '/finance', title: 'Finance', imgSrc: 'https://image.winudf.com/v2/image1/aWQuZGFuYV9pY29uXzE1NjcyMTcyNjRfMDU2/icon.webp?w=48&fakeurl=1&type=.webp' },
  { path: '/food_and_drink', title: 'Food & Drink', imgSrc: 'https://image.winudf.com/v2/image1/cnUuaW5zdGFtYXJ0X2ljb25fMTcxOTkwMTcyM18wMTM/icon.webp?w=48&fakeurl=1&type=.webp' },
  { path: '/health_and_fitness', title: 'Health & Fitness', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLmZvY3Vzb25zaGFyaW5nLndhbGtjYXNoX2ljb25fMTcwNzMwMDUwMl8wODg/icon.webp?w=48&fakeurl=1&type=.webp' },
  { path: '/house_and_home', title: 'House & Home', imgSrc: 'https://image.winudf.com/v2/image1/cnUuc2liZ2VuY28uZ2VuZXJhbF9pY29uXzE1NDk2MTI3NDlfMDg4/icon.webp?w=48&fakeurl=1&type=.webp' },
  { path: '/libraries_and_demo', title: 'Libraries & Demo', imgSrc: 'https://apkpure.com/static/image/grey.gif' },
  { path: '/lifestyle', title: 'Lifestyle', imgSrc: 'https://apkpure.com/static/image/grey.gif' },
  { path: '/maps_and_navigation', title: 'Maps & Navigation', imgSrc: 'https://image.winudf.com/v2/image1/cnUueWFuZGV4LnRheGltZXRlcl9pY29uXzE2NzIzODg5NDVfMDEw/icon.webp?w=48&fakeurl=1&type=.webp' },
  { path: '/medical', title: 'Medical', imgSrc: 'https://image.winudf.com/v2/image1/YXBwLmJwanMubW9iaWxlX2ljb25fMTcwMjY5NzQ2M18wMTM/icon.webp?w=48&fakeurl=1&type=.webp' },
  { path: '/music_and_audio', title: 'Music & Audio', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLnNwb3RpZnkubXVzaWNfaWNvbl8xNzE2NDYwMTQ4XzA0Nw/icon.webp?w=48&fakeurl=1&type=.webp' },
  { path: '/news_and_magazines', title: 'News & Magazines', imgSrc: 'https://image.winudf.com/v2/image1/Y29tLnR3aXR0ZXIuYW5kcm9pZC5saXRlX2ljb25fMTU1NTU2MDI...' }
];

interface App {
  title: string;
  image: string;
  href: string;
  rating: number; // Rating out of 5
}


const apps: App[] = [
  {
    title: "Chamet - Live Video Chat & Meet",
    image: "https://image.winudf.com/v2/image1/Y29tLmhrZnVsaWFvLmNoYW1ldF9pY29uXzE2ODQ5NDAzNjVfMDM2/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.5
  },
  {
    title: "OKX: Buy Bitcoin BTC & Crypto",
    image: "https://image.winudf.com/v2/image1/Y29tLm9raW5jLm9rZXguZ3BfaWNvbl8xNjQyNjY2ODA1XzA0OA/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.2
  },
  {
    title: "Careem Captain",
    image: "https://image.winudf.com/v2/image1/Y29tLmNhcmVlbS5hZG1hX2ljb25fMTU1OTY1NzM2MV8wODA/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.7
  },
  {
    title: "Love and Deepspace",
    image: "https://image.winudf.com/v2/image1/Y29tLnBhcGVnYW1lcy5seXNrLmVuX2ljb25fMTcwNTQ4MzEwOV8wNjU/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 3.9
  },
  {
    title: "MX Player",
    image: "https://image.winudf.com/v2/image1/Y29tLm14dGVjaC52aWRlb3BsYXllci5hZF9pY29uXzE1NTgxMTM0NzJfMDcx/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.8
  },
  {
    title: "Tonkeeper — TON Wallet",
    image: "https://image.winudf.com/v2/image1/Y29tLnRvbl9rZWVwZXJfaWNvbl8xNzE2ODE3MTEwXzAxMg/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.1
  },
  {
    title: "Whoosh",
    image: "https://image.winudf.com/v2/image1/Y29tLnB1bmljYXBwLndob29zaF9pY29uXzE2ODU0NTAzNjZfMDg3/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.3
  },
  {
    title: "TextNow: Call + Text Unlimited",
    image: "https://image.winudf.com/v2/image1/Y29tLmVuZmxpY2suYW5kcm9pZC5UZXh0Tm93X2ljb25fMTY1Mjc0MzUzN18wNDY/icon.webp?w=102&fakeurl=1&type=.webp",
    href: "#",
    rating: 4.0
  }
];


const Apps: React.FC = () => {

  return (
    <ChakraProvider>
      <Head/>
      <NavBar items={categories}/>
        <AppList  apps={apps} title="All Apps"/>
      <Footer/>
    </ChakraProvider>
  );
};

export default Apps;
