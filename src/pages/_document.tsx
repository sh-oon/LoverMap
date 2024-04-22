import { Head, Html, Main, NextScript } from 'next/document';
import Header from '@/components/header';

export default function Document() {
  const isLogged = true;

  return (
    <Html lang="en">
      <Head />
      <body>
        <Header isLogged={isLogged} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
