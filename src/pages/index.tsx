import { Inter } from 'next/font/google';
import Navigation from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  clientId: string;
  clientSecret: string;
};

export async function getServerSideProps() {
  return {
    props: {
      clientId: process.env.NAVER_MAP_CLIENT_ID,
      clientSecret: process.env.NAVER_MAP_CLIENT_SECRET,
    },
  };
}

export default function Home({ clientId, clientSecret }: Props) {
  const isLogged = false;
  return (
    <>
      <Navigation isLogged={isLogged} />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      ></main>
    </>
  );
}
