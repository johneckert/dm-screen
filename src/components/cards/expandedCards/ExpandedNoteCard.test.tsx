import { render, screen, waitFor, act } from '@testing-library/react';
import ExpandedNoteCard from './ExpandedNoteCard';
import { CardType } from '../../../interfaces';
import { DEFAULT_TABS } from '../../../constants';

const mockCloseExpandedCard = jest.fn();
const mockUpdateCard = jest.fn();
const mockDeleteCard = jest.fn();

jest.mock('react-markdown', () => (props: { children: string }) => <div>{props.children}</div>);

const expandedNoteCardData = {
  id: '1',
  type: CardType.Note,
  column: 'column-1',
  content: { title: 'Pikachu', notes: 'I am Pikachu' },
  tab: DEFAULT_TABS[0],
};

describe('<ExpandedNoteCard />', () => {
  it('renders', () => {
    render(
      <ExpandedNoteCard
        closeExpandedCard={mockCloseExpandedCard}
        expandedCardData={expandedNoteCardData}
        deleteCard={mockDeleteCard}
        updateCard={mockUpdateCard}
      />,
    );
    expect(screen.getByTestId('expanded-card')).toBeInTheDocument();
  });

  describe('Edit Mode', () => {
    it('renders input for title', () => {
      render(
        <ExpandedNoteCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedNoteCardData}
          updateCard={mockUpdateCard}
          deleteCard={mockDeleteCard}
        />,
      );

      const editButton = screen.getByTestId('edit-button');
      act(() => {
        editButton.click();
      });

      expect(screen.getByTestId('title-input')).toBeInTheDocument();
    });

    it('renders input for notes', () => {
      render(
        <ExpandedNoteCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedNoteCardData}
          updateCard={mockUpdateCard}
          deleteCard={mockDeleteCard}
        />,
      );

      const editButton = screen.getByTestId('edit-button');
      act(() => {
        editButton.click();
      });

      expect(screen.getByTestId('notes-input')).toBeInTheDocument();
    });
  });

  describe('View Mode', () => {
    it('renders edit button', () => {
      render(
        <ExpandedNoteCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedNoteCardData}
          updateCard={mockUpdateCard}
          deleteCard={mockDeleteCard}
        />,
      );

      waitFor(() => {
        const editButton = screen.getByTestId('edit-button');
        expect(editButton).toBeInTheDocument();
      });
    });

    it('renders title', () => {
      render(
        <ExpandedNoteCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedNoteCardData}
          updateCard={mockUpdateCard}
          deleteCard={mockDeleteCard}
        />,
      );

      waitFor(() => {
        const titleComponent = screen.getByTestId('title-view');
        expect(titleComponent).toBeInTheDocument();
      });
    });
    it('renders notes', () => {
      render(
        <ExpandedNoteCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedNoteCardData}
          updateCard={mockUpdateCard}
          deleteCard={mockDeleteCard}
        />,
      );

      waitFor(() => {
        const contentComponenet = screen.getByText(expandedNoteCardData.content.notes);
        expect(contentComponenet).toBeInTheDocument();
      });
    });
  });
});
