import React from 'react';
import { render, screen } from '@testing-library/react';
import SmallCard from './SmallCard';

const mockCardData = { id: 'ABC-123', title: 'Pikachu', content: 'I am Pikachu' };

describe('SmallCard', () => {
  it('renders', () => {
    render(<SmallCard title={mockCardData.title} content={mockCardData.content} />);
    expect(screen.getByTestId('basic-card')).toBeInTheDocument();
  });

  it('renders an avatar', () => {
    render(<SmallCard title={mockCardData.title} content={mockCardData.content} />);
    expect(screen.getByLabelText('avatar')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<SmallCard title={mockCardData.title} content={mockCardData.content} />);
    expect(screen.getByText(mockCardData.title)).toBeInTheDocument();
  });
  it('renders the content', () => {
    render(<SmallCard title={mockCardData.title} content={mockCardData.content} />);
    expect(screen.getByText(mockCardData.content)).toBeInTheDocument();
  });
});
