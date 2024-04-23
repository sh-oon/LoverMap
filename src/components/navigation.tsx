'use client';

import React, { useState } from 'react';
import { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { generateIconDefinition } from '@/utils/generateIcon';

type NavigationProps = {
  isLogged: boolean;
};

const Navigation: NextPage<NavigationProps> = (props) => {
  const [isLogged, setIsLogged] = useState<boolean>(props.isLogged);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div
      className={`fixed left-0 pt-4 px-2 bg-blue-950 h-full ${isMenuOpen ? 'w-40' : 'w-[58px]'} width-anim`}
    >
      <span>{isMenuOpen}</span>
      <button
        className={'flex justify-center items-center'}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <FontAwesomeIcon
          className={`rounded-lg p-2 hover:bg-blue-800 transition-all ${isMenuOpen ? 'bg-blue-800' : 'bg-blue-900'}`}
          size={'xl'}
          icon={generateIconDefinition('bars')}
        />
      </button>
      <nav className={'mt-2'}>
        <ul className={'flex flex-col justify-center gap-2'}>
          <li
            className={`flex items-center justify-start bg-blue-900 overflow-hidden rounded-lg p-2 hover:bg-blue-800 transition-all`}
          >
            <Link
              href={'/index'}
              className={`flex items-center${isMenuOpen ? 'justify-start gap-4' : 'justify-center'}`}
            >
              <FontAwesomeIcon
                className={''}
                size={'xl'}
                icon={generateIconDefinition('list-check')}
              />
              {isMenuOpen && (
                <span className={'whitespace-nowrap'}>To do List</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

console.log(Navigation.displayName);

export default Navigation;
