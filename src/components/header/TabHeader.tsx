import React, { useEffect, useState } from 'react';
import { Box, Divider, Tabs, Tab, Theme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import NewTabDialog from '../dialogs/NewTabDialog';
import { RED, WHITE } from '../../colors';

interface TabHeaderProps {
  tabs: string[];
  setTabs: (tabs: string[]) => void;
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
  setShowNewCardDialog: (show: boolean) => void;
}

const TabHeader: React.FC<TabHeaderProps> = ({ tabs, setTabs, activeTab, setActiveTab, setShowNewCardDialog }) => {
  const [isSticky, setSticky] = useState<boolean>(false);
  const [showNewTabDialog, setshowNewTabDialog] = useState<boolean>(false);

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const openNewTabDialog = () => {
    setshowNewTabDialog(true);
  };

  const handleDeleteActiveTab = () => {
    const remainingTabs = tabs.filter((tab) => tab !== activeTab);
    setTabs(remainingTabs);
    setActiveTab(remainingTabs[0]);
  };

  const openNewCardDialog = () => {
    setShowNewCardDialog(true);
  };

  const createNewTab = (name: string) => {
    setTabs([...tabs, name]);
    setActiveTab(name);
  };

  const stickyStyles = {
    position: isSticky ? 'fixed' : 'static',
    display: 'flex',
    justifyContent: 'space-between',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 999,
    background: (theme: Theme) => theme.palette.background.default,
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
    <Box sx={stickyStyles} data-testid="tab-header">
      <Tabs variant="scrollable" scrollButtons="auto" value={activeTab} sx={{ flexGrow: 1 }} onChange={handleTabChange}>
        {tabs.map((tab: string) => (
          <Tab key={tab} label={tab} value={tab} sx={{ mt: 1 }} />
        ))}
      </Tabs>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Tab key="newTab" label="+ Tab" value="newTab" onClick={openNewTabDialog} />
      <Tab key="deleteTab" icon={<DeleteIcon />} value="deleteTab" onClick={handleDeleteActiveTab} />
      <Divider orientation="vertical" variant="middle" flexItem />
      <Tab
        key="newCard"
        label="+ Card"
        value="newCard"
        sx={{ color: WHITE, background: RED[500], my: 1, mx: 2 }}
        onClick={openNewCardDialog}
      />
      <NewTabDialog
        showNewTabDialog={showNewTabDialog}
        setshowNewTabDialog={setshowNewTabDialog}
        createNewTab={createNewTab}
        tabs={tabs}
      />
    </Box>
  );
};

export default TabHeader;
