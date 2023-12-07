import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';
import { DEFAULT_TABS } from '../constants';

const useActiveTabStorage: () => [string, (activeTab: string) => void] = () => {
  useEffect(() => {
    if (localStorage.getItem('activeTab') === null) {
      localStorage.setItem('activeTab', JSON.stringify(DEFAULT_TABS[0]));
    }
  }, []);
  const [activeTab, setActiveTab] = useLocalStorage('activeTab', DEFAULT_TABS[0]);

  return [activeTab, setActiveTab];
};

export default useActiveTabStorage;
