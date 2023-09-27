import { render, screen } from '@testing-library/react';
import SmallCard from './SmallCard';
import { CardType } from '../../interfaces';

const mockCardData = { id: 'ABC-123', title: 'Pikachu', content: { content: 'I am Pikachu' } };
const mockLongCardData = {
  id: 'DEF-456',
  title: 'Charmander',
  content: {
    content:
      'I am Charmander, I am a fire type pokemon. My best moves are Ember and Fire Blast. My other evolutions are Charmeleon and Charizard.',
  },
};

describe('SmallCard', () => {
  it('renders', () => {
    render(<SmallCard title={mockCardData.title} content={mockCardData.content} type={CardType.Note} />);
    expect(screen.getByTestId('basic-card')).toBeInTheDocument();
  });

  it('renders an avatar', () => {
    render(<SmallCard title={mockCardData.title} content={mockCardData.content} type={CardType.Note} />);
    expect(screen.getByLabelText('avatar')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<SmallCard title={mockCardData.title} content={mockCardData.content} type={CardType.Note} />);
    expect(screen.getByText(mockCardData.title)).toBeInTheDocument();
  });
  it('renders the content if its under 100 characters', () => {
    render(<SmallCard title={mockCardData.title} content={mockCardData.content} type={CardType.Note} />);
    expect(screen.getByText(mockCardData.content.content)).toBeInTheDocument();
  });

  it('renders truncated content with ellipsis if longer than 100 characters', () => {
    const expectedContent = `${mockLongCardData.content.content.substring(0, 100)}...`;
    render(<SmallCard title={mockLongCardData.title} content={mockLongCardData.content} type={CardType.Note} />);

    expect(screen.getByText(expectedContent)).toBeInTheDocument();
  });
});
