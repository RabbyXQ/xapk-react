import { InfoOutlineIcon, SettingsIcon } from '@chakra-ui/icons';

export const adminSidebarItems = [
  { name: 'Dashboard', icon: InfoOutlineIcon, url: '/admin/dashboard' },
  { name: 'Platforms', icon: InfoOutlineIcon, url: '/admin/platforms' },
  { name: 'Apps', icon: SettingsIcon, url: '/admin/apps/' },
  { name: 'Games', icon: SettingsIcon, url: '/admin/games/' },
  { name: 'Uploads', icon: SettingsIcon, url: '/admin/uploads/' },
  { name: 'Logout', icon: SettingsIcon, url: '/admin/logout/' },
];
