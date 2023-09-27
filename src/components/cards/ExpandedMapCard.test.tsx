import { render, screen, waitFor, act } from '@testing-library/react';
import ExpandedMapCard from './ExpandedMapCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { CardType } from '../../interfaces';

const mockCloseExpandedCard = jest.fn();
const mockUpdateCard = jest.fn();
const mockDeleteCard = jest.fn();

jest.mock('react-markdown', () => (props: { children: string }) => <div>{props.children}</div>);

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

describe('ExpandedCard', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExpandedMapCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedMapCardData}
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
          <ExpandedMapCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedMapCardData}
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
  });

  it('renders input for room number', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExpandedMapCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedMapCardData}
          updateCard={mockUpdateCard}
          deleteCard={mockDeleteCard}
        />
      </ThemeProvider>,
    );

    const editButton = screen.getByTestId('edit-button');
    act(() => {
      editButton.click();
    });

    expect(screen.getByTestId('room-number-input')).toBeInTheDocument();
  });

  it('renders input for description', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExpandedMapCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedMapCardData}
          updateCard={mockUpdateCard}
          deleteCard={mockDeleteCard}
        />
      </ThemeProvider>,
    );

    const editButton = screen.getByTestId('edit-button');
    act(() => {
      editButton.click();
    });

    expect(screen.getByTestId('description-input')).toBeInTheDocument();
  });

  it('renders input for content', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExpandedMapCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedMapCardData}
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

  describe('View Mode', () => {
    it('renders edit button', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedMapCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedMapCardData}
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
          <ExpandedMapCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedMapCardData}
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

    it('renders room number', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedMapCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedMapCardData}
            updateCard={mockUpdateCard}
            deleteCard={mockDeleteCard}
          />
        </ThemeProvider>,
      );

      waitFor(() => {
        const contentComponenet = screen.getByTestId('room-number-view');
        expect(contentComponenet).toBeInTheDocument();
      });
    });

    it('renders description', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedMapCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedMapCardData}
            updateCard={mockUpdateCard}
            deleteCard={mockDeleteCard}
          />
        </ThemeProvider>,
      );

      waitFor(() => {
        const contentComponenet = screen.getByTestId('description-view');
        expect(contentComponenet).toBeInTheDocument();
      });
    });

    it('renders content', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedMapCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={expandedMapCardData}
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
