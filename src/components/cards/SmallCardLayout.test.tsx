import { render, screen } from '@testing-library/react';
import SmallCardLayout from './SmallCardLayout';
import { CardType } from '../../interfaces';

const mockCardData = { id: 'ABC-123', content: { title: 'Pikachu', content: 'I am Pikachu' } };
const mockHandleContextMenuOpen = jest.fn();

jest.mock('react-markdown', () => (props: { children: string }) => <div>{props.children}</div>);

describe('<SmallCardLayout />', () => {
  it('renders', () => {
    render(
      <SmallCardLayout
        content={mockCardData.content}
        type={CardType.Note}
        handleContextMenuOpen={mockHandleContextMenuOpen}
      />,
    );
    expect(screen.getByTestId('basic-card')).toBeInTheDocument();
  });

  it('renders an avatar', () => {
    render(
      <SmallCardLayout
        content={mockCardData.content}
        type={CardType.Note}
        handleContextMenuOpen={mockHandleContextMenuOpen}
      />,
    );
    expect(screen.getByLabelText('avatar')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(
      <SmallCardLayout
        content={mockCardData.content}
        type={CardType.Note}
        handleContextMenuOpen={mockHandleContextMenuOpen}
      />,
    );
    expect(screen.getByText(mockCardData.content.title)).toBeInTheDocument();
  });

  it('opens a custom menu when right clicked', () => {
    render(
      <SmallCardLayout
        content={mockCardData.content}
        type={CardType.Note}
        handleContextMenuOpen={mockHandleContextMenuOpen}
      />,
    );
    const card = screen.getByTestId('basic-card');
    card.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true }));
    expect(mockHandleContextMenuOpen).toHaveBeenCalled();
  });
});
