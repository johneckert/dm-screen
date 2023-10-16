import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import Header from './components/header/Header';
import ScreenArea from './components/layout/ScreenArea';
import ErrorBoundary from './ErrorBoundry';
import { DEFAULT_TAB } from './constants';

function App() {
  const [tabs, setTabs] = useLocalStorage<string[]>('tabs', [DEFAULT_TAB]);
  const [activeTab, setActiveTab] = useLocalStorage<string>('activeTab', tabs[0]);
  useEffect(() => {
    if (localStorage.getItem('tabs') === null) {
      localStorage.setItem('tabs', JSON.stringify([DEFAULT_TAB]));
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem('activeTab') === null) {
      localStorage.setItem('activeTab', JSON.stringify(tabs[0]));
    }
  }, [tabs]);

  const setActiveTabFromTabs = (tab: string) => {
    const existingTab = tabs.filter((savedTab) => tab === savedTab);
    if (existingTab.length) {
      setActiveTab(existingTab[0]);
    } else {
      console.log('no tab found');
    }
  };
  return (
    <>
      <Header tabs={tabs} setTabs={setTabs} activeTab={activeTab} setActiveTab={setActiveTabFromTabs} />
      <ErrorBoundary>
        <ScreenArea activeTab={activeTab} />
      </ErrorBoundary>
    </>
  );
}

export default App;
