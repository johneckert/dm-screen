import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { WHITE } from '../../colors';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import ManinMenu from './MainMenu';

const useStyles = makeStyles<Theme>((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    '& svg': {
      fill: WHITE,
    },
  },
}));

export interface HeaderProps {
  tabs: string[];
  setTabs: (tabs: string[]) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  showNewCardModal: boolean;
  setShowNewCardModal: (showNewCardModal: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  tabs,
  setTabs,
  activeTab,
  setActiveTab,
  showNewCardModal,
  setShowNewCardModal,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isDrawerOpen = Boolean(anchorEl);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDrawerClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" data-testid="header">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DM Screen
        </Typography>
        <IconButton
          className={classes.menuButton}
          edge="start"
          aria-label="open menu"
          aria-controls={isDrawerOpen ? 'menu' : undefined}
          aria-haspopup="true"
          aria-expanded={isDrawerOpen ? 'true' : undefined}
          onClick={handleMenuOpen}
          data-testid="menu-button"
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
          <ManinMenu
            tabs={tabs}
            setTabs={setTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            showNewCardModal={showNewCardModal}
            setShowNewCardModal={setShowNewCardModal}
          />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
