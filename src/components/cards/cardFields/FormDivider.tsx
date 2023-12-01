import React from 'react';
import { Divider } from '@mui/material';
import { BLUE, RED, TEAL, AMBER, GREY } from '../../../colors';
import { CardType } from '../../../interfaces';

const FormDivider: React.FC<{ type: CardType }> = ({ type }) => {
  const dividerColor = () => {
    switch (type) {
      case CardType.Monster:
        return BLUE[200];
      case CardType.Player:
        return RED[200];
      case CardType.Note:
        return TEAL[200];
      case CardType.Rule:
        return AMBER[200];
      default:
        return GREY[200];
    }
  };

  const dividerStyle = {
    marginTop: 2,
    marginBottom: 4,
    background: dividerColor(),
  };
  return <Divider sx={dividerStyle} />;
};

export default FormDivider;
