import { Cell, CellValue, Grid } from "./types.ts";

// cell values
export const CELL_SIZE = 100;
export const CELL_GAP = 4;
export const DEFAULT_CELL: Cell = { x: 0, y: 0, value: CellValue.Empty };

// grid values
export const DEFAULT_GRID_SIZE = 3;
export const DEFAULT_GRID: Grid = {
  cells: new Map(
    Array.from(
      { length: DEFAULT_GRID_SIZE },
      (_, y) =>
        Array.from(
          { length: DEFAULT_GRID_SIZE },
          (_, x): [string, Cell] => [
            `${x}-${y}`,
            { x, y, value: CellValue.Empty },
          ],
        ),
    ).flat(),
  ),
  minX: 0,
  maxX: DEFAULT_GRID_SIZE,
  minY: 0,
  maxY: DEFAULT_GRID_SIZE,
};
