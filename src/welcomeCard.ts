import { CardData, CardType } from './interfaces';
import { DEFAULT_TAB } from './constants';

export const WELCOME_CARDS: CardData[] = [
  {
    id: 'welcome-1',
    title: 'Welcome to the DM Screen!',
    content: {
      content: 'This is a digital DM screen for D&D 5e. It is designed to be used while DM-ing games online.',
    },
    column: 'droppable-1',
    tab: DEFAULT_TAB,
    type: CardType.Note,
  },
];
