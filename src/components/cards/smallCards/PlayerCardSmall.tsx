import React from 'react';
import { PlayerCardContent } from '../../../interfaces';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { RED } from '../../../colors';
import SmallCardStatTable from '../cardFields/SmallCardStatTable';

const PlayerCardSmall: React.FC<{ content: PlayerCardContent }> = ({ content }) => {
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
          borderBottom: `solid 1px ${RED[500]}`,
          mb: 1,
        }}
      >
        <Typography component="span" sx={{ color: RED[600] }}>
          Level {charLevel} {charRace} {charClass}
        </Typography>
        <Typography component="span" sx={{ color: RED[600] }}>
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
