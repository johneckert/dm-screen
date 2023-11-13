import React, { Dispatch, SetStateAction } from 'react';
import { MenuItem, Select, InputLabel } from '@mui/material';
import { CardType } from '../../../interfaces';

const CardTypeSelect: React.FC<{ cardType: string; setCardType: Dispatch<SetStateAction<CardType>> }> = ({
  cardType,
  setCardType,
}) => {
  return (
    <>
      <InputLabel id="card-type-select-label">Card Type</InputLabel>
      <Select
        labelId="card-type-select-label"
        sx={{ marginBottom: 2 }}
        id="card-type-select"
        value={cardType}
        data-testid="card-type-select"
        onChange={(e) => setCardType(e.target.value as CardType)}
      >
        {Object.values(CardType).map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default CardTypeSelect;
