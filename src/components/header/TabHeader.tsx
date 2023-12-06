import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import NewTabDialog from '../modals/NewTabDialog';

interface TabHeaderProps {
  tabs: string[];
  setTabs: (tabs: string[]) => void;
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}

const TabHeader: React.FC<TabHeaderProps> = ({ tabs, setTabs, activeTab, setActiveTab }) => {
  const [isSticky, setSticky] = useState<boolean>(false);
  const [showNewTabDialog, setshowNewTabDialog] = useState<boolean>(false);
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

  const createNewTab = (name: string) => {
    setTabs([...tabs, name]);
    setActiveTab(name);
  };

  const stickyStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 999,
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
    <>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={activeTab}
        onChange={handleTabChange}
        sx={isSticky ? stickyStyles : {}}
        data-testid="tab-header"
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
    </>
  );
};

export default TabHeader;