import { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import RowLayout from '../layout/RowLayout';
import DeleteIcon from '@mui/icons-material/Delete';
import NatOne from '../../assets/images/nat-one.svg';

interface Props {
  children?: ReactNode;
  deleteCard: () => void;
}

interface State {
  hasError: boolean;
}

class CardErrorBoundary extends Component<Props, State> {
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
        <>
          <RowLayout
            sxOverrides={{
              alignItems: 'center',
              p: 2,
              mb: 2,
            }}
            data-testId="card-error-boundry"
          >
            <Typography id="card-title" variant="cardHeader" data-testid="title-view">
              You rolled a 1... Please delete this card and recreate it.
            </Typography>
            <IconButton aria-label="delete-button" data-testid="delete-button" onClick={this.props.deleteCard}>
              <DeleteIcon />
            </IconButton>
          </RowLayout>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              m: 'auto',
              overflowY: 'hidden',
            }}
          >
            <img width="100%" src={NatOne} alt="a twenty sided die showing a one." />
          </Box>
        </>
      );
    }

    return this.props.children;
  }
}

export default CardErrorBoundary;
