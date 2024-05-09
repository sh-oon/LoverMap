import { useEffect, useState } from 'react';

function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
): T {
  const [args, setArgs] = useState<any[]>([]);
  const [callNow, setCallNow] = useState(false);

  useEffect(() => {
    if (callNow) {
      callback(...args);
      setCallNow(false);
    }
    // 지연 시간 후 함수 실행
    const handler = setTimeout(() => setCallNow(true), delay);

    // 클린업 함수
    return () => clearTimeout(handler);
  }, [args, callNow, callback, delay]);

  return ((...args: any[]) => {
    setArgs(args);
  }) as T;
}

export default useDebounce;
