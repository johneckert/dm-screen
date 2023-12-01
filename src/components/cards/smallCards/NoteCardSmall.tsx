import React from 'react';
import { NoteCardContent } from '../../../interfaces';
import { Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const NoteCardSmall: React.FC<{ content: NoteCardContent }> = ({ content }) => {
  const { notes = '' } = content ?? '';
  return (
    <Box sx={{ px: 1, height: '100%', overflow: 'hidden' }} data-testid="small-note-card">
      <Box sx={{ fontSize: 14, maxHeight: '100%', overflow: 'hidden' }}>
        <ReactMarkdown>{notes.length > 300 ? `${notes.substring(0, 300)}...` : notes}</ReactMarkdown>
      </Box>
    </Box>
  );
};

export default NoteCardSmall;
