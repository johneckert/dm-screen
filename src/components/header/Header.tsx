import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import FileActionMenu from './FileActionMenu';

export interface HeaderProps {
  setTabs: (tabs: string[]) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setTabs, activeTab, setActiveTab }) => {
  return (
    <AppBar position="static" data-testid="header">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DM Screen
        </Typography>
        <FileActionMenu setTabs={setTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
