import { IconName } from '@fortawesome/fontawesome-svg-core';

export type TNavigation = {
  path: string;
  name: string;
  icon: IconName;
};

export function getNavigationInfo(path: string): TNavigation {
  const current = navigation.find((nav: TNavigation) => nav.path === path);

  if (!current) {
    return {
      path: '/',
      name: 'To do List',
      icon: 'list-check',
    };
  }
  return current;
}

const navigation: TNavigation[] = [
  {
    path: '/',
    name: 'main',
    icon: 'home',
  },
  {
    path: '/to-do',
    name: 'To do List',
    icon: 'list-check',
  },
];

export default navigation;
