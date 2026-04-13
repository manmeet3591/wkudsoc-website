export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
    children: [
      {
        label: 'About DSOC',
        href: '/about',
      },
      {
        label: 'Team',
        href: '/team',
      },
      {
        label: 'Partners',
        href: '/partners',
      },
      {
        label: 'Media',
        href: '/media',
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Research',
    href: '/research',
  },
  {
    label: 'Events',
    href: '/events',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
