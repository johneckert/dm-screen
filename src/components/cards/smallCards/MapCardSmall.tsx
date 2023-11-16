import React from 'react';
import { MapCardContent } from '../../../interfaces';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { PURPLE } from '../../../colors';

const MapCardSmall: React.FC<{ content: MapCardContent }> = ({ content }) => {
  const { readOutLoudText = '' } = content ?? '';
  return (
    <Box sx={{ bgcolor: PURPLE[200], py: 2, px: 1, borderRadius: 2, height: '100%' }} data-testid="small-room-card">
      <Typography sx={{ fontSize: 14 }}>
        {readOutLoudText.length > 200 ? `${readOutLoudText.substring(0, 200)}...` : readOutLoudText}
      </Typography>
    </Box>
  );
};

export default MapCardSmall;
