import { render, screen } from '@testing-library/react';
import NoteCardSmall from './NoteCardSmall';

const mockMapCardContentNoText = {
  id: '1',
  title: 'This is a note card.',
};

const mockMapCardContentWithShortText = {
  ...mockMapCardContentNoText,
  notes: 'This is some notes about something.',
};

const mockMapCardContentWithLongText = {
  ...mockMapCardContentNoText,
  notes:
    'Player crits, dealing massive damage to the dragon. Tension rises as the party narrowly escapes a collapsing dungeon. NPC betrayal hints at a larger conspiracy. Mysterious artifact reveals a cryptic prophecy. Intense roleplay during negotiations with a rival faction. Tension builds as the party uncovers a hidden cult within the city.',
};

describe('<NoteCardSmall />', () => {
  it('renders with no text if notes is undefined', () => {
    render(<NoteCardSmall content={mockMapCardContentNoText} />);
    expect(screen.getByTestId('small-note-card')).toHaveTextContent('');
  });

  it('renders full notes if string is less than 500 characters', () => {
    render(<NoteCardSmall content={mockMapCardContentWithShortText} />);
    expect(screen.getByTestId('small-note-card')).toHaveTextContent(mockMapCardContentWithShortText.notes);
  });

  it('renders truncated notes if string is more than 500 characters', () => {
    const truncatedText = `${mockMapCardContentWithLongText.notes.substring(0, 300)}...`;

    render(<NoteCardSmall content={mockMapCardContentWithLongText} />);
    expect(screen.getByTestId('small-note-card')).toHaveTextContent(truncatedText);
  });
});
