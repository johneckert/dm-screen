import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import NewCardDialog from './NewCardDialog';

const mockCloseNewCardDialog = jest.fn();
const mockCreateNewCard = jest.fn();
jest.mock('../layout/ButtonArea', () => () => <div data-testid="button-area" />);

// TODO: Add tests for all card types - how to manipulate select field?

describe('<NewCardDialog />', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewCardDialog isVisible={true} closeNewCardDialog={mockCloseNewCardDialog} createCard={mockCreateNewCard} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('expanded-card')).toBeInTheDocument();
  });

  it('renders select field for card type', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewCardDialog isVisible={true} closeNewCardDialog={mockCloseNewCardDialog} createCard={mockCreateNewCard} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('card-type-select')).toBeInTheDocument();
  });

  it('renders select field for column', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewCardDialog isVisible={true} closeNewCardDialog={mockCloseNewCardDialog} createCard={mockCreateNewCard} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('card-column-select')).toBeInTheDocument();
  });

  it('renders correct form', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewCardDialog isVisible={true} closeNewCardDialog={mockCloseNewCardDialog} createCard={mockCreateNewCard} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('note-form')).toBeInTheDocument();
  });

  it('renders button area', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewCardDialog isVisible={true} closeNewCardDialog={mockCloseNewCardDialog} createCard={mockCreateNewCard} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('button-area')).toBeInTheDocument();
  });
});
