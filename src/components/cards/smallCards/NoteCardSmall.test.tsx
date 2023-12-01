import { render, screen } from '@testing-library/react';
import NoteCardSmall from './NoteCardSmall';

const mockNoteCardContentNoText = {
  id: '1',
  title: 'This is a note card.',
};

const mockNoteCardContentWithShortText = {
  ...mockNoteCardContentNoText,
  notes: 'This is some notes about something.',
};

const mockNoteCardContentWithLongText = {
  ...mockNoteCardContentNoText,
  notes:
    'Player crits, dealing massive damage to the dragon. Tension rises as the party narrowly escapes a collapsing dungeon. NPC betrayal hints at a larger conspiracy. Mysterious artifact reveals a cryptic prophecy. Intense roleplay during negotiations with a rival faction. Tension builds as the party uncovers a hidden cult within the city.',
};

jest.mock('react-markdown', () => (props: { children: string }) => <div>{props.children}</div>);

describe('<NoteCardSmall />', () => {
  it('renders with no text if notes is undefined', () => {
    render(<NoteCardSmall content={mockNoteCardContentNoText} />);
    expect(screen.getByTestId('small-note-card')).toHaveTextContent('');
  });

  it('renders full notes if string is less than 500 characters', () => {
    render(<NoteCardSmall content={mockNoteCardContentWithShortText} />);
    expect(screen.getByTestId('small-note-card')).toHaveTextContent(mockNoteCardContentWithShortText.notes);
  });

  it('renders truncated notes if string is more than 500 characters', () => {
    const truncatedText = `${mockNoteCardContentWithLongText.notes.substring(0, 300)}...`;

    render(<NoteCardSmall content={mockNoteCardContentWithLongText} />);
    expect(screen.getByTestId('small-note-card')).toHaveTextContent(truncatedText);
  });
});
