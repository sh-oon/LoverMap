import { Head, Html, Main, NextScript } from 'next/document';
import Navigation from '@/components/navigation';

export default function Document() {
  const isLogged = true;

  return (
    <Html lang="en">
      <Head />
      <body>
        <Navigation isLogged={isLogged} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
