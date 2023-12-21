import React from 'react';
import { MapCardContent } from '../../../interfaces';
import ReactMarkdown from 'react-markdown';
import { Box, useTheme } from '@mui/material';

const MapCardSmall: React.FC<{ content: MapCardContent }> = ({ content }) => {
  const theme = useTheme();
  const { readOutLoudText = '' } = content ?? '';
  return (
    <Box
      sx={{ bgcolor: theme.palette.Map.light, pb: 2, px: 1, borderRadius: 2, height: '100%', overflow: 'hidden' }}
      data-testid="small-room-card"
    >
      <ReactMarkdown>
        {readOutLoudText.length > 200 ? `${readOutLoudText.substring(0, 200)}...` : readOutLoudText}
      </ReactMarkdown>
    </Box>
  );
};

export default MapCardSmall;
