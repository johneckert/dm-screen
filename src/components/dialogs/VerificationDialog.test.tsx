import { render, screen, act } from '@testing-library/react';
import VerificationDialog from './VerificationDialog';

const mockHandleCancel = jest.fn();
const mockHandleConfirm = jest.fn();
const showDialog = true;
const dialogMessage = 'This is a test message';

describe('<VerificationDialog />', () => {
  it('renders the correct text', () => {
    render(
      <VerificationDialog
        dialogMessage={dialogMessage}
        dialogOpen={showDialog}
        handleCancel={mockHandleCancel}
        handleConfirm={mockHandleConfirm}
      />,
    );
    expect(screen.getByText(/This is a test message/i)).toBeInTheDocument();
  });

  it('calls handleCancel when cancel button is clicked', () => {
    render(
      <VerificationDialog
        dialogMessage={dialogMessage}
        dialogOpen={showDialog}
        handleCancel={mockHandleCancel}
        handleConfirm={mockHandleConfirm}
      />,
    );

    act(() => {
      screen.getByTestId('cancel-button').click();
    });
    expect(mockHandleCancel).toHaveBeenCalled();
  });

  it('calls handleConfirm when confirm button is clicked', () => {
    render(
      <VerificationDialog
        dialogMessage={dialogMessage}
        dialogOpen={showDialog}
        handleCancel={mockHandleCancel}
        handleConfirm={mockHandleConfirm}
      />,
    );

    act(() => {
      screen.getByTestId('confirm-button').click();
    });
    expect(mockHandleConfirm).toHaveBeenCalled();
  });

  it('calls handleCancel when modal is closed', () => {
    render(
      <VerificationDialog
        dialogMessage={dialogMessage}
        dialogOpen={showDialog}
        handleCancel={mockHandleCancel}
        handleConfirm={mockHandleConfirm}
      />,
    );

    act(() => {
      screen.getByTestId('expanded-card').click();
    });
    expect(mockHandleCancel).toHaveBeenCalled();
  });
});
