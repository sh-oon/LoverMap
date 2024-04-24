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
      <main className={'flex relative'}>
        <Navigation isLogged />
        {children}
      </main>
    </>
  );
};

export default Layout;
