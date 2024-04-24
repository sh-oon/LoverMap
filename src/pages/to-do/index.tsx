import { useRouter } from 'next/router';
import { getNavigationInfo } from '@/constants/navigation';

export default function Index() {
  const router = useRouter();

  // 현재 경로
  const currentMenu = getNavigationInfo(router.pathname);

  return (
    <>
      <div className={'flex-1 h-full'}></div>
    </>
  );
}
