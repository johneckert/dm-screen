import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { CardType } from '../../../interfaces';
import { BLACK } from '../../../colors';

const BlockField: React.FC<{ label: string; value: string | undefined; cardType: CardType; bgFill?: boolean }> = ({
  label,
  value = '',
  cardType,
  bgFill,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="cardSectionLabel" sx={{ color: cardType ? theme.palette[cardType].main : BLACK }}>
        {label}:
      </Typography>
      <Box
        sx={{
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1),
          width: '100%',
          height: '100%',
          minHeight: theme.spacing(40),
          border: `1px solid ${theme.palette[cardType].main}`,
          backgroundColor: bgFill ? theme.palette[cardType].light : theme.palette.background.paper,
          borderRadius: theme.spacing(1),
        }}
      >
        <ReactMarkdown>{value}</ReactMarkdown>
      </Box>
    </Box>
  );
};
//sx={{ alignSelf: 'flex-start', fontWeight: 900, marginRight: theme.spacing(1) }}

export default BlockField;
