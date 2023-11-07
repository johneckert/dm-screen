import { render, screen, waitFor, act } from '@testing-library/react';
import ExpandedMonsterCard from './ExpandedMonsterCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { CardType } from '../../interfaces';
import { DEFAULT_TAB } from '../../constants';

const mockCloseExpandedCard = jest.fn();
const mockUpdateCard = jest.fn();
const mockDeleteCard = jest.fn();

jest.mock('react-markdown', () => (props: { children: string }) => <div>{props.children}</div>);
jest.mock('./newCardForms/MonsterCardForm', () => () => <div data-testid="monster-card-form"></div>);

const mockExpandedMonsterCardData = {
  id: '1',
  type: CardType.Monster,
  column: 'column-1',
  content: {
    title: 'Owlbear',
    type: 'monstrosity',
    size: 'Large',
    alignment: 'Unaligned',
    hitpointsRoll: '4d10 + 12',
    ac: '13',
    hp: '59',
    speed: '40 ft.',
    strength: '20',
    dexterity: '12',
    constitution: '17',
    intelligence: '3',
    wisdom: '12',
    charisma: '7',
    senses: 'Darkvision 60 ft., passive Perception 13',
    proficiencies: 'Perception +3',
    vulnerabilities: 'Piercing',
    conditionImmunities: 'None',
    damageImmunities: 'None',
    languages: 'None',
    challengeRating: '3',
    specialAbilities: 'Keen Sight and Smell',
    actions: 'Multiattack',
    legendaryActions: 'None',
    link: 'https://www.dndbeyond.com/monsters/owlbear',
    description: 'An owlbear is a large magical beast that looks like a cross between an owl and a bear.',
    notes: 'They are fluffy!',
  },
  tab: DEFAULT_TAB,
};

describe('ExpandedCard', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExpandedMonsterCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={mockExpandedMonsterCardData}
          deleteCard={mockDeleteCard}
          updateCard={mockUpdateCard}
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('expanded-card')).toBeInTheDocument();
  });

  describe('Edit Mode', () => {
    it('renders <MonsterCardForm>', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedMonsterCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={mockExpandedMonsterCardData}
            updateCard={mockUpdateCard}
            deleteCard={mockDeleteCard}
          />
        </ThemeProvider>,
      );

      const editButton = screen.getByTestId('edit-button');
      act(() => {
        editButton.click();
      });

      expect(screen.getByTestId('monster-card-form')).toBeInTheDocument();
    });
  });

  describe('View Mode', () => {
    it('renders edit button', () => {
      render(
        <ThemeProvider theme={theme}>
          <ExpandedMonsterCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={mockExpandedMonsterCardData}
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
          <ExpandedMonsterCard
            closeExpandedCard={mockCloseExpandedCard}
            expandedCardData={mockExpandedMonsterCardData}
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
      const content = mockExpandedMonsterCardData.content;

      beforeAll(() => {
        render(
          <ThemeProvider theme={theme}>
            <ExpandedMonsterCard
              closeExpandedCard={mockCloseExpandedCard}
              expandedCardData={mockExpandedMonsterCardData}
              updateCard={mockUpdateCard}
              deleteCard={mockDeleteCard}
            />
          </ThemeProvider>,
        );
      });

      it('renders alignment', () => {
        waitFor(() => {
          expect(screen.queryByText(content.alignment)).toBeInTheDocument();
        });
      });

      it('renders size', () => {
        waitFor(() => {
          expect(screen.queryByText(content.size)).toBeInTheDocument();
        });
      });

      it('renders type', () => {
        waitFor(() => {
          expect(screen.queryByText(content.type)).toBeInTheDocument();
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

      it('renders proficiencies', () => {
        waitFor(() => {
          expect(screen.queryByText(content.proficiencies)).toBeInTheDocument();
        });
      });

      it('renders vulnerabilities', () => {
        waitFor(() => {
          expect(screen.queryByText(content.vulnerabilities)).toBeInTheDocument();
        });
      });

      it('renders dammage immunities', () => {
        waitFor(() => {
          expect(screen.queryByText(content.damageImmunities)).toBeInTheDocument();
        });
      });

      it('renders condition immunities', () => {
        waitFor(() => {
          expect(screen.queryByText(content.conditionImmunities)).toBeInTheDocument();
        });
      });

      it('renders senses', () => {
        waitFor(() => {
          expect(screen.queryByText(content.senses)).toBeInTheDocument();
        });
      });

      it('renders challenge rating', () => {
        waitFor(() => {
          expect(screen.queryByText(content.challengeRating)).toBeInTheDocument();
        });
      });

      it('renders special abilities', () => {
        waitFor(() => {
          expect(screen.queryByText(content.specialAbilities)).toBeInTheDocument();
        });
      });

      it('renders actions', () => {
        waitFor(() => {
          expect(screen.queryByText(content.actions)).toBeInTheDocument();
        });
      });

      it('renders legendary actions', () => {
        waitFor(() => {
          expect(screen.queryByText(content.legendaryActions)).toBeInTheDocument();
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

      it('renders description', () => {
        waitFor(() => {
          expect(screen.queryByText(content.description)).toBeInTheDocument();
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
