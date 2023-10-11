import { render, screen, act } from '@testing-library/react';
import Header from './Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

jest.mock('./MainMenu', () => () => <div data-testid="menu" />);

describe('ScreenArea', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>,
    );
    expect(screen.getByText(/dm screen/i)).toBeInTheDocument();
  });

  it('renders menu button', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('menu-button')).toBeInTheDocument();
  });

  it('opens menu when menu button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>,
    );

    act(() => {
      screen.getByTestId('menu-button').click();
    });
    expect(screen.getByTestId('menu')).toBeInTheDocument();
  });
});
