import { Component, ErrorInfo, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Owlbear from '../../assets/images/owlbear.svg';
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2,
              mb: 2,
            }}
          >
            <Typography id="card-title" variant="h6" component="h6" data-testid="title-view">
              You rolled a 1... Please delete this card and recreate it.
            </Typography>
            <IconButton aria-label="delete-button" data-testid="delete-button" onClick={this.props.deleteCard}>
              <DeleteIcon />
            </IconButton>
          </Box>
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
