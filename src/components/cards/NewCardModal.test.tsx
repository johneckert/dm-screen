import { render, screen, act } from '@testing-library/react';
import NewCardModal from './NewCardModal';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

const mockCloseNewCardModal = jest.fn();
const mockCreateNewCard = jest.fn();

// TODO: Add tests for all card types - how to manipulate select field?

describe('NewCardModal', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewCardModal isVisible={true} closeNewCardModal={mockCloseNewCardModal} createCard={mockCreateNewCard} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('expanded-card')).toBeInTheDocument();
  });

  it('renders select field for card type', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewCardModal isVisible={true} closeNewCardModal={mockCloseNewCardModal} createCard={mockCreateNewCard} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('card-type-select')).toBeInTheDocument();
  });

  it('renders select field for tab', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewCardModal isVisible={true} closeNewCardModal={mockCloseNewCardModal} createCard={mockCreateNewCard} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('card-tab-select')).toBeInTheDocument();
  });

  it('renders select field for column', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewCardModal isVisible={true} closeNewCardModal={mockCloseNewCardModal} createCard={mockCreateNewCard} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('card-column-select')).toBeInTheDocument();
  });

  it('renders correct form', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewCardModal isVisible={true} closeNewCardModal={mockCloseNewCardModal} createCard={mockCreateNewCard} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('note-form')).toBeInTheDocument();
  });

  describe('button actions', () => {
    it('renders cancel button', () => {
      render(
        <ThemeProvider theme={theme}>
          <NewCardModal isVisible={true} closeNewCardModal={mockCloseNewCardModal} createCard={mockCreateNewCard} />
        </ThemeProvider>,
      );
      expect(screen.getByTestId('cancel-button')).toBeInTheDocument();
    });

    it('calls closeNewCardModal when cancel button is clicked', () => {
      render(
        <ThemeProvider theme={theme}>
          <NewCardModal isVisible={true} closeNewCardModal={mockCloseNewCardModal} createCard={mockCreateNewCard} />
        </ThemeProvider>,
      );
      const cancelButton = screen.getByTestId('cancel-button');
      act(() => {
        cancelButton.click();
      });
      expect(mockCloseNewCardModal).toHaveBeenCalledTimes(1);
    });

    it('renders save button', () => {
      render(
        <ThemeProvider theme={theme}>
          <NewCardModal isVisible={true} closeNewCardModal={mockCloseNewCardModal} createCard={mockCreateNewCard} />
        </ThemeProvider>,
      );
      expect(screen.getByTestId('save-button')).toBeInTheDocument();
    });

    it('calls handleEdit when save button is clicked', () => {
      render(
        <ThemeProvider theme={theme}>
          <NewCardModal isVisible={true} closeNewCardModal={mockCloseNewCardModal} createCard={mockCreateNewCard} />
        </ThemeProvider>,
      );
      const saveButton = screen.getByTestId('save-button');
      act(() => {
        saveButton.click();
      });
      expect(mockCreateNewCard).toHaveBeenCalledTimes(1);
    });
  });
});
