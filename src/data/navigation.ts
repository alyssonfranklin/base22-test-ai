import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    label: 'My Workspace',
    href: '/workspace',
    icon: 'workspace',
    items: [
      {
        label: 'Dashboard',
        href: '/workspace/dashboard',
      },
      {
        label: 'Tasks',
        href: '/workspace/tasks',
      },
      {
        label: 'Calendar',
        href: '/workspace/calendar',
      },
      {
        label: 'Documents',
        href: '/workspace/documents',
      },
    ],
  },
  {
    label: 'Life & Career',
    href: '/life-career',
    icon: 'career',
    items: [
      {
        label: 'Benefits',
        href: '/life-career/benefits',
      },
      {
        label: 'Learning',
        href: '/life-career/learning',
      },
      {
        label: 'Career Development',
        href: '/life-career/development',
      },
      {
        label: 'Health & Wellness',
        href: '/life-career/wellness',
      },
    ],
  },
  {
    label: 'Self Service',
    href: '/self-service',
    icon: 'service',
    items: [
      {
        label: 'Time & Attendance',
        href: '/self-service/time',
      },
      {
        label: 'Pay & Taxes',
        href: '/self-service/pay',
      },
      {
        label: 'Personal Information',
        href: '/self-service/personal',
      },
      {
        label: 'Expense Reports',
        href: '/self-service/expenses',
      },
    ],
  },
  {
    label: 'Explore',
    href: '/explore',
    icon: 'explore',
    items: [
      {
        label: 'Departments',
        href: '/explore/departments',
      },
      {
        label: 'Directory',
        href: '/explore/directory',
      },
      {
        label: 'Locations',
        href: '/explore/locations',
      },
      {
        label: 'Organization Chart',
        href: '/explore/org-chart',
      },
    ],
  },
  {
    label: 'News Feed',
    href: '/news',
    icon: 'news',
    items: [
      {
        label: 'Company News',
        href: '/news/company',
      },
      {
        label: 'Announcements',
        href: '/news/announcements',
      },
      {
        label: 'Events',
        href: '/news/events',
      },
      {
        label: 'Regional Updates',
        href: '/news/regional',
      },
    ],
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
    label: 'Bookmarks',
    href: '/bookmarks',
    icon: 'bookmark',
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