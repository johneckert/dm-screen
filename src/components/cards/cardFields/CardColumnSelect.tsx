import React, { Dispatch, SetStateAction } from 'react';
import { MenuItem, Select, InputLabel } from '@mui/material';

const CardColumnSelect: React.FC<{ cardColumn: string; setCardColumn: Dispatch<SetStateAction<string>> }> = ({
  cardColumn,
  setCardColumn,
}) => {
  const columnDisplayName = (column: string) => {
    switch (column) {
      case 'droppable-1':
        return 'Column 1';
      case 'droppable-2':
        return 'Column 2';
      case 'droppable-3':
        return 'Column 3';
      case 'droppable-4':
        return 'Column 4';
      default:
        return 'Column 1';
    }
  };

  return (
    <>
      <InputLabel id="card-column-select-label">Column</InputLabel>
      <Select
        labelId="card-column-select-label"
        sx={{ marginBottom: 2 }}
        id="card-column-select"
        value={cardColumn}
        data-testid="card-column-select"
        onChange={(e) => setCardColumn(e.target.value)}
      >
        {['droppable-1', 'droppable-2', 'droppable-3', 'droppable-4'].map((value) => (
          <MenuItem key={value} value={value}>
            {columnDisplayName(value)}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default CardColumnSelect;
