import { ScreenSize, CardData, CardDataMap, CardType } from './interfaces';
import { BREAKPOINTS } from './constants';
import { PURPLE, TEAL, AMBER, RED, BLUE } from './colors';
import { EMPTY_CARD_MAP } from './constants';

export const getScreenSize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

export const getBreakPoint = (screenSize: ScreenSize) => {
  if (screenSize.width > BREAKPOINTS.lg) {
    return 'lg';
  } else if (screenSize.width > BREAKPOINTS.md) {
    return 'md';
  } else {
    return 'sm';
  }
};

export const mapCards = (cards: CardData[]) =>
  cards.reduce((filteredCards: CardDataMap, card) => {
    filteredCards[card.column].push(card);
    return filteredCards;
  }, EMPTY_CARD_MAP);

export const flattenCards = (cardDataMap: CardDataMap) => {
  return Object.values(cardDataMap).flat();
};

export const avatarColor = (type: CardType) => {
  switch (type) {
    case CardType.Map:
      return PURPLE[300];
    case CardType.Note:
      return TEAL[300];
    case CardType.Rule:
      return AMBER[400];
    case CardType.Player:
      return RED[300];
    case CardType.Monster:
      return BLUE[300];
    default:
      return;
  }
};

export const upperFirst = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const splitAndTitleCase = (str: string, splitChar: string = ' ', joinChar: string = ' ') => {
  const ignoreWords = ['of', 'the', 'a', 'an', 'and', 'or', 'but', 'nor', 'for', 'yet', 'so'];
  return str
    .split(splitChar)
    .map((word) => (ignoreWords.includes(word) ? word : word[0].toUpperCase() + word.slice(1)))
    .join(joinChar);
};

export const validateFileType = (file: File) => {
  if (file.type.toLowerCase() !== 'application/json') {
    return false;
  }
  return true;
};
