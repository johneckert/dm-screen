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
    colDef = `[col-1 start] 16.667% [col-1 end col-2 start] 16.667% [col-2 end col-3 start] 16.667% [col-3 end col-4 start] 16.667% [col-4 end col-5 start] 16.667% [col-5 end col-6 start] 16.667% [col-6 end]`;
  } else if (screenSize.width > BREAKPOINTS.lg) {
    colDef = `[col-1 start] 25% [col-1 end col-2 start] 25% [col-2 end col-3 start] 25% [col-3 end col-4 start] 25% [col-4 end]`;
  } else if (screenSize.width > BREAKPOINTS.md) {
    colDef = `[col-1 start] 50% [col-1 end col-2 start] 50% [col-2 end]`;
  } else {
    colDef = `[col-1 start] 100% [col-1 end]`;
  }
  return {
    rowsDef: `[row-1 start] 25% [row-1 end row-2 start] 25% [row-2 end row-3 start] 25% [row-3 end row-4 start] 25% [row-4 end]`,
    colsDef: colDef,
  };
};

export const snapToGrid = (x: number, y: number, grid: Grid): [number, number] => {
  console.log('snapToGrid', x, y, grid);
  const snappedX = Math.round(x / grid.columns) * grid.columns;
  const snappedY = Math.round(y / grid.rows) * grid.rows;
  return [snappedX, snappedY];
};
