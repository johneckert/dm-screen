import React from 'react';
import { NoteCardContent } from '../../../interfaces';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const NoteCardSmall: React.FC<{ content: NoteCardContent }> = ({ content }) => {
  const { notes = '' } = content ?? '';
  return (
    <Box sx={{ py: 2, px: 1 }} data-testid="small-note-card">
      <Typography>{notes.length > 300 ? `${notes.substring(0, 300)}...` : notes}</Typography>
    </Box>
  );
};

export default NoteCardSmall;
