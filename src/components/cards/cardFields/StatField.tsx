import React from 'react';
import { Box, Typography } from '@mui/material';
import { CardType } from '../../../interfaces';

const StatField: React.FC<{ label: string; value: string | undefined; cardType: CardType }> = ({
  label,
  value,
  cardType,
}) => {
  const modifier = value ? Math.floor((parseInt(value) - 10) / 2) : 0;

  return (
    <Box
      sx={(theme) => {
        return {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: theme.spacing(3),
          width: theme.spacing(12),
          height: theme.spacing(12),
          border: `1px solid ${theme.palette[cardType].main}`,
          borderRadius: theme.spacing(1),
        };
      }}
    >
      <Typography component="span" sx={{ fontWeight: 900 }}>
        {label}
      </Typography>
      <Typography component="span">
        {value} ({modifier >= 0 ? '+' : ''}
        {modifier})
      </Typography>
    </Box>
  );
};

export default StatField;
