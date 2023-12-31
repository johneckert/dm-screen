import React, { useCallback, useEffect, useState } from 'react';
import { APIMonsterData } from '../../../interfaces';
import { CUSTOM_MONSTER } from '../../../constants';
import { InputLabel, TextField, CircularProgress, Select, MenuItem } from '@mui/material';
import { MonsterCardContent } from '../../../interfaces';
import { formatMonsterData } from '../../../utils';
import FormDivider from '../cardFields/FormDivider';
import { CardType } from '../../../interfaces';
import ColumnLayout from '../../layout/ColumnLayout';
import RowLayout from '../../layout/RowLayout';

const MonsterCardForm: React.FC<{
  content: MonsterCardContent;
  setContent: React.Dispatch<React.SetStateAction<MonsterCardContent>> | ((content: MonsterCardContent) => void);
}> = ({ content, setContent }) => {
  const [availableMonsters, setAvailableMonsters] = useState<APIMonsterData[]>([CUSTOM_MONSTER]);
  const [selectedMonster, setSelectedMonster] = useState<APIMonsterData>(CUSTOM_MONSTER);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setSelectedMonsterFromList = (monsterName: string) => {
    const selected = availableMonsters.filter((monster) => monster.name === monsterName) ?? [CUSTOM_MONSTER];
    setSelectedMonster(selected[0]);
  };
  const fetchMonsters = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch('https://api.open5e.com/monsters/?limit=1000');
    try {
      const data = await response.json();
      const alphabetized = data.results.sort((a: APIMonsterData, b: APIMonsterData) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      const monsters = [CUSTOM_MONSTER, ...alphabetized];
      setAvailableMonsters(monsters);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }, []);

  const statFieldStyles = { paddingBottom: 2, maxWidth: 70 };

  useEffect(() => {
    fetchMonsters();
  }, [fetchMonsters]);

  useEffect(() => {
    if (selectedMonster.name !== 'custom') {
      const formatted = formatMonsterData(selectedMonster);
      setContent({ ...formatted, notes: content.notes });
    }
  }, [selectedMonster]);

  return (
    <div data-testid="monster-form">
      <ColumnLayout sxOverrides={{ p: 0 }}>
        <InputLabel id="monster-preset-label">Monster Preset</InputLabel>
        <RowLayout sxOverrides={{ padding: 0 }}>
          <Select
            labelId="monster-preset-label"
            id="monster-preset"
            fullWidth
            value={selectedMonster.name}
            onChange={(e) => setSelectedMonsterFromList(e.target.value)}
          >
            {availableMonsters.map((monster) => (
              <MenuItem key={monster.name} value={monster.name}>
                {monster.name}
              </MenuItem>
            ))}
          </Select>
          {isLoading ? <CircularProgress sx={{ alignSelf: 'center', ml: 2 }} /> : null}
        </RowLayout>
      </ColumnLayout>
      {selectedMonster.name === 'custom' ? (
        <ColumnLayout sxOverrides={{ p: 0 }}>
          <FormDivider type={CardType.Monster} />
          <TextField
            id="title"
            label="Monster Name"
            sx={{ paddingBottom: 2 }}
            fullWidth
            variant="outlined"
            value={content.title}
            onChange={(e) => setContent({ ...content, title: e.target.value })}
          />
          <RowLayout>
            <TextField
              id="size"
              label="Size"
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={content.size}
              onChange={(e) => setContent({ ...content, size: e.target.value })}
            />
            <TextField
              id="type"
              label="Type"
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={content.type}
              onChange={(e) => setContent({ ...content, type: e.target.value })}
            />
            <TextField
              id="challenge-rating"
              label="Challenge Rating"
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={content.challengeRating}
              onChange={(e) => setContent({ ...content, challengeRating: e.target.value })}
            />
          </RowLayout>
          <FormDivider type={CardType.Monster} />
          <RowLayout>
            <TextField
              id="strength"
              label="STR"
              sx={statFieldStyles}
              variant="outlined"
              value={content.strength}
              onChange={(e) => setContent({ ...content, strength: e.target.value })}
            />
            <TextField
              id="dexterity"
              label="DEX"
              sx={statFieldStyles}
              variant="outlined"
              value={content.dexterity}
              onChange={(e) => setContent({ ...content, dexterity: e.target.value })}
            />
            <TextField
              id="constitution"
              label="CON"
              sx={statFieldStyles}
              variant="outlined"
              value={content.constitution}
              onChange={(e) => setContent({ ...content, constitution: e.target.value })}
            />
            <TextField
              id="intelligence"
              label="INT"
              sx={statFieldStyles}
              variant="outlined"
              value={content.intelligence}
              onChange={(e) => setContent({ ...content, intelligence: e.target.value })}
            />
            <TextField
              id="wisdom"
              label="WIS"
              sx={statFieldStyles}
              variant="outlined"
              value={content.wisdom}
              onChange={(e) => setContent({ ...content, wisdom: e.target.value })}
            />
            <TextField
              id="charisma"
              label="CHA"
              sx={statFieldStyles}
              variant="outlined"
              value={content.charisma}
              onChange={(e) => setContent({ ...content, charisma: e.target.value })}
            />
          </RowLayout>
          <FormDivider type={CardType.Monster} />
          <RowLayout>
            <TextField
              id="hp"
              label="HP"
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={content.hp}
              onChange={(e) => setContent({ ...content, hp: e.target.value })}
            />
            <TextField
              id="ac"
              label="AC"
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={content.ac}
              onChange={(e) => setContent({ ...content, ac: e.target.value })}
            />
          </RowLayout>
          <FormDivider type={CardType.Monster} />
          <RowLayout>
            <ColumnLayout sxOverrides={{ width: '45%' }}>
              <TextField
                id="vulnerabilities"
                label="Vulnerabilties"
                sx={{ paddingBottom: 2 }}
                variant="outlined"
                value={content.vulnerabilities}
                onChange={(e) => setContent({ ...content, vulnerabilities: e.target.value })}
              />
              <TextField
                id="resistances"
                label="Resistances"
                sx={{ paddingBottom: 2 }}
                variant="outlined"
                value={content.resistances}
                onChange={(e) => setContent({ ...content, resistances: e.target.value })}
              />
              <TextField
                id="damage-immunities"
                label="Damage Immunities"
                sx={{ paddingBottom: 2 }}
                variant="outlined"
                value={content.damageImmunities}
                onChange={(e) => setContent({ ...content, damageImmunities: e.target.value })}
              />
              <TextField
                id="condition-immmunities"
                label="Condition Immunities"
                sx={{ paddingBottom: 2 }}
                variant="outlined"
                value={content.conditionImmunities}
                onChange={(e) => setContent({ ...content, conditionImmunities: e.target.value })}
              />
            </ColumnLayout>
            <ColumnLayout sxOverrides={{ width: '45%' }}>
              <TextField
                id="proficincies"
                label="Proficincies"
                sx={{ paddingBottom: 2 }}
                variant="outlined"
                value={content.proficiencies}
                onChange={(e) => setContent({ ...content, proficiencies: e.target.value })}
              />
              <TextField
                id="senses"
                label="Senses"
                sx={{ paddingBottom: 2 }}
                variant="outlined"
                value={content.senses}
                onChange={(e) => setContent({ ...content, senses: e.target.value })}
              />
              <TextField
                id="languages"
                label="Languages"
                fullWidth
                sx={{ paddingBottom: 2 }}
                variant="outlined"
                value={content.languages}
                onChange={(e) => setContent({ ...content, languages: e.target.value })}
              />
              <TextField
                id="speed"
                label="Speed"
                sx={{ paddingBottom: 2 }}
                variant="outlined"
                value={content.speed}
                onChange={(e) => setContent({ ...content, speed: e.target.value })}
              />
            </ColumnLayout>
          </RowLayout>
          <FormDivider type={CardType.Monster} />
          <ColumnLayout>
            <TextField
              id="special-abilities"
              label="Special Abilties"
              fullWidth
              variant="outlined"
              sx={{ paddingBottom: 2 }}
              multiline
              rows={18}
              value={content.specialAbilities}
              onChange={(e) => setContent({ ...content, specialAbilities: e.target.value })}
            />
            <TextField
              id="actions"
              label="Actions"
              fullWidth
              variant="outlined"
              sx={{ paddingBottom: 2 }}
              multiline
              rows={18}
              value={content.actions}
              onChange={(e) => setContent({ ...content, actions: e.target.value })}
            />
            <TextField
              id="legendary-actions"
              label="Legendary Actions"
              fullWidth
              variant="outlined"
              sx={{ paddingBottom: 2 }}
              multiline
              rows={18}
              value={content.legendaryActions}
              onChange={(e) => setContent({ ...content, legendaryActions: e.target.value })}
            />
            <TextField
              id="description"
              label="Decription"
              fullWidth
              variant="outlined"
              sx={{ paddingBottom: 2 }}
              multiline
              rows={18}
              value={content.description}
              onChange={(e) => setContent({ ...content, description: e.target.value })}
            />
            <TextField
              id="notes"
              label="Notes"
              fullWidth
              variant="outlined"
              sx={{ paddingBottom: 2 }}
              multiline
              rows={18}
              value={content.notes}
              onChange={(e) => setContent({ ...content, notes: e.target.value })}
            />
            <TextField
              id="image-url"
              label="Image URL"
              fullWidth
              variant="outlined"
              sx={{ paddingBottom: 2, display: 'none' }}
              value={content.image}
              onChange={(e) => setContent({ ...content, image: e.target.value })}
            />
          </ColumnLayout>
        </ColumnLayout>
      ) : null}
    </div>
  );
};

export default MonsterCardForm;
