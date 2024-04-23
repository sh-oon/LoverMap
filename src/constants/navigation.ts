type TNavigation = {
  path: string;
  name: string;
  icon: string;
};

const navigation: TNavigation[] = [
  {
    path: '/index',
    name: 'To do List',
    icon: 'list-check',
  },
  {
    path: '/map',
    name: 'Map',
    icon: 'map-location-dot',
  },
];

export default navigation;
