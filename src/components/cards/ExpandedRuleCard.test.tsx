import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import ExpandedRuleCard from './ExpandedRuleCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { CardType } from '../../interfaces';

const mockCloseExpandedCard = jest.fn();
const mockUpdateCard = jest.fn();

const expandedRuleCardData = {
  id: '1',
  type: CardType.Rule,
  column: 'column-1',
  title: 'Pikachu',
  content: 'I am Pikachu',
};

describe('ExpandedCard', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExpandedRuleCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedRuleCardData}
          updateCard={mockUpdateCard}
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('expanded-card')).toBeInTheDocument();
  });

  describe('Edit Mode', () => {
    it('shows button with checkmark icon', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedRuleCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedRuleCardData}
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

    it('renders rule select while in edit mode', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedRuleCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedRuleCardData}
            updateCard={mockUpdateCard}
          />
        </ThemeProvider>,
      );

      const editButton = screen.getByTestId('edit-button');
      act(() => {
        editButton.click();
      });

      expect(screen.getByTestId('rule-select')).toBeInTheDocument();
    });

    it('calls updateCard when save button is clicked', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedRuleCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedRuleCardData}
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
    it('does not render rule select when isEditing is false', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedRuleCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedRuleCardData}
            updateCard={mockUpdateCard}
          />
        </ThemeProvider>,
      );
      expect(screen.getByTestId('rule-select')).not.toBeInTheDocument();
    });

    it('renders selected rule', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedRuleCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedRuleCardData}
            updateCard={mockUpdateCard}
          />
        </ThemeProvider>,
      );

      expect(screen.getByTestId('selected-rule')).toBeInTheDocument();
    });

    it('shows button with pencil icon', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedRuleCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedRuleCardData}
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
