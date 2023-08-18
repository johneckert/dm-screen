import { CardType, CardData } from './interfaces';

export const mockCardData = [
  {
    id: 'X-1',
    title: 'Pikachu',
    content: 'Pickachu is a yellow pokemon',
    column: `droppable-1`,
    type: CardType.Note,
  },
  {
    id: 'X-2',
    title: 'Charmander',
    content: 'Charmander is a fire pokemon',
    column: `droppable-2`,
    type: CardType.Note,
  },
  {
    id: 'X-3',
    title: 'Squirtle',
    content: 'Squirtle is a water pokemon',
    column: `droppable-3`,
    type: CardType.Note,
  },
];
