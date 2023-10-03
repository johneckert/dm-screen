import { CardData, CardType } from './interfaces';
import { v4 as uuidv4 } from 'uuid';

export const WELCOME_CARDS: CardData[] = [
  {
    id: uuidv4(),
    title: 'Welcome to the DM Screen!',
    content: {
      content: 'This is a digital DM screen for D&D 5e. It is designed to be used while DM-ing games online.',
    },
    column: 'droppable-1',
    type: CardType.Note,
  },
];
