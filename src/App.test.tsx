import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/header/Header', () => () => <div data-testid="header" />);
jest.mock('./components/layout/ScreenArea', () => () => <div data-testid="screen-area" />);
jest.mock('./components/header/TabHeader', () => () => <div data-testid="tab-header" />);

const mockSetActiveTab = jest.fn();
const mockSetTabs = jest.fn();

jest.mock('./hooks/useActiveTabStorage', () => () => ['tab-1', mockSetActiveTab]);
jest.mock('./hooks/useTabStorage', () => () => [['tab-1', 'tab-2'], mockSetTabs]);

describe('<App />', () => {
  it('renders', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders a header', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders a screen area', () => {
    render(<App />);
    expect(screen.getByTestId('screen-area')).toBeInTheDocument();
  });
  it('renders a tab header', () => {
    render(<App />);
    expect(screen.getByTestId('tab-header')).toBeInTheDocument();
  });
});
