import { CardDataMap } from './interfaces.ts';

export const BREAKPOINTS = {
  sm: 600,
  md: 800,
  lg: 1280,
  xl: 1920,
};

export const CUSTOM_MONSTER = {
  title: 'custom',
  name: 'custom',
  size: '',
  type: '',
  alignment: '',
  hitDice: '',
  hp: '',
  ac: '',
  strength: '10',
  dexterity: '10',
  constitution: '10',
  intelligence: '10',
  wisdom: '10',
  charisma: '10',
  speed: '',
  skills: '',
  vulnerabilities: '',
  resistances: '',
  damageImmunities: '',
  conditionImmunities: '',
  senses: '',
  challengeRating: '',
  specialAbilities: '',
  actions: '',
  legendaryActions: '',
  image: '',
  languages: '',
  description: '',
  notes: '',
};

export const HEADER_HEIGHT = 64;

export const NUMBER_OF_ROWS = 4;

export const NUMBER_OF_COLUMNS = {
  xl: 6,
  lg: 4,
  md: 2,
  sm: 1,
};

export const DIALOG_MESSAGES = {
  upload: 'This will replace all of your card data. Are you sure you want to continue?',
  reset: 'This will delete all of your card data. Are you sure you want to continue?',
  fileType: 'Please upload a JSON file.',
};

export const DEFAULT_TAB = 'welcome-info';

export const EMPTY_CARD_MAP = {
  'droppable-1': [],
  'droppable-2': [],
  'droppable-3': [],
  'droppable-4': [],
} as CardDataMap;
