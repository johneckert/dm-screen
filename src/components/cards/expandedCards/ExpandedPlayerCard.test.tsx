import { render, screen, waitFor, act } from '@testing-library/react';
import ExpandedPlayerCard from './ExpandedPlayerCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme';
import { CardType } from '../../../interfaces';
import { DEFAULT_TABS } from '../../../constants';

const mockCloseExpandedCard = jest.fn();
const mockUpdateCard = jest.fn();
const mockDeleteCard = jest.fn();

jest.mock('react-markdown', () => (props: { children: string }) => <div>{props.children}</div>);
jest.mock('../newCardForms/PlayerCardForm', () => () => <div data-testid="player-card-form"></div>);

const mockExpandedPlayerCardData = {
  id: '1',
  type: CardType.Player,
  column: 'column-1',
  content: {
    title: 'Minsc',
    charRace: 'Human',
    charClass: 'Ranger',
    alignment: 'Chaotic Good',
    strength: '18',
    dexterity: '16',
    constitution: '14',
    intelligence: '10',
    wisdom: '16',
    charisma: '10',
    size: 'Medium',
    hp: '100',
    ac: '15',
    speed: '30',
    passivePerception: '15',
    passiveInvestigation: '8',
    passiveStealth: '13',
    passiveInsight: '10',
    spellCastingAbility: 'Wisdom',
    spellCastingModifier: '+5',
    spellSaveDC: '18',
    spellAttackBonus: '+8',
    link: 'https://www.dndbeyond.com/characters/12345678',
    languages: 'Common, Giant Space Hamster',
    notes: 'Minsc is a ranger who travels with his hamster Boo.',
  },
  tab: DEFAULT_TABS,
};

describe('<ExpandedPlayerCard />', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExpandedPlayerCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={mockExpandedPlayerCardData}
          deleteCard={mockDeleteCard}
          updateCard={mockUpdateCard}
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('expanded-card')).toBeInTheDocument();
  });

  describe('Edit Mode', () => {
    it('renders <PlayerCardForm>', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedPlayerCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={mockExpandedPlayerCardData}
            updateCard={mockUpdateCard}
            deleteCard={mockDeleteCard}
          />
        </ThemeProvider>,
      );

      const editButton = screen.getByTestId('edit-button');
      act(() => {
        editButton.click();
      });

      expect(screen.getByTestId('player-card-form')).toBeInTheDocument();
    });
  });

  describe('View Mode', () => {
    it('renders edit button', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedPlayerCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={mockExpandedPlayerCardData}
            updateCard={mockUpdateCard}
            deleteCard={mockDeleteCard}
          />
        </ThemeProvider>,
      );

      waitFor(() => {
        const editButton = screen.getByTestId('edit-button');
        expect(editButton).toBeInTheDocument();
      });
    });

    it('renders title', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedPlayerCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={mockExpandedPlayerCardData}
            updateCard={mockUpdateCard}
            deleteCard={mockDeleteCard}
          />
        </ThemeProvider>,
      );

      waitFor(() => {
        const titleComponent = screen.getByTestId('title-view');
        expect(titleComponent).toBeInTheDocument();
      });
    });
    describe('renders all content fields', () => {
      const content = mockExpandedPlayerCardData.content;

      beforeAll(() => {
        render(
          <ThemeProvider theme={theme}>
            <ExpandedPlayerCard
              closeExpandedCard={mockCloseExpandedCard}
              expandedCardData={mockExpandedPlayerCardData}
              updateCard={mockUpdateCard}
              deleteCard={mockDeleteCard}
            />
          </ThemeProvider>,
        );
      });

      it('renders character race', () => {
        waitFor(() => {
          expect(screen.queryByText(content.charRace)).toBeInTheDocument();
        });
      });

      it('renders character class', () => {
        waitFor(() => {
          expect(screen.queryByText(content.charClass)).toBeInTheDocument();
        });
      });

      it('renders size', () => {
        waitFor(() => {
          expect(screen.queryByText(content.size)).toBeInTheDocument();
        });
      });

      it('renders strength', () => {
        waitFor(() => {
          expect(screen.queryByText(content.strength)).toBeInTheDocument();
        });
      });

      it('renders dexterity', () => {
        waitFor(() => {
          expect(screen.queryByText(content.dexterity)).toBeInTheDocument();
        });
      });

      it('renders constitution', () => {
        waitFor(() => {
          expect(screen.queryByText(content.constitution)).toBeInTheDocument();
        });
      });

      it('renders intelligence', () => {
        waitFor(() => {
          expect(screen.queryByText(content.intelligence)).toBeInTheDocument();
        });
      });

      it('renders wisdom', () => {
        waitFor(() => {
          expect(screen.queryByText(content.wisdom)).toBeInTheDocument();
        });
      });

      it('renders charisma', () => {
        waitFor(() => {
          expect(screen.queryByText(content.charisma)).toBeInTheDocument();
        });
      });

      it('renders hp', () => {
        waitFor(() => {
          expect(screen.queryByText(content.hp)).toBeInTheDocument();
        });
      });

      it('renders ac', () => {
        waitFor(() => {
          expect(screen.queryByText(content.ac)).toBeInTheDocument();
        });
      });

      it('renders speed', () => {
        waitFor(() => {
          expect(screen.queryByText(content.speed)).toBeInTheDocument();
        });
      });

      it('renders passive perception', () => {
        waitFor(() => {
          expect(screen.queryByText(content.passivePerception)).toBeInTheDocument();
        });
      });

      it('renders passive investigation', () => {
        waitFor(() => {
          expect(screen.queryByText(content.passiveInvestigation)).toBeInTheDocument();
        });
      });

      it('renders passive stealth', () => {
        waitFor(() => {
          expect(screen.queryByText(content.passiveStealth)).toBeInTheDocument();
        });
      });

      it('renders passive insight', () => {
        waitFor(() => {
          expect(screen.queryByText(content.passiveInsight)).toBeInTheDocument();
        });
      });

      it('renders spell casting ability', () => {
        waitFor(() => {
          expect(screen.queryByText(content.spellCastingAbility)).toBeInTheDocument();
        });
      });

      it('renders spell casting modifier', () => {
        waitFor(() => {
          expect(screen.queryByText(content.spellCastingModifier)).toBeInTheDocument();
        });
      });

      it('renders spell save DC', () => {
        waitFor(() => {
          expect(screen.queryByText(content.spellSaveDC)).toBeInTheDocument();
        });
      });

      it('renders spell attack bonus', () => {
        waitFor(() => {
          expect(screen.queryByText(content.spellAttackBonus)).toBeInTheDocument();
        });
      });

      it('renders link', () => {
        waitFor(() => {
          expect(screen.queryByText(content.link)).toBeInTheDocument();
        });
      });

      it('renders languages', () => {
        waitFor(() => {
          expect(screen.queryByText(content.languages)).toBeInTheDocument();
        });
      });

      it('renders notes', () => {
        waitFor(() => {
          expect(screen.queryByText(content.notes)).toBeInTheDocument();
        });
      });
    });
  });
});
