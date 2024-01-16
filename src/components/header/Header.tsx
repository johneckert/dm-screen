import React from 'react';
import theme from '../../theme';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { BREAKPOINTS } from '../../constants';
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
        <Typography
          variant="mainTitle"
          sx={{
            flexGrow: 1,
            [theme.breakpoints.down(BREAKPOINTS.md)]: {
              fontSize: theme.spacing(4),
            },
          }}
        >
          DM Screen
        </Typography>
        <FileActionMenu setTabs={setTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
