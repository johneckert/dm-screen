import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useState, useEffect } from 'react';
import useActiveTabStorage from './hooks/useActiveTabStorage';
import useTabStorage from './hooks/useTabStorage';
import Header from './components/header/Header';
import ScreenArea from './components/layout/ScreenArea';
import ErrorBoundary from './ErrorBoundry';
import { Tabs, Tab } from '@mui/material';
import { generateSlug, RandomWordOptions } from 'random-word-slugs';

function App() {
  const [isSticky, setSticky] = useState<boolean>(false);
  const [tabs, setTabs] = useTabStorage();
  const [activeTab, setActiveTab] = useActiveTabStorage();
  const [showNewCardModal, setShowNewCardModal] = useState<boolean>(false);
  const stickyStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 999,
  };
  const createNewTab = () => {
    const options: RandomWordOptions<2> = {
      format: 'kebab',
      partsOfSpeech: ['adjective', 'noun'],
      categories: {
        adjective: ['personality'],
        noun: ['animals'],
      },
    };
    const tabName = generateSlug(2, options);
    return tabName;
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore-next-line
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleTabChange = (_, newValue: string) => {
    let nextTab = newValue;
    console.log('newValue: ', newValue);
    if (newValue === 'newTab') {
      nextTab = createNewTab();
      setTabs([...tabs, nextTab]);
    }
    setActiveTab(nextTab);
  };

  useEffect(() => {
    const handleSticky = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleSticky);
    return () => window.removeEventListener('scroll', handleSticky);
  }, []);

  return (
    <ErrorBoundary>
      <Header
        tabs={tabs}
        setTabs={setTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setShowNewCardModal={setShowNewCardModal}
      />
      <Tabs value={activeTab} onChange={handleTabChange} sx={isSticky ? stickyStyles : {}}>
        {tabs.map((tab: string) => (
          <Tab key={tab} label={tab} value={tab} />
        ))}
        <Tab key="newTab" label="+ Tab" value="newTab" />
      </Tabs>
      <ErrorBoundary>
        <ScreenArea
          activeTab={activeTab}
          showNewCardModal={showNewCardModal}
          setShowNewCardModal={setShowNewCardModal}
        />
      </ErrorBoundary>
    </ErrorBoundary>
  );
}

export default App;
