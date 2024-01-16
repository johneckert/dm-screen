import { useState, useEffect } from 'react';
import { getScreenSize } from '../utils';
import { ScreenSize } from '../interfaces';

const useScreenSize: () => ScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenSize(getScreenSize());
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return screenSize;
};

export default useScreenSize;
