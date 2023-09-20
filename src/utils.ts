import { ScreenSize } from './interfaces';
import { BREAKPOINTS } from './constants';

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
