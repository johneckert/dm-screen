import { render, screen } from '@testing-library/react';
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
      <CardErrorBoundry deleteCard={mockDeleteCard}>
        <div data-testid="child" />
      </CardErrorBoundry>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders error message when error is thrown', () => {
    const ThrowError = () => {
      throw new Error('Test');
    };
    render(
      <CardErrorBoundry deleteCard={mockDeleteCard}>
        <ThrowError />
      </CardErrorBoundry>,
    );
    expect(screen.getByTestId('card-error-boundry')).toBeInTheDocument();
  });

  it('calls deleteCard when delete icon is clicked.', () => {
    const ThrowError = () => {
      throw new Error('Test');
    };
    render(
      <CardErrorBoundry deleteCard={mockDeleteCard}>
        <ThrowError />
      </CardErrorBoundry>,
    );

    screen.getByTestId('delete-button').click();
    expect(mockDeleteCard).toHaveBeenCalled();
  });
});
