import { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button } from '@mui/material';
import NatOne from './assets/images/nat-one.svg';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            my: 10,
            width: '100%',
          }}
          data-testId="error-boundry"
        >
          <Typography id="card-title" variant="h3" component="h3" data-testid="title-view">
            Oops! Looks like we rolled a 1...
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              m: 10,
              overflowY: 'hidden',
            }}
          >
            <img width="50%" src={NatOne} alt="a twenty sided die showing a one." />
          </Box>
          <Button sx={{ width: '30%', p: 2 }} variant="contained" onClick={() => localStorage.clear()}>
            Reset All Data
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
