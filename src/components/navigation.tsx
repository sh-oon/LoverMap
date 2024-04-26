'use client';

import React, { useState } from 'react';
import { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { generateIconDefinition } from '@/utils/generateIcon';
import navigation, { TNavigation } from '@/constants/navigation';

type NavigationProps = {
  isLogged: boolean;
};

const Navigation: NextPage<NavigationProps> = (props) => {
  const [isLogged, setIsLogged] = useState<boolean>(props.isLogged);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <aside
      className={`pt-4 px-2 bg-blue-950 h-dvh ${isMenuOpen ? 'w-44' : 'w-[58px]'} width-anim`}
    >
      <button
        className={'flex items-center w-full p-2'}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <FontAwesomeIcon
          className={`rounded-lg p-2}`}
          size={'xl'}
          color={'white'}
          icon={generateIconDefinition('bars')}
        />
      </button>
      <nav className={'mt-2 flex flex-col justify-center gap-2'}>
        {navigation
          .filter((nav) => nav.name !== 'main')
          .map((nav: TNavigation, index) => (
            <Link
              href={nav.path}
              className={`flex items-center justify-start bg-blue-900 overflow-hidden rounded-lg p-2 hover:bg-blue-800 transition-all`}
              key={index}
            >
              <div
                className={`flex items-center ${isMenuOpen ? 'justify-start gap-4' : 'justify-center'}`}
              >
                <FontAwesomeIcon
                  size={'xl'}
                  color={'white'}
                  icon={generateIconDefinition(nav.icon)}
                />
                {isMenuOpen && (
                  <span className={'whitespace-nowrap text-white'}>
                    {nav.name}
                  </span>
                )}
              </div>
            </Link>
          ))}
      </nav>
    </aside>
  );
};

export default Navigation;
