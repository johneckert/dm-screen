import React from 'react';
import { CardType, PlayerCardContent } from '../../../interfaces';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { RED } from '../../../colors';
import IconField from '../cardFields/IconField';

const PlayerCardSmall: React.FC<{ content: PlayerCardContent }> = ({ content }) => {
  const {
    charClass,
    charRace,
    charBackground,
    charLevel,
    hp,
    ac,
    passivePerception,
    passiveStealth,
    spellSaveDC,
    spellAttackBonus,
    languages,
  } = content ?? {};
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
        <Box>
          <Typography>Passive Perception: {passivePerception}</Typography>
          <Typography>Passive Stealth: {passiveStealth}</Typography>
          <Typography>Languages: {languages}</Typography>
          <Typography>Spell Save DC: {spellSaveDC}</Typography>
          <Typography>Spell Attack Bonus: {spellAttackBonus}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <IconField label="HP" value={hp} cardType={CardType.Player} />
          <IconField label="AC" value={ac} cardType={CardType.Player} />
        </Box>
      </Box>
    </Box>
  );
};

export default PlayerCardSmall;
