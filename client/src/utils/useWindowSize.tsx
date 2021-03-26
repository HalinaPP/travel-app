import { useState, useEffect } from 'react';
import UseWindowProps from './UseWindowSize.model';
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function useWindowSize(): any {
  const [windowSize, setWindowSize] = useState<UseWindowProps>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
