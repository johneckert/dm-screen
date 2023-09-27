import { render, screen, act } from '@testing-library/react';
import Header from './Header';

describe('ScreenArea', () => {
  it('renders', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<Header />);
    expect(screen.getByText(/dm screen/i)).toBeInTheDocument();
  });

  it('renders download button', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: /download/i })).toBeInTheDocument();
  });

  it('downloads cards when download button is clicked', () => {
    jest.spyOn(document, 'createElement');

    render(<Header />);

    screen.getByRole('button', { name: /download/i }).click();
    expect(document.createElement).toHaveBeenCalledWith('a');
  });
});
