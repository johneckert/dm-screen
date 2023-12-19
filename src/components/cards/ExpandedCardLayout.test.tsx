import { render, screen } from '@testing-library/react';
import ExpandedCardLayout from './ExpandedCardLayout';
import { CardType } from '../../interfaces';
import { DEFAULT_TABS } from '../../constants';

const mockCloseExpandedCard = jest.fn();
const mockHandleEdit = jest.fn();
const mockDeleteCard = jest.fn();
jest.mock('../layout/ButtonArea', () => () => <div data-testid="button-area" />);

const children = <p data-testid="mock-children">Test</p>;

const expandedMapCardData = {
  id: '1',
  type: CardType.Map,
  column: 'column-1',
  tab: DEFAULT_TABS[0],
  content: {
    title: 'Charazard',
    roomNumber: 'C1',
    description: 'I am Charazard',
    content: 'Charazard is a fire pokemon',
  },
};

describe('<ExpandedCardLayout />', () => {
  it('renders', () => {
    render(
      <ExpandedCardLayout
        cardData={expandedMapCardData}
        closeExpandedCard={mockCloseExpandedCard}
        deleteCard={mockDeleteCard}
        isEditing={true}
        saveCard={mockHandleEdit}
        children={children}
      />,
    );
    expect(screen.getByTestId('expanded-card')).toBeInTheDocument();
  });

  it('renders child components', () => {
    render(
      <ExpandedCardLayout
        cardData={expandedMapCardData}
        closeExpandedCard={mockCloseExpandedCard}
        deleteCard={mockDeleteCard}
        isEditing={true}
        saveCard={mockHandleEdit}
        children={children}
      />,
    );
    expect(screen.getByTestId('mock-children')).toBeInTheDocument();
  });

  it('when not in editing mode does not render button area', () => {
    render(
      <ExpandedCardLayout
        cardData={expandedMapCardData}
        closeExpandedCard={mockCloseExpandedCard}
        deleteCard={mockDeleteCard}
        isEditing={false}
        saveCard={mockHandleEdit}
        children={children}
      />,
    );
    expect(screen.queryByTestId('button-area')).not.toBeInTheDocument();
  });

  it('when in editing mode renders button area', () => {
    render(
      <ExpandedCardLayout
        cardData={expandedMapCardData}
        closeExpandedCard={mockCloseExpandedCard}
        deleteCard={mockDeleteCard}
        isEditing={true}
        saveCard={mockHandleEdit}
        children={children}
      />,
    );
    expect(screen.getByTestId('button-area')).toBeInTheDocument();
  });
});
