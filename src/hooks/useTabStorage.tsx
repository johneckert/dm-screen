import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';
import { DEFAULT_TABS } from '../constants';

const useTabStorage: () => [string[], (tabs: string[]) => void] = () => {
  useEffect(() => {
    if (localStorage.getItem('tabs') === null) {
      localStorage.setItem('tabs', JSON.stringify(DEFAULT_TABS));
    }
  }, []);
  const [tabs, setTabs] = useLocalStorage('tabs', DEFAULT_TABS);

  return [tabs, setTabs];
};

export default useTabStorage;
