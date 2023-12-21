import React from 'react';
import { MonsterCardContent } from '../../../interfaces';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SmallCardStatTable from '../cardFields/SmallCardStatTable';

const MonsterCardSmall: React.FC<{ content: MonsterCardContent }> = ({ content }) => {
  const theme = useTheme();
  const {
    size = '',
    type = '',
    challengeRating = '',
    senses = '',
    proficiencies = '',
    languages = '',
    speed = '',
  } = content ?? {};
  const labels = ['Speed: ', 'Languages: ', 'Senses: ', 'Proficiencies: '];
  const values = [speed, languages, senses, proficiencies];
  return (
    <Box data-testid="small-player-card">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottom: `solid 1px ${theme.palette.Monster.dark}`,
          marginBottom: 1,
        }}
      >
        <Typography component="span" sx={{ color: theme.palette.Monster.dark }}>
          {size} {type}
        </Typography>
        <Typography component="span" sx={{ color: theme.palette.Monster.dark }}>
          CR {challengeRating}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <SmallCardStatTable labels={labels} values={values} />
      </Box>
    </Box>
  );
};

export default MonsterCardSmall;
