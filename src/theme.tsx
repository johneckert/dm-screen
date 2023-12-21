import { createTheme } from '@mui/material/styles';
import { PURPLE, RED, TEAL, WHITE } from './colors';
import { BREAKPOINTS } from './constants';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    cardHeader: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    cardHeader?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    cardHeader: true;
  }
}

const defaultTheme = createTheme();
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
  typography: {
    cardHeader: {
      margin: defaultTheme.spacing(4),
      paddingLeft: defaultTheme.spacing(2),
      paddingTop: defaultTheme.spacing(0),
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          cardHeader: 'h1',
        },
      },
    },
  },
});

export default theme;
