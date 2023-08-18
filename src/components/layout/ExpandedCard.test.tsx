import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import ExpandedCard from './ExpandedCard';
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
  content: 'I am Pikachu',
};

describe('ExpandedCard', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExpandedCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedNoteCardData}
          updateCard={mockUpdateCard}
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('expanded-card')).toBeInTheDocument();
  });

  describe('Edit Mode', () => {
    it('shows button text as "Save"', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
          />
        </ThemeProvider>,
      );
      const editButton = screen.getByText('Edit');
      act(() => {
        editButton.click();
      });

      waitFor(() => {
        const saveButton = screen.getByText('Save');
        expect(saveButton).toBeInTheDocument();
      });
    });

    it('renders text fields when isEditing is true', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
          />
        </ThemeProvider>,
      );

      const editButton = screen.getByText('Edit');
      act(() => {
        editButton.click();
      });

      expect(screen.getByLabelText('title')).toBeInTheDocument();
      expect(screen.getByLabelText('content')).toBeInTheDocument();
    });

    it('calls updateCard when save button is clicked', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
          />
        </ThemeProvider>,
      );

      const editButton = screen.getByText('Edit');
      act(() => {
        editButton.click();
      });

      const saveButton = screen.getByText('Save');
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
          <ExpandedCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
          />
        </ThemeProvider>,
      );
      expect(screen.queryByLabelText('title')).not.toBeInTheDocument();
      expect(screen.queryByLabelText('content')).not.toBeInTheDocument();
    });

    it('shows button text as "Edit"', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
          />
        </ThemeProvider>,
      );

      waitFor(() => {
        const editButton = screen.getByText('Edit');
        expect(editButton).toBeInTheDocument();
      });
    });
  });
});
