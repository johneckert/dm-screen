import { render, screen } from '@testing-library/react';
import SmallCardLayout from './SmallCardLayout';
import { CardType } from '../../interfaces';

const mockCardData = { id: 'ABC-123', content: { title: 'Pikachu', content: 'I am Pikachu' } };
const mockLongCardData = {
  id: 'DEF-456',
  content: {
    title: 'Charmander',
    content:
      'I am Charmander, I am a fire type pokemon. My best moves are Ember and Fire Blast. My other evolutions are Charmeleon and Charizard.',
  },
};

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
  xit('renders the content if its under 100 characters', () => {
    render(<SmallCardLayout content={mockCardData.content} type={CardType.Note} />);
    expect(screen.getByText(mockCardData.content.content)).toBeInTheDocument();
  });

  xit('renders truncated content with ellipsis if longer than 100 characters', () => {
    const expectedContent = `${mockLongCardData.content.content.substring(0, 100)}...`;
    render(<SmallCardLayout content={mockLongCardData.content} type={CardType.Note} />);

    expect(screen.getByText(expectedContent)).toBeInTheDocument();
  });
});
