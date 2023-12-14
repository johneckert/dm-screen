import React from 'react';
import Box from '@mui/material/Box';
import ReactMarkdown from 'react-markdown';
import { Theme } from '@mui/material/styles';
import { CardType } from '../../../interfaces';
import { PURPLE, WHITE } from '../../../colors';

interface StyleProps {
  type: CardType | undefined;
}

const BlockField: React.FC<{ label: string; value: string | undefined; isVertical?: boolean; cardType?: CardType }> = ({
  label,
  value = '',
  cardType,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={(theme: Theme) => {
          return {
            alignSelf: 'flex-start',
            fontWeight: 900,
            marginRight: theme.spacing(1),
          };
        }}
      >
        {label}:
      </Box>
      <Box
        sx={(theme: Theme) => {
          return {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            backgroundColor: cardType === CardType.Map ? PURPLE[200] : WHITE,
            width: '100%',
            height: '100%',
            minHeight: cardType === CardType.Map ? theme.spacing(40) : theme.spacing(0),
          };
        }}
      >
        <ReactMarkdown>{value}</ReactMarkdown>
      </Box>
    </Box>
  );
};

export default BlockField;
