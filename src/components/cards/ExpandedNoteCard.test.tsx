import { render, screen, waitFor, act } from '@testing-library/react';
import ExpandedNoteCard from './ExpandedNoteCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { CardType } from '../../interfaces';

const mockCloseExpandedCard = jest.fn();
const mockUpdateCard = jest.fn();
const expandedNoteCardData = {
  id: '1',
  type: CardType.Note,
  column: 'column-1',
  title: 'Pikachu',
  content: { content: 'I am Pikachu' },
};

describe('ExpandedCard', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExpandedNoteCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedNoteCardData}
          updateCard={mockUpdateCard}
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('expanded-card')).toBeInTheDocument();
  });

  describe('Edit Mode', () => {
    it('shows button with check mark icon', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedNoteCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
          />
        </ThemeProvider>,
      );
      const editButton = screen.getByTestId('edit-button');
      act(() => {
        editButton.click();
      });

      waitFor(() => {
        const saveButton = screen.getByTestId('save-button');
        expect(saveButton).toBeInTheDocument();
      });
    });

    it('renders text fields when isEditing is true', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedNoteCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
          />
        </ThemeProvider>,
      );

      const editButton = screen.getByTestId('edit-button');
      act(() => {
        editButton.click();
      });

      expect(screen.getByTestId('title-input')).toBeInTheDocument();
      expect(screen.getByTestId('content-input')).toBeInTheDocument();
    });

    it('calls updateCard when save button is clicked', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedNoteCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
          />
        </ThemeProvider>,
      );

      const editButton = screen.getByTestId('edit-button');
      act(() => {
        editButton.click();
      });

      const saveButton = screen.getByTestId('save-button');
      act(() => {
        saveButton.click();
      });

      waitFor(() => {
        expect(mockUpdateCard).toHaveBeenCalled();
      });
    });
  });

  describe('View Mode', () => {
    it('does not render text fields when isEditing is false', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedNoteCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
          />
        </ThemeProvider>,
      );
      expect(screen.queryByLabelText('title')).not.toBeInTheDocument();
      expect(screen.queryByLabelText('content')).not.toBeInTheDocument();
    });

    it('shows button with pencil icon', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedNoteCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
          />
        </ThemeProvider>,
      );

      waitFor(() => {
        const editButton = screen.getByTestId('edit-button');
        expect(editButton).toBeInTheDocument();
      });
    });
  });
});
