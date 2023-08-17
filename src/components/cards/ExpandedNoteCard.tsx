import React from 'react';
import { Typography } from '@mui/material';

const ExpandedNoteCard: React.FC<{ title: string; content: string }> = ({ content, title }) => {
  return (
    <>
      <Typography variant="h6" component="h2">
        {title}
      </Typography>
      <Typography sx={{ mt: 2 }}>{content}</Typography>
    </>
  );
};

export default ExpandedNoteCard;
