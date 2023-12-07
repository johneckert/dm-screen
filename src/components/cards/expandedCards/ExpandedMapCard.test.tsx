import { render, screen, waitFor, act } from '@testing-library/react';
import ExpandedMapCard from './ExpandedMapCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme';
import { CardType } from '../../../interfaces';
import { DEFAULT_TABS } from '../../../constants';

const mockCloseExpandedCard = jest.fn();
const mockUpdateCard = jest.fn();
const mockDeleteCard = jest.fn();

jest.mock('react-markdown', () => (props: { children: string }) => <div>{props.children}</div>);

const expandedMapCardData = {
  id: '1',
  type: CardType.Map,
  column: 'column-1',
  tab: DEFAULT_TABS,
  content: {
    title: 'Charazard',
    roomNumber: 'C1',
    readOutLoudText: 'I am Charazard',
    notes: 'Charazard is a fire pokemon',
  },
};

describe('<ExpandedMapCard />', () => {
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

  it('renders select field for tab', () => {
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

    expect(screen.getByTestId('card-tab-select')).toBeInTheDocument();
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

  it('renders input for read out loud text', () => {
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

    expect(screen.getByTestId('read-out-loud-text-input')).toBeInTheDocument();
  });

  it('renders input for notes', () => {
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

    expect(screen.getByTestId('notes-input')).toBeInTheDocument();
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

    it('renders X for room number if room number is undefined', () => {
      const noRoomNumberData = {
        ...expandedMapCardData,
        content: { ...expandedMapCardData.content, roomNumber: undefined },
      };

      render(
        <ThemeProvider theme={theme}>
          <ExpandedMapCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={noRoomNumberData}
            updateCard={mockUpdateCard}
            deleteCard={mockDeleteCard}
          />
        </ThemeProvider>,
      );

      waitFor(() => {
        const roomNumberAvatar = screen.getByTestId('room-number-view');
        expect(roomNumberAvatar).toHaveTextContent('X');
      });
    });

    it('renders read out loud text', () => {
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
        const contentComponenet = screen.getByText(expandedMapCardData.content.readOutLoudText);
        expect(contentComponenet).toBeInTheDocument();
      });
    });

    it('renders notes', () => {
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
        const contentComponenet = screen.getByText(expandedMapCardData.content.notes);
        expect(contentComponenet).toBeInTheDocument();
      });
    });
  });
});
