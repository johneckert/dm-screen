import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';
import { DEFAULT_TAB } from '../constants';

const useActiveTabStorage: () => [string, (activeTab: string) => void] = () => {
  useEffect(() => {
    if (localStorage.getItem('activeTab') === null) {
      localStorage.setItem('activeTab', JSON.stringify(DEFAULT_TAB));
    }
  }, []);
  const [activeTab, setActiveTab] = useLocalStorage('activeTab', DEFAULT_TAB);

  return [activeTab, setActiveTab];
};

export default useActiveTabStorage;
