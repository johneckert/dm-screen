import React from 'react';
import { NoteCardContent } from '../../../interfaces';
import Box from '@mui/material/Box';
import { SMALL_TABLE_RULES } from '../../../ruleData';
import Typography from '@mui/material/Typography';

const RuleCardSmall: React.FC<{ content: NoteCardContent }> = ({ content }) => {
  const { title } = content ?? {};
  const description = SMALL_TABLE_RULES[title as keyof typeof SMALL_TABLE_RULES];
  return (
    <Box sx={{ py: 2, px: 1 }} data-testid="small-rule-card">
      {description && <Typography>{description}</Typography>}
    </Box>
  );
};

export default RuleCardSmall;
