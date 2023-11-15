import React from 'react';
import { CardType, PlayerCardContent } from '../../../interfaces';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { RED } from '../../../colors';
import IconField from '../cardFields/IconField';
import SmallCardStatTable from '../cardFields/SmallCardStatTable';

const PlayerCardSmall: React.FC<{ content: PlayerCardContent }> = ({ content }) => {
  const {
    charClass = '',
    charRace = '',
    charBackground = '',
    charLevel = '',
    hp = '',
    ac = '',
    passivePerception = '',
    passiveStealth = '',
    spellSaveDC = '',
    spellAttackBonus = '',
    languages = '',
  } = content ?? {};

  const labels = [
    'Passive Perception: ',
    'Passive Stealth: ',
    'Languages: ',
    'Spell Save DC: ',
    'Spell Attack Bonus: ',
  ];
  const values = [passivePerception, passiveStealth, languages, spellSaveDC, spellAttackBonus];
  return (
    <Box data-testid="small-player-card">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottom: `solid 1px ${RED[500]}`,
          marginBottom: 1,
        }}
      >
        <Typography component="span" sx={{ color: RED[600] }}>
          Level {charLevel} {charRace} {charClass}
        </Typography>
        <Typography component="span" sx={{ color: RED[600] }}>
          Background: {charBackground}
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
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <IconField label="HP" value={hp} cardType={CardType.Player} />
          <IconField label="AC" value={ac} cardType={CardType.Player} />
        </Box>
      </Box>
    </Box>
  );
};

export default PlayerCardSmall;
