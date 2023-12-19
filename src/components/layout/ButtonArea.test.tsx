import { render, screen } from '@testing-library/react';
import ButtonArea from './ButtonArea';

const mockHandleLeftButton = jest.fn();
const mockHandleRightButton = jest.fn();

describe('<ButtonArea />', () => {
  it('renders two buttons', () => {
    render(<ButtonArea handleLeftButton={mockHandleLeftButton} handleRightButton={mockHandleRightButton} />);
    expect(screen.getByTestId('right-button')).toBeInTheDocument();
    expect(screen.getByTestId('left-button')).toBeInTheDocument();
  });

  it('renders the correct text for the buttons if isEdit is false', () => {
    render(<ButtonArea handleLeftButton={mockHandleLeftButton} handleRightButton={mockHandleRightButton} />);
    expect(screen.getByTestId('right-button')).toHaveTextContent('Save');
    expect(screen.getByTestId('left-button')).toHaveTextContent('Cancel');
  });

  it('renders the correct text for the buttons if isEdit is true', () => {
    render(<ButtonArea isEdit handleLeftButton={mockHandleLeftButton} handleRightButton={mockHandleRightButton} />);
    expect(screen.getByTestId('right-button')).toHaveTextContent('Save');
    expect(screen.getByTestId('left-button')).toHaveTextContent('Delete');
  });

  it('calls the correct function when the left button is clicked', () => {
    render(<ButtonArea handleLeftButton={mockHandleLeftButton} handleRightButton={mockHandleRightButton} />);
    screen.getByTestId('left-button').click();
    expect(mockHandleLeftButton).toHaveBeenCalled();
  });

  it('calls the correct function when the right button is clicked', () => {
    render(<ButtonArea handleLeftButton={mockHandleLeftButton} handleRightButton={mockHandleRightButton} />);
    screen.getByTestId('right-button').click();
    expect(mockHandleRightButton).toHaveBeenCalled();
  });
});
