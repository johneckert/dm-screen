import { CardType } from './interfaces';

export const mockCardData = [
  {
    id: 'X-1',
    title: 'Pikachu',
    content: { content: 'Pickachu is a yellow pokemon' },
    column: `droppable-1`,
    type: CardType.Note,
  },
  {
    id: 'X-2',
    title: 'Charmander',
    content: { content: 'Charmander is a fire pokemon' },
    column: `droppable-2`,
    type: CardType.Note,
  },
  {
    id: 'X-3',
    title: 'Squirtle',
    content: { content: 'Squirtle is a water pokemon' },
    column: `droppable-3`,
    type: CardType.Note,
  },
];

export const mockCardDataMap = {
  'droppable-1': [
    {
      id: 'X-1',
      title: 'Pikachu',
      content: { content: 'Pickachu is a yellow pokemon' },
      column: `droppable-1`,
      type: CardType.Note,
    },
  ],
  'droppable-2': [
    {
      id: 'X-2',
      title: 'Charmander',
      content: { content: 'Charmander is a fire pokemon' },
      column: `droppable-2`,
      type: CardType.Note,
    },
  ],
  'droppable-3': [
    {
      id: 'X-3',
      title: 'Squirtle',
      content: { content: 'Squirtle is a water pokemon' },
      column: `droppable-3`,
      type: CardType.Note,
    },
  ],
  'droppable-4': [],
};
