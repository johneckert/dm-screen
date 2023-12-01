import { createTheme } from '@mui/material/styles';
import { PURPLE, RED, TEAL, WHITE } from './colors';
import { BREAKPOINTS } from './constants';

// A custom theme for this app
const theme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: PURPLE[500],
      light: PURPLE[200],
    },
    secondary: {
      main: TEAL[500],
    },
    error: {
      main: RED[500],
      light: RED[300],
    },
    background: {
      paper: WHITE,
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
