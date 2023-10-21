import { render, screen, waitFor, act } from '@testing-library/react';
import ExpandedNoteCard from './ExpandedNoteCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { CardType } from '../../interfaces';
import { DEFAULT_TAB } from '../../constants';

const mockCloseExpandedCard = jest.fn();
const mockUpdateCard = jest.fn();
const mockDeleteCard = jest.fn();

jest.mock('react-markdown', () => (props: { children: string }) => <div>{props.children}</div>);

const expandedNoteCardData = {
  id: '1',
  type: CardType.Note,
  column: 'column-1',
  title: 'Pikachu',
  content: { content: 'I am Pikachu' },
  tab: DEFAULT_TAB,
};

describe('ExpandedCard', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExpandedNoteCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedNoteCardData}
          deleteCard={mockDeleteCard}
          updateCard={mockUpdateCard}
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('expanded-card')).toBeInTheDocument();
  });

  describe('Edit Mode', () => {
    it('renders input for title', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedNoteCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
            deleteCard={mockDeleteCard}
          />
        </ThemeProvider>,
      );

      const editButton = screen.getByTestId('edit-button');
      act(() => {
        editButton.click();
      });

      expect(screen.getByTestId('title-input')).toBeInTheDocument();
    });

    it('renders select field for tab', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedNoteCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
            deleteCard={mockDeleteCard}
          />
        </ThemeProvider>,
      );

      const editButton = screen.getByTestId('edit-button');
      act(() => {
        editButton.click();
      });

      expect(screen.getByTestId('card-tab-select')).toBeInTheDocument();
    });

    it('renders input for content', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedNoteCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
            deleteCard={mockDeleteCard}
          />
        </ThemeProvider>,
      );

      const editButton = screen.getByTestId('edit-button');
      act(() => {
        editButton.click();
      });

      expect(screen.getByTestId('content-input')).toBeInTheDocument();
    });
  });

  describe('View Mode', () => {
    it('renders edit button', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedNoteCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
            deleteCard={mockDeleteCard}
          />
        </ThemeProvider>,
      );

      waitFor(() => {
        const editButton = screen.getByTestId('edit-button');
        expect(editButton).toBeInTheDocument();
      });
    });

    it('renders title', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedNoteCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
            deleteCard={mockDeleteCard}
          />
        </ThemeProvider>,
      );

      waitFor(() => {
        const titleComponent = screen.getByTestId('title-view');
        expect(titleComponent).toBeInTheDocument();
      });
    });
    it('renders content', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedNoteCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedNoteCardData}
            updateCard={mockUpdateCard}
            deleteCard={mockDeleteCard}
          />
        </ThemeProvider>,
      );

      waitFor(() => {
        const contentComponenet = screen.getByTestId('content-view');
        expect(contentComponenet).toBeInTheDocument();
      });
    });
  });
});
