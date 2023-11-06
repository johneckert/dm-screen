import { CardType } from './interfaces';

export const mockCardData = [
  {
    id: 'X-1',
    content: { title: 'Pikachu', content: 'Pickachu is a yellow pokemon' },
    column: `droppable-1`,
    type: CardType.Note,
    tab: 'tab-1',
  },
  {
    id: 'X-2',
    content: { title: 'Charmander', content: 'Charmander is a fire pokemon' },
    column: `droppable-2`,
    type: CardType.Note,
    tab: 'tab-1',
  },
  {
    id: 'X-3',
    content: { title: 'Squirtle', content: 'Squirtle is a water pokemon' },
    column: `droppable-3`,
    type: CardType.Note,
    tab: 'tab-1',
  },
];

export const mockCardDataMap = {
  'droppable-1': [
    {
      id: 'X-1',
      content: { title: 'Pikachu', content: 'Pickachu is a yellow pokemon' },
      column: `droppable-1`,
      type: CardType.Note,
      tab: 'tab-1',
    },
  ],
  'droppable-2': [
    {
      id: 'X-2',
      content: { title: 'Charmander', content: 'Charmander is a fire pokemon' },
      column: `droppable-2`,
      type: CardType.Note,
      tab: 'tab-1',
    },
  ],
  'droppable-3': [
    {
      id: 'X-3',
      content: { title: 'Squirtle', content: 'Squirtle is a water pokemon' },
      column: `droppable-3`,
      type: CardType.Note,
      tab: 'tab-1',
    },
  ],
  'droppable-4': [],
};
