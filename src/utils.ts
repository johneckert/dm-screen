import { Grid } from './interfaces';
import { BREAKPOINTS } from './constants';

export const getScreenSize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

export const getGrid = (screenSize: { width: number; height: number }): Grid => {
  const columns = (columns: number) => {
    return Math.floor(screenSize.width / columns);
  };

  if (screenSize.width > BREAKPOINTS.xl) {
    return { columns: columns(6), rows: (screenSize.height - 64) / 184 };
  } else if (screenSize.width > BREAKPOINTS.lg) {
    return { columns: columns(4), rows: (screenSize.height - 64) / 184 };
  } else if (screenSize.width > BREAKPOINTS.md) {
    return { columns: columns(2), rows: (screenSize.height - 64) / 184 };
  } else {
    return { columns: columns(1), rows: (screenSize.height - 64) / 184 };
  }
};

export const snapToGrid = (x: number, y: number, grid: Grid): [number, number] => {
  const snappedX = Math.round(x / grid.columns) * grid.columns;
  const snappedY = Math.round(y / grid.rows) * grid.rows;
  return [snappedX, snappedY];
};
