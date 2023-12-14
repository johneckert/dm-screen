import { render, screen, waitFor, act } from '@testing-library/react';
import ScreenArea from './ScreenArea';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { mockCardDataMap } from '../../mockData';
import { ColumnProps } from './Column';

jest.mock('../../hooks/useCardStorage', () => () => [mockCardDataMap, jest.fn()]);
jest.mock('./DraggableCard.tsx', () => () => <div data-testid="draggable-card" />);
jest.mock('react-markdown', () => (props: { children: string }) => (
  <div data-testid="react-markdown">{props.children}</div>
));

const mockScreenAreaProps = {
  activeTab: 'tab-1',
  setActiveTab: jest.fn(),
  showNewCardDialog: false,
  setShowNewCardDialog: jest.fn(),
};

const mockColumn = jest.fn().mockReturnValue(<div data-testid="column" />);
jest.mock('./Column.tsx', () => (props: ColumnProps) => {
  mockColumn(props);
});

// TODO: add more tests

describe('<ScreenArea />', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ScreenArea {...mockScreenAreaProps} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('screen-area')).toBeInTheDocument();
  });

  it('filters cards based on active tab before passing to child components', () => {
    render(
      <ThemeProvider theme={theme}>
        <ScreenArea {...mockScreenAreaProps} />
      </ThemeProvider>,
    );

    const cardsFromFirstColumnProps = mockColumn.mock.calls[0][0].cards;
    const mockCardsForColumnOneTabOne = mockCardDataMap['droppable-1'].filter((card) => card.tab === 'tab-1');

    expect(cardsFromFirstColumnProps).toStrictEqual(mockCardsForColumnOneTabOne);
  });

  it('resizes the screen area when the window is resized', () => {
    render(
      <ThemeProvider theme={theme}>
        <ScreenArea {...mockScreenAreaProps} />
      </ThemeProvider>,
    );
    const screenArea = screen.getByTestId('screen-area');

    act(() => {
      const resizeEvent = new Event('resize');
      window.innerWidth = 1000;
      window.innerHeight = 1000;
      window.dispatchEvent(resizeEvent);
    });

    waitFor(() => {
      expect(screenArea).toHaveStyle('width: 1000px');
      expect(screenArea).toHaveStyle('height: 1000px');
    });
  });
});
