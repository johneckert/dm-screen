import { ScreenSize, CardType } from './interfaces';
import { BREAKPOINTS } from './constants';
import { PURPLE, TEAL, AMBER } from './colors';

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

export const avatarColor = (type: CardType) => {
  switch (type) {
    case CardType.Map:
      return PURPLE[300];
    case CardType.Note:
      return TEAL[300];
    case CardType.Rule:
      return AMBER[400];
    default:
      return;
  }
};

export const splitAndTitleCase = (str: string, splitChar: string = ' ', joinChar: string = ' ') => {
  const ignoreWords = ['of', 'the', 'a', 'an', 'and', 'or', 'but', 'nor', 'for', 'yet', 'so'];
  return str
    .split(splitChar)
    .map((word) => (ignoreWords.includes(word) ? word : word[0].toUpperCase() + word.slice(1)))
    .join(joinChar);
};
