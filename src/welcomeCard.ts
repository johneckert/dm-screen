import { CardData, CardType } from './interfaces';

export const WELCOME_CARDS: CardData[] = [
  {
    id: 'welcome-1',
    title: 'Welcome to the DM Screen!',
    content: {
      content: 'This is a digital DM screen for D&D 5e. It is designed to be used while DM-ing games online.',
    },
    column: 'droppable-1',
    type: CardType.Note,
  },
];
