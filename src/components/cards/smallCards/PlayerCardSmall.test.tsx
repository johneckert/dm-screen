import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme';
import PlayerCardSmall from './PlayerCardSmall';

const mockPlayerCardContentNoValues = {
  title: 'Fizban the Fabulous',
};

jest.mock('../cardFields/SmallCardStatTable.tsx', () => () => <div data-testid="stat-table" />);

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

  it('renders SmallCardStatTable', () => {
    render(
      <ThemeProvider theme={theme}>
        <PlayerCardSmall content={mockPlayerCardContent} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('stat-table')).toBeInTheDocument();
  });
});
