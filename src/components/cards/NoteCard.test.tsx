import React from 'react';
import { render, screen, act } from '@testing-library/react';
import NoteCard from './NoteCard';

const mockCardData = { id: 'ABC-123', title: 'Pikachu', content: 'I am Pikachu' };

describe('NoteCard', () => {
  it('renders', () => {
    render(<NoteCard title={mockCardData.title} content={mockCardData.content} />);
    expect(screen.getByTestId('basic-card')).toBeInTheDocument();
  });

  it('renders an avatar', () => {
    render(<NoteCard title={mockCardData.title} content={mockCardData.content} />);
    expect(screen.getByLabelText('avatar')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<NoteCard title={mockCardData.title} content={mockCardData.content} />);
    expect(screen.getByText(mockCardData.title)).toBeInTheDocument();
  });
  it('renders the content', () => {
    render(<NoteCard title={mockCardData.title} content={mockCardData.content} />);
    expect(screen.getByText(mockCardData.content)).toBeInTheDocument();
  });
});
