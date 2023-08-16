import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { BREAKPOINTS } from './constants';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: BREAKPOINTS.sm,
      md: BREAKPOINTS.md,
      lg: BREAKPOINTS.lg,
      xl: BREAKPOINTS.xl,
    },
  },
});

export default theme;
