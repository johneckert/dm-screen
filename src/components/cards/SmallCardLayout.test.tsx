import { render, screen } from '@testing-library/react';
import SmallCardLayout from './SmallCardLayout';
import { CardType } from '../../interfaces';

const mockCardData = { id: 'ABC-123', content: { title: 'Pikachu', content: 'I am Pikachu' } };

describe('<SmallCardLayout />', () => {
  it('renders', () => {
    render(<SmallCardLayout content={mockCardData.content} type={CardType.Note} />);
    expect(screen.getByTestId('basic-card')).toBeInTheDocument();
  });

  it('renders an avatar', () => {
    render(<SmallCardLayout content={mockCardData.content} type={CardType.Note} />);
    expect(screen.getByLabelText('avatar')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<SmallCardLayout content={mockCardData.content} type={CardType.Note} />);
    expect(screen.getByText(mockCardData.content.title)).toBeInTheDocument();
  });
});
