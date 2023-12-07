import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
  setTabs: (tabs: string[]) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setTabs, activeTab, setActiveTab }) => {
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
          <ManinMenu setTabs={setTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
