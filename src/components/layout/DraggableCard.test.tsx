import { render, screen } from '@testing-library/react';
import DraggableCard from './DraggableCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { mockCardData } from '../../mockData';

const mockExpandCard = jest.fn();

jest.mock('react-beautiful-dnd', () => ({
  Draggable: jest.fn(
    // params to children are `provider`, `snapshot`
    ({ children }) => children({}, {}),
  ),
}));

describe('Draggable Card', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <DraggableCard card={mockCardData[0]} index={1} expandCard={mockExpandCard} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('draggable-card')).toBeInTheDocument();
  });

  it('calls expand card when clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <DraggableCard card={mockCardData[0]} index={1} expandCard={mockExpandCard} />
      </ThemeProvider>,
    );
    screen.getByTestId('draggable-card').click();
    expect(mockExpandCard).toHaveBeenCalledWith(mockCardData[0].id);
  });
});
