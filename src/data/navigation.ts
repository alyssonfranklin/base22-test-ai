import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: 'home',
  },
  {
    label: 'News',
    href: '/news',
    icon: 'news',
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: 'folder',
    items: [
      {
        label: 'Documents',
        href: '/resources/documents',
      },
      {
        label: 'Forms',
        href: '/resources/forms',
      },
      {
        label: 'Policies',
        href: '/resources/policies',
      },
    ],
  },
  {
    label: 'Directory',
    href: '/directory',
    icon: 'people',
  },
  {
    label: 'Calendar',
    href: '/calendar',
    icon: 'calendar',
  },
  {
    label: 'Training',
    href: '/training',
    icon: 'learn',
  },
  {
    label: 'Help Desk',
    href: '/help-desk',
    icon: 'support',
  },
];

export const userNavigation: NavItem[] = [
  {
    label: 'My Profile',
    href: '/profile',
    icon: 'profile',
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: 'settings',
  },
  {
    label: 'Notifications',
    href: '/notifications',
    icon: 'bell',
  },
  {
    label: 'Sign Out',
    href: '/signout',
    icon: 'logout',
  },
];