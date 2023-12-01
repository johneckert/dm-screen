import { render, screen, act } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

jest.mock('./components/header/Header', () => () => <div data-testid="header" />);
jest.mock('./components/layout/ScreenArea', () => () => <div data-testid="screen-area" />);
jest.mock('random-word-slugs', () => ({
  generateSlug: jest.fn().mockReturnValue('tab-3'),
  RandomWordOptions: {
    Adjectives: ['tab'],
    Nouns: ['tab'],
  },
}));

const mockSetActiveTab = jest.fn();
const mockSetTabs = jest.fn();

jest.mock('./hooks/useActiveTabStorage', () => () => ['tab-1', mockSetActiveTab]);
jest.mock('./hooks/useTabStorage', () => () => [['tab-1', 'tab-2'], mockSetTabs]);

describe('App', () => {
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

  it('renders a tab for each tab in storage', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    );
    expect(screen.getByText(/tab-1/i)).toBeInTheDocument();
    expect(screen.getByText(/tab-2/i)).toBeInTheDocument();
  });

  it('renders a new tab button', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    );
    expect(screen.getByText(/\+ Tab/i)).toBeInTheDocument();
  });

  it('sets the active tab when a tab is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    );

    const tabTwo = screen.getByText(/tab-2/i);

    act(() => {
      tabTwo.click();
    });

    expect(mockSetActiveTab).toHaveBeenCalledWith('tab-2');
  });

  it('creates a new tab and makes it active when new tab button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    );

    const newTab = screen.getByText(/\+ Tab/i);

    act(() => {
      newTab.click();
    });
    expect(mockSetTabs).toHaveBeenCalledWith(['tab-1', 'tab-2', 'tab-3']);
    expect(mockSetActiveTab).toHaveBeenCalledWith('tab-2');
  });
});
