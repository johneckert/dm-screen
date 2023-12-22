import React from 'react';
import { Typography, useTheme } from '@mui/material';
import ColumnLayout from '../../layout/ColumnLayout';
import { CardType } from '../../../interfaces';

const StatField: React.FC<{ label: string; value: string | undefined; cardType: CardType }> = ({
  label,
  value,
  cardType,
}) => {
  const theme = useTheme();
  const modifier = value ? Math.floor((parseInt(value) - 10) / 2) : 0;

  return (
    <ColumnLayout
      sxOverrides={{
        alignItems: 'center',
        justifyContent: 'center',
        width: theme.spacing(12),
        height: theme.spacing(12),
        border: `1px solid ${theme.palette[cardType].main}`,
        borderRadius: theme.spacing(1),
      }}
    >
      <Typography variant="fieldLabel">{label}</Typography>
      <Typography variant="fieldValue">
        {value} ({modifier >= 0 ? '+' : ''}
        {modifier})
      </Typography>
    </ColumnLayout>
  );
};

export default StatField;
