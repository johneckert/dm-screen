import React from 'react';
import { MapCardContent } from '../../../interfaces';
import ReactMarkdown from 'react-markdown';
import { Box } from '@mui/material';
import { PURPLE } from '../../../colors';

const MapCardSmall: React.FC<{ content: MapCardContent }> = ({ content }) => {
  const { readOutLoudText = '' } = content ?? '';
  return (
    <Box
      sx={{ bgcolor: PURPLE[200], py: 2, px: 1, borderRadius: 2, height: '100%', overflow: 'hidden' }}
      data-testid="small-room-card"
    >
      <ReactMarkdown>
        {readOutLoudText.length > 200 ? `${readOutLoudText.substring(0, 200)}...` : readOutLoudText}
      </ReactMarkdown>
    </Box>
  );
};

export default MapCardSmall;
