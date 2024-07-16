import { InfoIcon, SunIcon, SearchIcon, StarIcon, SettingsIcon } from '@chakra-ui/icons';

// Define the type for menu item
interface MenuItem {
  name: string;
  icon: React.ElementType; // Use React.ElementType for icon components
  url: string;
}

// Define and export the menuItems array
const menuItems: MenuItem[] = [
  { name: 'Home', icon: InfoIcon, url: '/' },
  { name: 'Apps', icon: SunIcon, url: '/apps' },
  { name: 'Explore', icon: SearchIcon, url: '#' },
  { name: 'Favorites', icon: StarIcon, url: '#' },
  { name: 'Settings', icon: SettingsIcon, url: '#' },
];

export default menuItems;
