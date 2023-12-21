import React from 'react';
import { PlayerCardContent } from '../../../interfaces';
import { Box, Typography, useTheme } from '@mui/material';
import SmallCardStatTable from '../cardFields/SmallCardStatTable';

const PlayerCardSmall: React.FC<{ content: PlayerCardContent }> = ({ content }) => {
  const theme = useTheme();
  const {
    charClass = '',
    charRace = '',
    charBackground = '',
    charLevel = '',
    ac = '',
    passivePerception = '',
    passiveStealth = '',
    spellSaveDC = '',
    spellAttackBonus = '',
    languages = '',
  } = content ?? {};

  const labels = [
    'AC: ',
    'Passive Perception: ',
    'Passive Stealth: ',
    'Languages: ',
    'Spell Save DC: ',
    'Spell Attack Bonus: ',
  ];
  const values = [ac, passivePerception, passiveStealth, languages, spellSaveDC, spellAttackBonus];
  return (
    <Box data-testid="small-player-card">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottom: `solid 1px ${theme.palette.Player.dark}`,
          mb: 1,
        }}
      >
        <Typography component="span" sx={{ color: theme.palette.Player.dark }}>
          Level {charLevel} {charRace} {charClass}
        </Typography>
        <Typography component="span" sx={{ color: theme.palette.Player.dark }}>
          {charBackground}
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

export default PlayerCardSmall;
