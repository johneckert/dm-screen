import { render, screen } from '@testing-library/react';
import DraggableCard from './DraggableCard';
import { mockCardData } from '../../mockData';

const mockExpandCard = jest.fn();
const mockHandleContextMenuOpen = jest.fn();

jest.mock('react-beautiful-dnd', () => ({
  Draggable: jest.fn(
    // params to children are `provider`, `snapshot`
    ({ children }) => children({}, {}),
  ),
}));

jest.mock('react-markdown', () => (props: { children: string }) => <div>{props.children}</div>);

describe('<DraggableCard />', () => {
  it('renders', () => {
    render(
      <DraggableCard
        card={mockCardData[0]}
        index={1}
        expandCard={mockExpandCard}
        handleContextMenuOpen={mockHandleContextMenuOpen}
      />,
    );
    expect(screen.getByTestId('draggable-card')).toBeInTheDocument();
  });

  it('calls expand card when clicked', () => {
    render(
      <DraggableCard
        card={mockCardData[0]}
        index={1}
        expandCard={mockExpandCard}
        handleContextMenuOpen={mockHandleContextMenuOpen}
      />,
    );
    screen.getByTestId('draggable-card').click();
    expect(mockExpandCard).toHaveBeenCalledWith(mockCardData[0].id);
  });
});
