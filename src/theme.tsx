import { PaletteColor, PaletteColorOptions, createTheme } from '@mui/material/styles';
import { PURPLE, RED, TEAL, WHITE, GREY, AMBER, BLUE } from './colors';
import { BREAKPOINTS } from './constants';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    cardHeader: React.CSSProperties;
    cardSubtitle: React.CSSProperties;
    cardSectionLabel: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    cardHeader?: React.CSSProperties;
    cardSubtitle?: React.CSSProperties;
    cardSectionLabel?: React.CSSProperties;
  }

  interface Palette {
    Note: PaletteColor;
    Map: PaletteColor;
    Monster: PaletteColor;
    Rule: PaletteColor;
    Player: PaletteColor;
  }

  interface PaletteOptions {
    Note: PaletteColorOptions;
    Map: PaletteColorOptions;
    Monster: PaletteColorOptions;
    Rule: PaletteColorOptions;
    Player: PaletteColorOptions;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    cardHeader: true;
    cardSubtitle: true;
    cardSectionLabel: true;
  }
}

const defaultTheme = createTheme();
const theme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: PURPLE[500],
      light: PURPLE[300],
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
    Note: {
      main: TEAL[300],
      light: TEAL[200],
    },
    Map: {
      main: PURPLE[500],
      light: PURPLE[300],
    },
    Monster: {
      main: RED[300],
      light: RED[200],
    },
    Rule: {
      main: AMBER[400],
      light: AMBER[200],
    },
    Player: {
      main: BLUE[300],
      light: BLUE[200],
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
      paddingTop: defaultTheme.spacing(0),
    },
    cardSubtitle: {
      color: GREY[500],
      fontWeight: 500,
    },
    cardSectionLabel: {
      fontWeight: 500,
      alignSelf: 'flex-start',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          cardHeader: 'h1',
          cardSubtitle: 'p',
          cardSectionLabel: 'h4',
        },
      },
    },
  },
});

export default theme;
