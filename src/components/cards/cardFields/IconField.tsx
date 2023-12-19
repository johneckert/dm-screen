import React from 'react';
import Box from '@mui/material/Box';
import ShieldTwoToneIcon from '@mui/icons-material/ShieldTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import RectangleTwoToneIcon from '@mui/icons-material/RectangleTwoTone';
import { CardType } from '../../../interfaces';
import { BLUE, PURPLE, TEAL, AMBER, RED, GREY } from '../../../colors';

const IconField: React.FC<{ label: 'HP' | 'AC' | 'Speed'; value: string | undefined; cardType: CardType }> = ({
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
    <Box
      sx={(theme) => {
        return {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: theme.spacing(5),
          width: theme.spacing(16),
          height: theme.spacing(16),
        };
      }}
    >
      <Box component="span" sx={{ fontWeight: 900, zIndex: 2 }}>
        {label}
      </Box>
      <Box component="span" sx={{ zIndex: 2 }}>
        {value}
      </Box>
      {label === 'HP' && <FavoriteTwoToneIcon style={badgeStyles} />}
      {label === 'AC' && <ShieldTwoToneIcon style={badgeStyles} />}
      {label === 'Speed' && <RectangleTwoToneIcon style={badgeStyles} />}
    </Box>
  );
};

export default IconField;
