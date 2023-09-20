import { render, screen } from '@testing-library/react';
import SmallCard from './SmallCard';
import { CardType } from '../../interfaces';

const mockCardData = { id: 'ABC-123', title: 'Pikachu', content: { content: 'I am Pikachu' } };

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
  it('renders the content', () => {
    render(<SmallCard title={mockCardData.title} content={mockCardData.content} type={CardType.Note} />);
    expect(screen.getByText(mockCardData.content.content)).toBeInTheDocument();
  });
});
