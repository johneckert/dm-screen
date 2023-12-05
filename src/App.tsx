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
import NewTabDialog from './components/modals/NewTabDialog';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [isSticky, setSticky] = useState<boolean>(false);
  const [tabs, setTabs] = useTabStorage();
  const [showNewTabDialog, setshowNewTabDialog] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useActiveTabStorage();
  const [showNewCardModal, setShowNewCardModal] = useState<boolean>(false);
  const stickyStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 999,
  };
  const createNewTab = (name: string) => {
    setTabs([...tabs, name]);
    setActiveTab(name);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore-next-line
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleTabChange = (_, newValue: string) => {
    console.log(newValue);
    if (newValue === 'newTab') {
      setshowNewTabDialog(true);
      return;
    }
    if (newValue === 'deleteTab') {
      console.log('delete tab');
      const remainingTabs = tabs.filter((tab) => tab !== activeTab);
      setTabs(remainingTabs);
      setActiveTab(remainingTabs[0]);
      return;
    }
    setActiveTab(newValue);
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
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={activeTab}
        onChange={handleTabChange}
        sx={isSticky ? stickyStyles : {}}
      >
        {tabs.map((tab: string) => (
          <Tab key={tab} label={tab} value={tab} />
        ))}
        <Tab key="newTab" label="+ Tab" value="newTab" />
        <Tab key="deleteTab" icon={<DeleteIcon />} value="deleteTab" />
      </Tabs>
      <NewTabDialog
        showNewTabDialog={showNewTabDialog}
        setshowNewTabDialog={setshowNewTabDialog}
        createNewTab={createNewTab}
        tabs={tabs}
      />
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
