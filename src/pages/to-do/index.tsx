import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { getNavigationInfo } from '@/constants/navigation';

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

export default function Index({ clientId, clientSecret }: Props) {
  const router = useRouter();

  // 현재 경로
  const currentMenu = getNavigationInfo(router.pathname);

  return (
    <>
      <h1>{currentMenu.name}</h1>
    </>
  );
}
