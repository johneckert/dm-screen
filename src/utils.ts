import { Grid, GridTemplate, ScreenSize } from './interfaces';
import { BREAKPOINTS, HEADER_HEIGHT, NUMBER_OF_ROWS, NUMBER_OF_COLUMNS } from './constants';

export const getScreenSize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

export const getGrid = (screenSize: ScreenSize): Grid => {
  const numberOfRows = NUMBER_OF_ROWS;
  const rowSize = Math.floor((screenSize.height - HEADER_HEIGHT) / numberOfRows);
  const columnSize = (columns: number) => {
    return Math.floor(screenSize.width / columns);
  };

  if (screenSize.width > BREAKPOINTS.xl) {
    return { columns: columnSize(NUMBER_OF_COLUMNS.xl), rows: rowSize };
  } else if (screenSize.width > BREAKPOINTS.lg) {
    return { columns: columnSize(NUMBER_OF_COLUMNS.lg), rows: rowSize };
  } else if (screenSize.width > BREAKPOINTS.md) {
    return { columns: columnSize(NUMBER_OF_COLUMNS.md), rows: rowSize };
  } else {
    return { columns: columnSize(NUMBER_OF_COLUMNS.sm), rows: rowSize };
  }
};

export const getGridTemplate = (screenSize: ScreenSize): GridTemplate => {
  let colDef;
  if (screenSize.width > BREAKPOINTS.xl) {
    colDef = `repeat(${NUMBER_OF_COLUMNS.xl}, 1fr)`;
  } else if (screenSize.width > BREAKPOINTS.lg) {
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

export const snapToGrid = (x: number, y: number, grid: Grid): [number, number] => {
  const snappedX = Math.round(x / grid.columns) * grid.columns;
  const snappedY = Math.round(y / grid.rows) * grid.rows;
  return [snappedX, snappedY];
};
