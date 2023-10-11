import { render, screen } from '@testing-library/react';
import VerificationDialog from './VerificationDialog';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { act } from 'react-dom/test-utils';

const mockHandleCancel = jest.fn();
const mockHandleConfirm = jest.fn();
const showDialog = true;
const dialogMessage = 'This is a test message';

describe('<VerificationDialog />', () => {
  it('renders the correct text', () => {
    render(
      <ThemeProvider theme={theme}>
        <VerificationDialog
          dialogMessage={dialogMessage}
          dialogOpen={showDialog}
          handleCancel={mockHandleCancel}
          handleConfirm={mockHandleConfirm}
        />
      </ThemeProvider>,
    );
    expect(screen.getByText(/This is a test message/i)).toBeInTheDocument();
  });

  it('calls handleCancel when cancel button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <VerificationDialog
          dialogMessage={dialogMessage}
          dialogOpen={showDialog}
          handleCancel={mockHandleCancel}
          handleConfirm={mockHandleConfirm}
        />
      </ThemeProvider>,
    );

    act(() => {
      screen.getByTestId('cancel-button').click();
    });
    expect(mockHandleCancel).toHaveBeenCalled();
  });

  it('calls handleConfirm when confirm button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <VerificationDialog
          dialogMessage={dialogMessage}
          dialogOpen={showDialog}
          handleCancel={mockHandleCancel}
          handleConfirm={mockHandleConfirm}
        />
      </ThemeProvider>,
    );

    act(() => {
      screen.getByTestId('confirm-button').click();
    });
    expect(mockHandleConfirm).toHaveBeenCalled();
  });

  it('calls handleCancel when modal is closed', () => {
    render(
      <ThemeProvider theme={theme}>
        <VerificationDialog
          dialogMessage={dialogMessage}
          dialogOpen={showDialog}
          handleCancel={mockHandleCancel}
          handleConfirm={mockHandleConfirm}
        />
      </ThemeProvider>,
    );

    act(() => {
      screen.getByTestId('expanded-card').click();
    });
    expect(mockHandleCancel).toHaveBeenCalled();
  });
});
