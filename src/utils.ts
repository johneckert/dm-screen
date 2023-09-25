import { ScreenSize, CardType } from './interfaces';
import { BREAKPOINTS } from './constants';
import { PURPLE, TEAL } from './colors';

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
    default:
      return;
  }
};
