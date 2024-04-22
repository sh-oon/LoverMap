'use client';

import React from 'react';
import { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  findIconDefinition,
  IconDefinition,
  IconLookup,
} from '@fortawesome/fontawesome-svg-core';

type NavigationProps = {
  isLogged: boolean;
};

const coffeeLookup: IconLookup = { prefix: 'fas', iconName: 'heart' };
const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup);

const Navigation: NextPage<NavigationProps> = (props) => {
  const [isLogged, setIsLogged] = React.useState<boolean>(props.isLogged);
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  return (
    <nav className={`fixed left-0 w-icon-xl bg-blue-950 h-full`}>
      <ul className={'flex flex-col'}>
        <li>
          <a href={'/'}>
            <FontAwesomeIcon
              className={'fa-beat'}
              icon={coffeeIconDefinition}
            />
          </a>
        </li>
        <li>
          <a href={'/about'}>About</a>
        </li>
      </ul>
    </nav>
  );
};

console.log(Navigation.displayName);

export default Navigation;
