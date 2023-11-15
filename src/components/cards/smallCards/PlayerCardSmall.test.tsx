import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme';
import PlayerCardSmall from './PlayerCardSmall';

const mockPlayerCardContentNoValues = {
  title: 'Fizban the Fabulous',
};

jest.mock('../cardFields/IconField.tsx', () => () => <div data-testid="icon-field" />);

const mockPlayerCardContent = {
  ...mockPlayerCardContentNoValues,
  charClass: 'Wizard',
  charRace: 'Human',
  charBackground: 'Sage',
  charLevel: '1',
  hp: '10',
  ac: '15',
  passivePerception: '11',
  passiveStealth: '12',
  spellSaveDC: '13',
  spellAttackBonus: '+5',
  languages: 'Common, Elvish',
};

describe('<PlayerCardSmall />', () => {
  it('renders ok with no content', () => {
    render(
      <ThemeProvider theme={theme}>
        <PlayerCardSmall content={mockPlayerCardContentNoValues} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('small-player-card')).toBeInTheDocument();
  });

  it('renders correct data in character info row', () => {
    render(
      <ThemeProvider theme={theme}>
        <PlayerCardSmall content={mockPlayerCardContent} />
      </ThemeProvider>,
    );
    expect(screen.getByText('Level 1 Human Wizard')).toBeInTheDocument();
    expect(screen.getByText('Background: Sage')).toBeInTheDocument();
  });

  it('renders correct data in character in detail block', () => {
    render(
      <ThemeProvider theme={theme}>
        <PlayerCardSmall content={mockPlayerCardContent} />
      </ThemeProvider>,
    );
    expect(screen.getByText('Passive Perception: 11')).toBeInTheDocument();
    expect(screen.getByText('Passive Stealth: 12')).toBeInTheDocument();
    expect(screen.getByText('Languages: Common, Elvish')).toBeInTheDocument();
    expect(screen.getByText('Spell Save DC: 13')).toBeInTheDocument();
    expect(screen.getByText('Spell Attack Bonus: +5')).toBeInTheDocument();
  });

  it('renders HP and AC fields', () => {
    render(
      <ThemeProvider theme={theme}>
        <PlayerCardSmall content={mockPlayerCardContent} />
      </ThemeProvider>,
    );
    expect(screen.getAllByTestId('icon-field')).toHaveLength(2);
  });
});
