import React, { useState } from 'react';
import { CardData, CardType, PlayerCardContent } from '../../interfaces';
import ExpandedCardLayout from './ExpandedCardLayout';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DEFAULT_TAB } from '../../constants';
import { useReadLocalStorage } from 'usehooks-ts';
import PlayerCardForm from './newCardForms/PlayerCardForm';
import DisplayField from './cardFields/DisplayField';
import IconField from './cardFields/IconField';
import BlockField from './cardFields/BlockField';
import StatField from './cardFields/StatField';
import CardHeader from './cardFields/CardHeader';

const useStyles = makeStyles<Theme>((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  editView: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
  },
  modalTitle: {
    margin: theme.spacing(4),
    paddingX: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
  },
  titleInput: {
    '& input': {
      fontSize: theme.spacing(6),
      fontWeight: 400,
    },
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  editButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: theme.spacing(1),
    marginLeft: 'auto',
  },
}));

interface ExpandedPlayerCardProps {
  closeExpandedCard: () => void;
  expandedCardData: CardData;
  updateCard: (cardData: CardData) => void;
  deleteCard: (cardData: CardData) => void;
}

const ExpandedPlayerCard: React.FC<ExpandedPlayerCardProps> = ({
  closeExpandedCard,
  expandedCardData,
  updateCard,
  deleteCard,
}) => {
  const cardContent = expandedCardData.content as PlayerCardContent;
  const tabs = useReadLocalStorage<string[]>('tabs') ?? [DEFAULT_TAB];
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(cardContent.title);
  const [notes, setNotes] = useState(cardContent.notes);
  const [charClass, setCharClass] = useState(cardContent.charClass);
  const [charLevel, setCharLevel] = useState(cardContent.charLevel);
  const [charRace, setCharRace] = useState(cardContent.charRace);
  const [charBackground, setCharBackground] = useState(cardContent.charBackground);
  const [size, setSize] = useState(cardContent.size);
  const [alignment, setAlignment] = useState(cardContent.alignment);
  const [hp, setHp] = useState(cardContent.hp);
  const [ac, setAc] = useState(cardContent.ac);
  const [strength, setStrength] = useState(cardContent.strength);
  const [dexterity, setDexterity] = useState(cardContent.dexterity);
  const [constitution, setConstitution] = useState(cardContent.constitution);
  const [intelligence, setIntelligence] = useState(cardContent.intelligence);
  const [wisdom, setwisdom] = useState(cardContent.wisdom);
  const [charisma, setCharisma] = useState(cardContent.charisma);
  const [passivePerception, setPassivePerception] = useState(cardContent.passivePerception);
  const [passiveInvestigation, setPassiveInvestigation] = useState(cardContent.passiveInvestigation);
  const [passiveStealth, setPassiveStealth] = useState(cardContent.passiveStealth);
  const [passiveInsight, setPassiveInsight] = useState(cardContent.passiveInsight);
  const [speed, setSpeed] = useState(cardContent.speed);
  const [spellCastingAbility, setSpellCastingAbility] = useState(cardContent.spellCastingAbility);
  const [spellCastingModifier, setSpellCastingModifier] = useState(cardContent.spellCastingModifier);
  const [spellSaveDC, setSpellSaveDC] = useState(cardContent.spellSaveDC);
  const [spellAttackBonus, setSpellAttackBonus] = useState(cardContent.spellAttackBonus);
  const [link, setLink] = useState(cardContent.link);
  const [languages, setLanguages] = useState(cardContent.languages);
  const [cardTab, setCardTab] = useState(expandedCardData.tab);
  const classes = useStyles();
  const formContent = {
    title,
    hp,
    ac,
    size,
    alignment,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    charClass,
    charLevel,
    charRace,
    charBackground,
    passivePerception,
    passiveStealth,
    passiveInvestigation,
    passiveInsight,
    speed,
    spellCastingAbility,
    spellCastingModifier,
    spellSaveDC,
    spellAttackBonus,
    languages,
    link,
    notes,
  };
  const handleContentUpdate = (content: PlayerCardContent) => {
    setTitle(content.title);
    setNotes(content.notes);
    setCharClass(content.charClass);
    setCharLevel(content.charLevel);
    setCharRace(content.charRace);
    setCharBackground(content.charBackground);
    setSize(content.size);
    setAlignment(content.alignment);
    setHp(content.hp);
    setAc(content.ac);
    setStrength(content.strength);
    setDexterity(content.dexterity);
    setConstitution(content.constitution);
    setIntelligence(content.intelligence);
    setwisdom(content.wisdom);
    setCharisma(content.charisma);
    setPassivePerception(content.passivePerception);
    setPassiveInvestigation(content.passiveInvestigation);
    setPassiveStealth(content.passiveStealth);
    setPassiveInsight(content.passiveInsight);
    setSpeed(content.speed);
    setSpellCastingAbility(content.spellCastingAbility);
    setSpellCastingModifier(content.spellCastingModifier);
    setSpellSaveDC(content.spellSaveDC);
    setSpellAttackBonus(content.spellAttackBonus);
    setLink(content.link);
    setLanguages(content.languages);
  };

  const handleEdit = () => {
    if (isEditing) {
      updateCard({
        ...expandedCardData,
        content: {
          title: title,
          hp: hp,
          ac: ac,
          charClass: charClass,
          charLevel: charLevel,
          charRace: charRace,
          charBackground: charBackground,
          passivePerception: passivePerception,
          passiveStealth: passiveStealth,
          passiveInsight: passiveInsight,
          speed: speed,
          spellCastingAbility: spellCastingAbility,
          spellCastingModifier: spellCastingModifier,
          spellSaveDC: spellSaveDC,
          spellAttackBonus: spellAttackBonus,
          languages: languages,
          link: link,
          notes: notes,
        },
        tab: cardTab,
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <ExpandedCardLayout
      cardData={expandedCardData}
      closeExpandedCard={closeExpandedCard}
      deleteCard={deleteCard}
      isEditing={isEditing}
      saveCard={handleEdit}
    >
      {isEditing ? (
        <>
          <Typography id="player-card-title" sx={{ alignSelf: 'center' }} className={classes.modalTitle} component="h3">
            Editing
          </Typography>
          <Box className={classes.editView}>
            <Select
              labelId="card-tab-select-label"
              sx={{ marginBottom: 2 }}
              id="card-tab-select"
              value={cardTab}
              label="Tab"
              data-testid="card-tab-select"
              onChange={(e) => setCardTab(e.target.value)}
            >
              {tabs.map((value) => (
                <MenuItem key={value} value={value} data-testid="select-option">
                  {value}
                </MenuItem>
              ))}
            </Select>
            <PlayerCardForm content={formContent} setContent={handleContentUpdate} />
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.header}>
            <CardHeader title={title} handleEdit={handleEdit} />
          </Box>
          <Box className={classes.body}>
            <Box sx={{ mb: 3, px: 3 }} className={classes.row}>
              <DisplayField label="Race" value={charRace} />
              <DisplayField label="Class" value={charClass} />
              <DisplayField label="Level" value={charLevel} />
              <DisplayField label="Background" value={charBackground} />
              <DisplayField label="Size" value={size} />
              <DisplayField label="Alignment" value={alignment} />
            </Box>
            <Box sx={{ mb: 3 }} className={classes.row}>
              <StatField label="STR" value={strength} cardType={CardType.Player} />
              <StatField label="DEX" value={dexterity} cardType={CardType.Player} />
              <StatField label="CON" value={constitution} cardType={CardType.Player} />
              <StatField label="INT" value={intelligence} cardType={CardType.Player} />
              <StatField label="WIS" value={wisdom} cardType={CardType.Player} />
              <StatField label="CHA" value={charisma} cardType={CardType.Player} />
            </Box>
            <Box sx={{ mb: 3 }} className={classes.row}>
              <IconField label="HP" value={hp} cardType={CardType.Player} />
              <IconField label="AC" value={ac} cardType={CardType.Player} />
              <IconField label="Speed" value={speed} cardType={CardType.Player} />
            </Box>
            <Box className={classes.row}>
              <Box className={classes.group}>
                <DisplayField label="Passive Perception" value={passivePerception} />
                <DisplayField label="Passive Investigation" value={passiveInvestigation} />
                <DisplayField label="Passive Stealth" value={passiveStealth} />
                <DisplayField label="Passive Insight" value={passiveInsight} />
              </Box>
              <Box className={classes.group}>
                <DisplayField label="Spell Casting Ability" value={spellCastingAbility} />
                <DisplayField label="Spell Casting Modifier" value={spellCastingModifier} />
                <DisplayField label="Spell Save DC" value={spellSaveDC} />
                <DisplayField label="Spell Attack Bonus" value={spellAttackBonus} />
              </Box>
            </Box>
            <Box className={classes.group}>
              <DisplayField label="Languages" value={languages} />
              <DisplayField label="Character Sheet" value={link} />
            </Box>
            <Box className={classes.group}>
              <BlockField label="Notes" value={notes} cardType={CardType.Player} />
            </Box>
          </Box>
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedPlayerCard;
