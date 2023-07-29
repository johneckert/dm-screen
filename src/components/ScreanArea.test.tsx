import { render, screen } from '@testing-library/react';
import ScreenArea from './ScreenArea';

jest.mock('react-dnd', () => ({
  useDrop: () => [[], jest.fn()],
}));

jest.mock('./DraggableCard.tsx', () => () => <div />);

describe('ScreenArea', () => {
  it('renders', () => {
    render(<ScreenArea />);
    expect(screen.getByTestId('screen-area')).toBeInTheDocument();
  });
});
