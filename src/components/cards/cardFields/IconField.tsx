import React from 'react';
import { useTheme, Typography } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ColumnLayout from '../../layout/ColumnLayout';
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
    <ColumnLayout
      sxOverrides={{
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: theme.spacing(16),
        height: theme.spacing(16),
      }}
    >
      <Typography variant="fieldLabel" sx={{ zIndex: 2 }}>
        {label}
      </Typography>
      <Typography variant="fieldValue" sx={{ zIndex: 2 }}>
        {value}
      </Typography>
      {label === 'HP' && <FavoriteIcon style={badgeStyles} />}
      {label === 'AC' && <ShieldIcon style={badgeStyles} />}
    </ColumnLayout>
  );
};

export default IconField;
