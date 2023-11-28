import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import ShieldTwoToneIcon from '@mui/icons-material/ShieldTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import RectangleTwoToneIcon from '@mui/icons-material/RectangleTwoTone';
import { CardType } from '../../../interfaces';
import { BLUE, PURPLE, TEAL, AMBER, RED, GREY } from '../../../colors';

const useStyles = makeStyles<Theme>((theme) => ({
  verticalField: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  horizontalField: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: theme.spacing(1),
  },
  label: {
    fontWeight: 900,
    zIndex: 2,
  },
  value: {
    zIndex: 2,
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
    zIndex: 1,
    color: color(),
  } as React.CSSProperties;

  return (
    <Box className={classes.verticalField}>
      <span className={classes.label}>{label}</span>
      <span className={classes.value}>{value}</span>
      {label === 'HP' && <FavoriteTwoToneIcon style={badgeStyles} />}
      {label === 'AC' && <ShieldTwoToneIcon style={badgeStyles} />}
      {label === 'Speed' && <RectangleTwoToneIcon style={badgeStyles} />}
    </Box>
  );
};

export default IconField;
