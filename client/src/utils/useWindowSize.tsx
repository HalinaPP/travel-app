import { useState, useEffect } from 'react';
import UseWindowProps from './UseWindowSize.model';

export default function useWindowSize(): UseWindowProps {
  const [windowSize, setWindowSize] = useState<UseWindowProps>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
