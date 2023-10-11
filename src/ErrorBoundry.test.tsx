import { render, screen } from '@testing-library/react';
import ErrorBoundry from './ErrorBoundry';

describe('<ErrorBoundry />', () => {
  it('renders children when no error is thrown', () => {
    render(
      <ErrorBoundry>
        <div data-testid="child" />
      </ErrorBoundry>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders error message when error is thrown', () => {
    const ThrowError = () => {
      throw new Error('Test');
    };
    render(
      <ErrorBoundry>
        <ThrowError />
      </ErrorBoundry>,
    );
    expect(screen.getByTestId('error-boundry')).toBeInTheDocument();
  });
});
