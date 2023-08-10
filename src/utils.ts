import { GridSize, GridTemplate, ScreenSize } from './interfaces';
import { BREAKPOINTS, HEADER_HEIGHT, NUMBER_OF_ROWS, NUMBER_OF_COLUMNS } from './constants';

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

export const getGridSize = (screenSize: ScreenSize): GridSize => {
  const numberOfRows = NUMBER_OF_ROWS;
  const rowSize = Math.floor((screenSize.height - HEADER_HEIGHT) / numberOfRows);
  const columnSize = (columns: number) => {
    return Math.floor(screenSize.width / columns);
  };

  if (getBreakPoint(screenSize) === 'lg') {
    return { columnSize: columnSize(NUMBER_OF_COLUMNS.lg), rowSize: rowSize };
  } else if (getBreakPoint(screenSize) === 'md') {
    return { columnSize: columnSize(NUMBER_OF_COLUMNS.md), rowSize: rowSize };
  } else {
    return { columnSize: columnSize(NUMBER_OF_COLUMNS.sm), rowSize: rowSize };
  }
};

export const getGridTemplate = (screenSize: ScreenSize): GridTemplate => {
  let colDef;
  if (screenSize.width > BREAKPOINTS.lg) {
    colDef = `repeat(${NUMBER_OF_COLUMNS.lg}, 1fr)`;
  } else if (screenSize.width > BREAKPOINTS.md) {
    colDef = `repeat(${NUMBER_OF_COLUMNS.md}, 1fr)`;
  } else {
    colDef = `repeat(${NUMBER_OF_COLUMNS.sm}, 1fr)`;
  }

  return {
    rowDefinition: `repeat(${NUMBER_OF_ROWS}, 1fr)`,
    columnDefinition: colDef,
  };
};
