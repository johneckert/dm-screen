import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme';
import MonsterCardSmall from './MonsterCardSmall';

const mockMonsterCardContentNoValues = {
  title: 'Owlbear',
};

jest.mock('../cardFields/IconField.tsx', () => () => <div data-testid="icon-field" />);
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
    render(
      <ThemeProvider theme={theme}>
        <MonsterCardSmall content={mockMonsterCardContentNoValues} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('small-player-card')).toBeInTheDocument();
  });

  it('renders correct data in character info row', () => {
    render(
      <ThemeProvider theme={theme}>
        <MonsterCardSmall content={mockMonsterCardContent} />
      </ThemeProvider>,
    );
    expect(screen.getByText('Large monstrosity')).toBeInTheDocument();
    expect(screen.getByText('CR 3')).toBeInTheDocument();
  });

  it('renders SmallCardStatTable', () => {
    render(
      <ThemeProvider theme={theme}>
        <MonsterCardSmall content={mockMonsterCardContent} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('stat-table')).toBeInTheDocument();
  });

  it('renders HP and AC fields', () => {
    render(
      <ThemeProvider theme={theme}>
        <MonsterCardSmall content={mockMonsterCardContent} />
      </ThemeProvider>,
    );
    expect(screen.getAllByTestId('icon-field')).toHaveLength(2);
  });
});
