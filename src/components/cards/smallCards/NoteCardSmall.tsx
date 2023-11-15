import React from 'react';
import { NoteCardContent } from '../../../interfaces';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const MapCardSmall: React.FC<{ content: NoteCardContent }> = ({ content }) => {
  const { notes = '' } = content ?? '';
  return (
    <Box sx={{ paddingY: 2, paddingX: 1 }} data-testid="small-note-card">
      <Typography>{notes.length > 300 ? `${notes.substring(0, 300)}...` : notes}</Typography>
    </Box>
  );
};

export default MapCardSmall;
