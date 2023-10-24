import { render, screen, waitFor, act } from '@testing-library/react';
import ExpandedPlayerCard from './ExpandedPlayerCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { CardType } from '../../interfaces';
import { DEFAULT_TAB } from '../../constants';

const mockCloseExpandedCard = jest.fn();
const mockUpdateCard = jest.fn();
const mockDeleteCard = jest.fn();

jest.mock('react-markdown', () => (props: { children: string }) => <div>{props.children}</div>);
jest.mock('./newCardForms/PlayerCardForm', () => () => <div data-testid="player-card-form"></div>);

const mockExpandedPlayerCardData = {
  id: '1',
  type: CardType.Player,
  column: 'column-1',
  title: 'Pikachu',
  content: { content: 'I am Pikachu' },
  tab: DEFAULT_TAB,
};

describe('ExpandedCard', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExpandedPlayerCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={mockExpandedPlayerCardData}
          deleteCard={mockDeleteCard}
          updateCard={mockUpdateCard}
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('expanded-card')).toBeInTheDocument();
  });

  describe('Edit Mode', () => {
    it('renders <PlayerCardForm>', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedPlayerCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={mockExpandedPlayerCardData}
            updateCard={mockUpdateCard}
            deleteCard={mockDeleteCard}
          />
        </ThemeProvider>,
      );

      const editButton = screen.getByTestId('edit-button');
      act(() => {
        editButton.click();
      });

      expect(screen.getByTestId('player-card-form')).toBeInTheDocument();
    });
  });

  describe('View Mode', () => {
    it('renders edit button', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedPlayerCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={mockExpandedPlayerCardData}
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
          <ExpandedPlayerCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={mockExpandedPlayerCardData}
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
          <ExpandedPlayerCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={mockExpandedPlayerCardData}
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
