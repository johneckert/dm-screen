import { render, screen } from '@testing-library/react';
import Header, { HeaderProps } from './Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

jest.mock('./FileActionMenu', () => () => <div data-testid="menu" />);

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

  it('renders FileActionMenu button', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header {...mockHeaderProps} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('menu')).toBeInTheDocument();
  });
});
