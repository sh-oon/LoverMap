'use client';

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateIconDefinition } from '@/utils/generateIcon';
import { useUser } from '@/contexts/UserContext';
import Link from 'next/link';

const Header = () => {
  const { user } = useUser();

  return (
    <header className={'w-full bg-white py-1 px-4 shadow sticky top-0'}>
      <div className={'flex items-center justify-between'}>
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          priority={true}
          className={'w-auto'}
        />
        <nav></nav>
        {user?.id ? (
          <div className={'flex gap-2'}>
            <button>
              <FontAwesomeIcon
                icon={generateIconDefinition('user')}
                size={'xl'}
                color={'black'}
                className={'p-2'}
              />
            </button>
            <button>
              <FontAwesomeIcon
                icon={generateIconDefinition('bell')}
                size={'xl'}
                color={'black'}
                className={'p-2'}
              />
            </button>
          </div>
        ) : (
          <div className={'flex gap-4'}>
            <Link href={'/auth/login'} className={'text-black'}>
              로그인
            </Link>
            <Link href={'/auth/register'} className={'text-black'}>
              회원가입
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
