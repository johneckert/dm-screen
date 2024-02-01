import { CardData, CardType } from './interfaces';
import { DEFAULT_TABS } from './constants';
import { RULES } from './ruleData';

export const DEFAULT_CARDS: CardData[] = RULES.map((rule: string, index) => ({
  id: `rule-${rule}`,
  content: {
    title: rule,
  },
  column: `droppable-${(index % 4) + 1}`,
  tab: DEFAULT_TABS[0],
  type: CardType.Rule,
}));
