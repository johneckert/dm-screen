import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';
import { DEFAULT_TAB } from '../constants';

const useTabStorage: () => [string[], (tabs: string[]) => void] = () => {
  useEffect(() => {
    if (localStorage.getItem('tabs') === null) {
      localStorage.setItem('tabs', JSON.stringify([DEFAULT_TAB]));
    }
  }, []);
  const [tabs, setTabs] = useLocalStorage('tabs', [DEFAULT_TAB]);

  return [tabs, setTabs];
};

export default useTabStorage;
