import { render, screen } from '@testing-library/react';
import { mockCardData } from '../../mockData';
import Column from './Column';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

const mockColumnData = {
  columnId: 1,
  cards: mockCardData.filter((card) => card.column === 'droppable-1'),
  expandCard: jest.fn(),
};

jest.mock('react-beautiful-dnd', () => ({
  Droppable: jest.fn(
    // params to children are `provider`, `snapshot`
    ({ children }) => children({}, {}),
  ),
}));

jest.mock('./DraggableCard.tsx', () => () => <div data-testid="draggable-card" />);

describe('Column', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <Column
          cards={mockColumnData.cards}
          columnId={mockColumnData.columnId}
          expandCard={mockColumnData.expandCard}
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('column')).toBeInTheDocument();
  });

  it('renders a draggable card for each cards that matches the row id.', () => {
    render(
      <ThemeProvider theme={theme}>
        <Column
          cards={mockColumnData.cards}
          columnId={mockColumnData.columnId}
          expandCard={mockColumnData.expandCard}
        />
      </ThemeProvider>,
    );
    expect(screen.queryAllByTestId('draggable-card')).toHaveLength(1);
  });
});
