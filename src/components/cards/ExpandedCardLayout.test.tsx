import { render, screen, waitFor, act } from '@testing-library/react';
import ExpandedCardLayout from './ExpandedCardLayout';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { CardType } from '../../interfaces';

const mockCloseExpandedCard = jest.fn();
const mockHandleEdit = jest.fn();
const mockDeleteCard = jest.fn();

const children = <p data-testid="mock-children">Test</p>;

const expandedMapCardData = {
  id: '1',
  type: CardType.Map,
  column: 'column-1',
  title: 'Charazard',
  content: {
    roomNumber: 'C1',
    description: 'I am Charazard',
    content: 'Charazard is a fire pokemon',
  },
};

describe('ExpandedCardLayout', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExpandedCardLayout
          cardData={expandedMapCardData}
          closeExpandedCard={mockCloseExpandedCard}
          deleteCard={mockDeleteCard}
          isEditing={true}
          saveCard={mockHandleEdit}
          children={children}
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('expanded-card')).toBeInTheDocument();
  });

  it('renders child components', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExpandedCardLayout
          cardData={expandedMapCardData}
          closeExpandedCard={mockCloseExpandedCard}
          deleteCard={mockDeleteCard}
          isEditing={true}
          saveCard={mockHandleEdit}
          children={children}
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('mock-children')).toBeInTheDocument();
  });

  describe('when not in editing mode', () => {
    it('does not render delete button', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedCardLayout
            cardData={expandedMapCardData}
            closeExpandedCard={mockCloseExpandedCard}
            deleteCard={mockDeleteCard}
            isEditing={false}
            saveCard={mockHandleEdit}
            children={children}
          />
        </ThemeProvider>,
      );
      expect(screen.queryByTestId('delete-button')).not.toBeInTheDocument();
    });

    it('does not render save button', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedCardLayout
            cardData={expandedMapCardData}
            closeExpandedCard={mockCloseExpandedCard}
            deleteCard={mockDeleteCard}
            isEditing={false}
            saveCard={mockHandleEdit}
            children={children}
          />
        </ThemeProvider>,
      );
      expect(screen.queryByTestId('save-button')).not.toBeInTheDocument();
    });
  });

  describe('when in editing mode', () => {
    it('renders delete button', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedCardLayout
            cardData={expandedMapCardData}
            closeExpandedCard={mockCloseExpandedCard}
            deleteCard={mockDeleteCard}
            isEditing={true}
            saveCard={mockHandleEdit}
            children={children}
          />
        </ThemeProvider>,
      );
      expect(screen.getByTestId('delete-button')).toBeInTheDocument();
    });

    it('calls deleteCard when delete button is clicked', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedCardLayout
            cardData={expandedMapCardData}
            closeExpandedCard={mockCloseExpandedCard}
            deleteCard={mockDeleteCard}
            isEditing={true}
            saveCard={mockHandleEdit}
            children={children}
          />
        </ThemeProvider>,
      );
      const deleteButton = screen.getByTestId('delete-button');
      act(() => {
        deleteButton.click();
      });
      expect(mockDeleteCard).toHaveBeenCalledTimes(1);
    });

    it('renders save button', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedCardLayout
            cardData={expandedMapCardData}
            closeExpandedCard={mockCloseExpandedCard}
            deleteCard={mockDeleteCard}
            isEditing={true}
            saveCard={mockHandleEdit}
            children={children}
          />
        </ThemeProvider>,
      );
      expect(screen.getByTestId('save-button')).toBeInTheDocument();
    });

    it('calls handleEdit when save button is clicked', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedCardLayout
            cardData={expandedMapCardData}
            closeExpandedCard={mockCloseExpandedCard}
            deleteCard={mockDeleteCard}
            isEditing={true}
            saveCard={mockHandleEdit}
            children={children}
          />
        </ThemeProvider>,
      );
      const saveButton = screen.getByTestId('save-button');
      act(() => {
        saveButton.click();
      });
      expect(mockHandleEdit).toHaveBeenCalledTimes(1);
    });
  });
});
