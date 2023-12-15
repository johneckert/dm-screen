import { render, screen } from '@testing-library/react';
import MonsterCardSmall from './MonsterCardSmall';

const mockMonsterCardContentNoValues = {
  title: 'Owlbear',
};

jest.mock('../cardFields/SmallCardStatTable.tsx', () => () => <div data-testid="stat-table" />);

const mockMonsterCardContent = {
  ...mockMonsterCardContentNoValues,
  type: 'monstrosity',
  size: 'Large',
  ac: '13',
  hp: '59',
  speed: '40 ft.',
  senses: 'Darkvision 60 ft., passive Perception 13',
  proficiencies: 'Perception +3',
  languages: 'None',
  challengeRating: '3',
};

describe('<MonsterCardSmall />', () => {
  it('renders ok with no content', () => {
    render(<MonsterCardSmall content={mockMonsterCardContentNoValues} />);
    expect(screen.getByTestId('small-player-card')).toBeInTheDocument();
  });

  it('renders correct data in character info row', () => {
    render(<MonsterCardSmall content={mockMonsterCardContent} />);
    expect(screen.getByText('Large monstrosity')).toBeInTheDocument();
    expect(screen.getByText('CR 3')).toBeInTheDocument();
  });

  it('renders SmallCardStatTable', () => {
    render(<MonsterCardSmall content={mockMonsterCardContent} />);
    expect(screen.getByTestId('stat-table')).toBeInTheDocument();
  });
});
