import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import ShieldIcon from '@mui/icons-material/Shield';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircleIcon from '@mui/icons-material/Circle';
import { CardType } from '../../../interfaces';
import { BLUE, PURPLE, TEAL, AMBER, RED, GREY } from '../../../colors';

const useStyles = makeStyles<Theme>((theme) => ({
  verticalField: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  horizontalField: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: theme.spacing(1),
  },
  label: {
    fontWeight: 900,
  },
}));

const IconField: React.FC<{ label: 'HP' | 'AC' | 'Speed'; value: string | undefined; cardType: CardType }> = ({
  label,
  value,
  cardType,
}) => {
  const classes = useStyles({ isEditing: false });
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

  const badgeStyles = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    color: color(),
  } as React.CSSProperties;

  return (
    <Box className={classes.verticalField}>
      <span className={classes.label}>{label}</span>
      <span className={classes.value}>{value}</span>
      {label === 'HP' && <FavoriteIcon style={badgeStyles} />}
      {label === 'AC' && <ShieldIcon style={badgeStyles} />}
      {label === 'Speed' && <CircleIcon style={{ ...badgeStyles }} />}
    </Box>
  );
};

export default IconField;
