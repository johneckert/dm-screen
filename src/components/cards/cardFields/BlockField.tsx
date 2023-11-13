import React from 'react';
import Box from '@mui/material/Box';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { CardType } from '../../../interfaces';
import { BLUE, PURPLE, TEAL, AMBER, RED, WHITE } from '../../../colors';

interface StyleProps {
  type: CardType | undefined;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  blockField: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    fontWeight: 900,
    marginRight: theme.spacing(1),
  },
  value: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    backgroundColor: ({ type }) => {
      switch (type) {
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
          return WHITE;
      }
    },
    width: '100%',
    height: '100%',
    minHeight: theme.spacing(40),
  },
}));

const BlockField: React.FC<{ label: string; value: string | undefined; isVertical?: boolean; cardType?: CardType }> = ({
  label,
  value = '',
  cardType,
}) => {
  const classes = useStyles({ type: cardType });

  return (
    <Box className={classes.blockField}>
      <div className={classes.label}>{label}:</div>
      <div className={classes.value}>
        <ReactMarkdown>{value}</ReactMarkdown>
      </div>
    </Box>
  );
};

export default BlockField;
