import React from 'react';
import { Box, useTheme } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardType } from '../../../interfaces';

const IconField: React.FC<{ label: 'HP' | 'AC' | 'Speed'; value: string | undefined; cardType: CardType }> = ({
  label,
  value,
  cardType,
}) => {
  const theme = useTheme();
  const badgeStyles = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    color: theme.palette[cardType].main,
  } as React.CSSProperties;

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: theme.spacing(5),
        width: theme.spacing(16),
        height: theme.spacing(16),
      }}
    >
      <Box component="span" sx={{ fontWeight: 900, zIndex: 2 }}>
        {label}
      </Box>
      <Box component="span" sx={{ zIndex: 2 }}>
        {value}
      </Box>
      {label === 'HP' && <FavoriteIcon style={badgeStyles} />}
      {label === 'AC' && <ShieldIcon style={badgeStyles} />}
    </Box>
  );
};

export default IconField;
