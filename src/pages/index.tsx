import { Inter } from 'next/font/google';

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
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    ></main>
  );
}
