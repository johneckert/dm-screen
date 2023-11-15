import React from 'react';
import { MapCardContent } from '../../../interfaces';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { PURPLE } from '../../../colors';

const MapCardSmall: React.FC<{ content: MapCardContent }> = ({ content }) => {
  const { readOutLoudText = '' } = content ?? '';
  return (
    <Box sx={{ bgcolor: PURPLE[200], paddingY: 2, paddingX: 1 }} data-testid="small-room-card">
      <Typography>
        {readOutLoudText.length > 300 ? `${readOutLoudText.substring(0, 300)}...` : readOutLoudText}
      </Typography>
    </Box>
  );
};

export default MapCardSmall;
