import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import CardErrorBoundry from './CardErrorBoundry';

const mockDeleteCard = jest.fn();

describe('<CardErrorBoundry />', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders children when no error is thrown', () => {
    render(
      <ThemeProvider theme={theme}>
        <CardErrorBoundry deleteCard={mockDeleteCard}>
          <div data-testid="child" />
        </CardErrorBoundry>
      </ThemeProvider>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders error message when error is thrown', () => {
    const ThrowError = () => {
      throw new Error('Test');
    };
    render(
      <ThemeProvider theme={theme}>
        <CardErrorBoundry deleteCard={mockDeleteCard}>
          <ThrowError />
        </CardErrorBoundry>
      </ThemeProvider>,
    );
    expect(screen.getByTestId('card-error-boundry')).toBeInTheDocument();
  });

  it('calls deleteCard when delete icon is clicked.', () => {
    const ThrowError = () => {
      throw new Error('Test');
    };
    render(
      <ThemeProvider theme={theme}>
        <CardErrorBoundry deleteCard={mockDeleteCard}>
          <ThrowError />
        </CardErrorBoundry>
      </ThemeProvider>,
    );

    screen.getByTestId('delete-button').click();
    expect(mockDeleteCard).toHaveBeenCalled();
  });
});
