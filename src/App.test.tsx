import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

jest.mock('./components/header/Header', () => () => <div data-testid="header" />);
jest.mock('./components/layout/ScreenArea', () => () => <div data-testid="screen-area" />);
jest.mock('./components/header/TabHeader', () => () => <div data-testid="tab-header" />);

const mockSetActiveTab = jest.fn();
const mockSetTabs = jest.fn();

jest.mock('./hooks/useActiveTabStorage', () => () => ['tab-1', mockSetActiveTab]);
jest.mock('./hooks/useTabStorage', () => () => [['tab-1', 'tab-2'], mockSetTabs]);

describe('<App />', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders a header', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders a screen area', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('screen-area')).toBeInTheDocument();
  });
  it('renders a tab header', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('tab-header')).toBeInTheDocument();
  });
});
