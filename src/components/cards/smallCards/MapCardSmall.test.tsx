import { render, screen } from '@testing-library/react';
import MapCardSmall from './MapCardSmall';

const mockMapCardContentNoText = {
  id: '1',
  title: 'A spooky room',
  roomNumber: 'A1',
  notes: 'This is a test room',
};

const mockMapCardContentWithShortText = {
  ...mockMapCardContentNoText,
  readOutLoudText: 'This is a short description',
};

const mockMapCardContentWithLongText = {
  ...mockMapCardContentNoText,
  readOutLoudText:
    'The ancient door creaks open, revealing a dim chamber. Torches cast flickering shadows on worn stone walls. In the center, an ornate table bears the scars of forgotten deliberations. Bookshelves line the room, laden with dusty tomes and scrolls. A faded tapestry depicts knights battling dragons. A stone pedestal holds a mysterious artifact, emitting an otherworldly glow. Water droplets echo, creating a haunting cadence. A narrow staircase ascends into shadows. The air is thick with the weight of history, promising both peril and revelation to those who dare explore.',
};

describe('<MapCardSmall />', () => {
  it('renders with no text if readOutLoudText is undefined', () => {
    render(<MapCardSmall content={mockMapCardContentNoText} />);
    expect(screen.getByTestId('small-room-card')).toHaveTextContent('');
  });

  it('renders full readOutLoudText if string is less than 500 characters', () => {
    render(<MapCardSmall content={mockMapCardContentWithShortText} />);
    expect(screen.getByTestId('small-room-card')).toHaveTextContent(mockMapCardContentWithShortText.readOutLoudText);
  });

  it('renders truncated readOutLoudText if string is more than 500 characters', () => {
    const truncatedText = `${mockMapCardContentWithLongText.readOutLoudText.substring(0, 200)}...`;

    render(<MapCardSmall content={mockMapCardContentWithLongText} />);
    expect(screen.getByTestId('small-room-card')).toHaveTextContent(truncatedText);
  });
});
