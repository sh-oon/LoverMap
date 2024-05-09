import React from 'react';
import Header from '@/components/organisms/header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className={'h-screen'}>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
