import { render, screen, act } from '@testing-library/react';
import Header, { HeaderProps } from './Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

jest.mock('./MainMenu', () => () => <div data-testid="menu" />);

const mockHeaderProps: HeaderProps = {
  setTabs: jest.fn(),
  activeTab: 'tab-1,',
  setActiveTab: jest.fn(),
};

describe('<Header />', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header {...mockHeaderProps} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header {...mockHeaderProps} />
      </ThemeProvider>,
    );
    expect(screen.getByText(/dm screen/i)).toBeInTheDocument();
  });

  it('renders menu button', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header {...mockHeaderProps} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('menu-button')).toBeInTheDocument();
  });

  it('opens menu when menu button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header {...mockHeaderProps} />
      </ThemeProvider>,
    );

    act(() => {
      screen.getByTestId('menu-button').click();
    });
    expect(screen.getByTestId('menu')).toBeInTheDocument();
  });
});
