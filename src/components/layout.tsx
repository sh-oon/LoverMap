import React from 'react';
import Navigation from '@/components/navigation';
import { useRouter } from 'next/router';
import { getNavigationInfo } from '@/constants/navigation';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  // 현재 경로
  const currentMenu = getNavigationInfo(router.pathname);

  return (
    <>
      <main className={'flex min-h-dvh'}>
        <Navigation isLogged />
        <div className={'pt-3 pl-8 flex-1'}>
          <h1 className={'py-4'}>{currentMenu.name}</h1>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
