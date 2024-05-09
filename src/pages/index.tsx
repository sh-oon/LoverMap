import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  clientId: string;
  clientSecret: string;
};

export async function getServerSideProps() {
  const isLogged = true;

  if (!isLogged) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        clientId: process.env.NAVER_MAP_CLIENT_ID,
        clientSecret: process.env.NAVER_MAP_CLIENT_SECRET,
      },
    };
  }
}

export default function Home({ clientId, clientSecret }: Props) {
  const isLogged = false;
  return (
    <>
      <main></main>
    </>
  );
}
