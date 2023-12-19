import { render, screen, act } from '@testing-library/react';
import ExpandedCardLayout from './ExpandedCardLayout';
import { CardType } from '../../interfaces';
import { DEFAULT_TABS } from '../../constants';

const mockCloseExpandedCard = jest.fn();
const mockHandleEdit = jest.fn();
const mockDeleteCard = jest.fn();

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

  describe('when not in editing mode', () => {
    it('does not render delete button', () => {
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
      expect(screen.queryByTestId('delete-button')).not.toBeInTheDocument();
    });

    it('does not render save button', () => {
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
      expect(screen.queryByTestId('save-button')).not.toBeInTheDocument();
    });
  });

  describe('when in editing mode', () => {
    it('renders delete button', () => {
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
      expect(screen.getByTestId('delete-button')).toBeInTheDocument();
    });

    it('calls deleteCard when delete button is clicked', () => {
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
      const deleteButton = screen.getByTestId('delete-button');
      act(() => {
        deleteButton.click();
      });
      expect(mockDeleteCard).toHaveBeenCalledTimes(1);
    });

    it('renders save button', () => {
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
      expect(screen.getByTestId('save-button')).toBeInTheDocument();
    });

    it('calls handleEdit when save button is clicked', () => {
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
      const saveButton = screen.getByTestId('save-button');
      act(() => {
        saveButton.click();
      });
      expect(mockHandleEdit).toHaveBeenCalledTimes(1);
    });
  });
});
