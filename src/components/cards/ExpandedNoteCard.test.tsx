import React from 'react';
import { render, screen } from '@testing-library/react';
import ExpandedNoteCard from './ExpandedNoteCard';

const mockCardData = { title: 'Pikachu', content: 'I am Pikachu' };

describe('ExpandedNoteCard', () => {
  it('renders the title', () => {
    render(<ExpandedNoteCard title={mockCardData.title} content={mockCardData.content} />);
    expect(screen.getByText(mockCardData.title)).toBeInTheDocument();
  });
  it('renders the content', () => {
    render(<ExpandedNoteCard title={mockCardData.title} content={mockCardData.content} />);
    expect(screen.getByText(mockCardData.content)).toBeInTheDocument();
  });
});
