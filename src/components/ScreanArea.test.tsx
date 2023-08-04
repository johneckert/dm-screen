import { render, screen, waitFor, act } from '@testing-library/react';
import ScreenArea from './ScreenArea';

jest.mock('react-dnd', () => ({
  useDrop: () => [[], jest.fn()],
}));

jest.mock('./DraggableCard.tsx', () => () => <div data-testid="draggable-card" />);

describe('ScreenArea', () => {
  it('renders', () => {
    render(<ScreenArea />);
    expect(screen.getByTestId('screen-area')).toBeInTheDocument();
  });

  it('renders the correct number of draggable cards', () => {
    render(<ScreenArea />);
    expect(screen.getAllByTestId('draggable-card')).toHaveLength(2);
  });

  it('resizes the screen area when the window is resized', () => {
    render(<ScreenArea />);
    const screenArea = screen.getByTestId('screen-area');

    act(() => {
      const resizeEvent = new Event('resize');
      window.innerWidth = 1000;
      window.innerHeight = 1000;
      window.dispatchEvent(resizeEvent);
    });

    waitFor(() => {
      expect(screenArea).toHaveStyle('width: 1000px');
      expect(screenArea).toHaveStyle('height: 1000px');
    });
  });
});
