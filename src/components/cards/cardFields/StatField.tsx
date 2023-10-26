import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { CardType } from '../../../interfaces';
import { BLUE, PURPLE, TEAL, AMBER, RED, GREY } from '../../../colors';

interface StyleProps {
  color: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  verticalField: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    width: theme.spacing(12),
    height: theme.spacing(12),
    border: ({ color }) => `1px solid ${color}`,
    borderRadius: theme.spacing(1),
  },
  label: {
    fontWeight: 900,
  },
}));

const StatField: React.FC<{ label: string; value: string | undefined; cardType: CardType }> = ({
  label,
  value,
  cardType,
}) => {
  const color = () => {
    switch (cardType) {
      case CardType.Note:
        return TEAL[200];
      case CardType.Map:
        return PURPLE[200];
      case CardType.Rule:
        return AMBER[200];
      case CardType.Player:
        return RED[200];
      case CardType.Monster:
        return BLUE[200];
      default:
        return GREY[200];
    }
  };
  const classes = useStyles({ color: color() });
  const modifier = value ? Math.floor((parseInt(value) - 10) / 2) : 0;

  return (
    <Box className={classes.verticalField}>
      <span className={classes.label}>{label}</span>
      <span>
        {value} ({modifier >= 0 ? '+' : ''}
        {modifier})
      </span>
    </Box>
  );
};

export default StatField;
