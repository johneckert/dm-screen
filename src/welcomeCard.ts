import { CardData, CardType } from './interfaces';
import { DEFAULT_TABS } from './constants';
import { RULES } from './ruleData';

const RULE_CARDS: CardData[] = RULES.map((rule: string, index) => ({
  id: `rule-${rule}`,
  content: {
    title: rule,
  },
  column: `droppable-${(index % 4) + 1}`,
  tab: DEFAULT_TABS[1],
  type: CardType.Rule,
}));

export const WELCOME_CARDS: CardData[] = [
  {
    id: 'welcome-1',
    content: {
      title: 'Welcome to the DM Screen!',
      notes: 'This is a digital DM screen for D&D 5e. It is designed to be used while DM-ing games online.',
    },
    column: 'droppable-1',
    tab: DEFAULT_TABS[0],
    type: CardType.Note,
  },
  ...RULE_CARDS,
];
