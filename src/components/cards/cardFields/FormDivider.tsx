import React from 'react';
import { Divider, useTheme } from '@mui/material';
import { CardType } from '../../../interfaces';

const FormDivider: React.FC<{ type: CardType }> = ({ type }) => {
  const theme = useTheme();
  const dividerStyle = {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    background: theme.palette[type].dark,
  };
  return <Divider sx={dividerStyle} />;
};

export default FormDivider;
