import { render, screen } from '@testing-library/react';
import Header, { HeaderProps } from './Header';

jest.mock('./FileActionMenu', () => () => <div data-testid="menu" />);

const mockHeaderProps: HeaderProps = {
  setTabs: jest.fn(),
  activeTab: 'tab-1,',
  setActiveTab: jest.fn(),
};

describe('<Header />', () => {
  it('renders', () => {
    render(<Header {...mockHeaderProps} />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<Header {...mockHeaderProps} />);
    expect(screen.getByText(/dm screen/i)).toBeInTheDocument();
  });

  it('renders FileActionMenu button', () => {
    render(<Header {...mockHeaderProps} />);
    expect(screen.getByTestId('menu')).toBeInTheDocument();
  });
});
