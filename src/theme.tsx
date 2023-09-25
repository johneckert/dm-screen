import { createTheme } from '@mui/material/styles';
import { PURPLE, RED, TEAL } from './colors';
import { BREAKPOINTS } from './constants';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: PURPLE[500],
    },
    secondary: {
      main: TEAL[500],
    },
    error: {
      main: RED[500],
    },
    background: {
      paper: '#fff',
    },
  },
  spacing: 8,
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
