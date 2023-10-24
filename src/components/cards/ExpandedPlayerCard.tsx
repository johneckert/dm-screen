import React, { useState } from 'react';
import { CardData, GenericCardContent } from '../../interfaces';
import ExpandedCardLayout from './ExpandedCardLayout';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Theme } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import ReactMarkdown from 'react-markdown';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DEFAULT_TAB } from '../../constants';
import { useReadLocalStorage } from 'usehooks-ts';
import ShieldIcon from '@mui/icons-material/Shield';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircleIcon from '@mui/icons-material/Circle';
import { PURPLE } from '../../colors';
import PlayerCardForm from './newCardForms/PlayerCardForm';

interface StyleProps {
  isEditing: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
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
  basicInfoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  iconRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  verticalField: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    width: theme.spacing(12),
    height: theme.spacing(12),
    '& svg': {
      zIndex: '-1',
      color: PURPLE[200],
    },
  },
  horizontalField: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: theme.spacing(1),
  },
  notesField: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontWeight: 900,
    marginRight: theme.spacing(1),
  },
  iconFieldLabel: {
    fontWeight: 900,
  },
  notesLabel: {
    alignSelf: 'flex-start',
    fontWeight: 900,
    marginRight: theme.spacing(1),
  },
  notesValue: {
    backgroundColor: PURPLE[200],
    width: '100%',
    height: '100%',
    minHeight: theme.spacing(40),
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
  const cardContent = expandedCardData.content as GenericCardContent;
  const tabs = useReadLocalStorage<string[]>('tabs') ?? [DEFAULT_TAB];
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(expandedCardData.title);
  const [notes, setNotes] = useState(cardContent.content);
  const [charClass, setCharClass] = useState(cardContent.charClass);
  const [charLevel, setCharLevel] = useState(cardContent.charLevel);
  const [charRace, setCharRace] = useState(cardContent.charRace);
  const [charBackground, setCharBackground] = useState(cardContent.charBackground);
  const [hp, setHp] = useState(cardContent.hp);
  const [ac, setAc] = useState(cardContent.ac);
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
  const classes = useStyles({ isEditing });
  const formContent = {
    hp,
    ac,
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
    content: notes,
  };
  const handleContentUpdate = (content: GenericCardContent) => {
    console.log(content);
    setNotes(content.content);
    setCharClass(content.charClass);
    setCharLevel(content.charLevel);
    setCharRace(content.charRace);
    setCharBackground(content.charBackground);
    setHp(content.hp);
    setAc(content.ac);
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
        title: title,
        content: {
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
          content: notes,
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
          <Typography
            id="player-card-title"
            sx={{ alignSelf: 'center' }}
            className={classes.modalTitle}
            variant="h3"
            component="h3"
          >
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
            <PlayerCardForm title={title} setTitle={setTitle} content={formContent} setContent={handleContentUpdate} />
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.header}>
            <Typography
              id="title-name"
              className={classes.modalTitle}
              variant="h3"
              component="h3"
              data-testid="title-view"
            >
              {title}
            </Typography>
            <IconButton
              className={classes.editButton}
              aria-label="edit-save-button"
              data-testid="edit-button"
              onClick={handleEdit}
            >
              <EditIcon />
            </IconButton>
          </Box>
          <Box className={classes.body}>
            <Box className={classes.basicInfoRow}>
              <Box id="passive-perception" className={classes.horizontalFiled} data-testid="passive-perception-view">
                <span className={classes.label}>Race:</span>
                <span className={classes.value}>{charRace}</span>
              </Box>
              <Box id="passive-perception" className={classes.horizontalFiled} data-testid="passive-perception-view">
                <span className={classes.label}>Class:</span>
                <span className={classes.value}>{charClass}</span>
              </Box>
              <Box id="passive-perception" className={classes.horizontalFiled} data-testid="passive-perception-view">
                <span className={classes.label}>Level:</span>
                <span className={classes.value}>{charLevel}</span>
              </Box>
              <Box id="passive-perception" className={classes.horizontalFiled} data-testid="passive-perception-view">
                <span className={classes.label}>Background:</span>
                <span className={classes.value}>{charBackground}</span>
              </Box>
            </Box>
            <Box className={classes.iconRow}>
              <Box id="hp" className={classes.verticalField} data-testid="hp-view">
                <span className={classes.iconFieldLabel}>HP</span>
                <span className={classes.value}>{hp}</span>
                <FavoriteIcon style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }} />
              </Box>
              <Box id="ac" className={classes.verticalField} data-testid="ac-view">
                <span className={classes.iconFieldLabel}>AC</span>
                <span className={classes.value}>{ac}</span>
                <ShieldIcon style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }} />
              </Box>
              <Box id="speed" className={classes.verticalField} data-testid="speed-view">
                <span className={classes.iconFieldLabel}>Speed</span>
                <span className={classes.value}>{speed}</span>
                <CircleIcon style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }} />
              </Box>
            </Box>
            <Box className={classes.row}>
              <Box className={classes.group}>
                <Box id="passive-perception" className={classes.horizontalFiled} data-testid="passive-perception-view">
                  <span className={classes.label}>Passive Perception:</span>
                  <span className={classes.value}>{passivePerception}</span>
                </Box>
                <Box
                  id="passive-investigation"
                  className={classes.horizontalFiled}
                  data-testid="passive-investigation-view"
                >
                  <span className={classes.label}>Passive Investigation:</span>
                  <span className={classes.value}>{passiveInvestigation}</span>
                </Box>
                <Box id="passive-stealth" className={classes.horizontalFiled} data-testid="passive-stealth-view">
                  <span className={classes.label}>Passive Stealth:</span>
                  <span className={classes.value}>{passiveStealth}</span>
                </Box>
                <Box id="passive-insight" className={classes.horizontalFiled} data-testid="passive-insight-view">
                  <span className={classes.label}>Passive Insight:</span>
                  <span className={classes.value}>{passiveInsight}</span>
                </Box>
              </Box>
              <Box className={classes.group}>
                <Box
                  id="spell-casting-ability"
                  className={classes.horizontalFiled}
                  data-testid="spell-casting-ability-view"
                >
                  <span className={classes.label}>Spell Casting Ability:</span>
                  <span className={classes.value}>{spellCastingAbility}</span>
                </Box>
                <Box
                  id="spell-casting-modifier"
                  className={classes.horizontalFiled}
                  data-testid="spell-casting-modifier-view"
                >
                  <span className={classes.label}>Spell Casting Modifier:</span>
                  <span className={classes.value}>{spellCastingModifier}</span>
                </Box>
                <Box id="spell-save-dc" className={classes.horizontalFiled} data-testid="spell-save-dc-view">
                  <span className={classes.label}>Spell Save DC:</span>
                  <span className={classes.value}>{spellSaveDC}</span>
                </Box>
                <Box id="spell-attack-bonus" className={classes.horizontalFiled} data-testid="spell-attack-bonus-view">
                  <span className={classes.label}>Spell Attack Bonus:</span>
                  <span className={classes.value}>{spellAttackBonus}</span>
                </Box>
              </Box>
            </Box>
            <Box className={classes.group}>
              <Box id="languages" className={classes.horizontalFiled} data-testid="passive-stealth-view">
                <span className={classes.label}>Languages:</span>
                <span className={classes.value}>{languages}</span>
              </Box>
              <Box id="character-sheet" className={classes.horizontalFiled} data-testid="character-sheet-view">
                <span className={classes.label}>Character Sheet:</span>
                <a href={link} target="_blank">
                  <span className={classes.value}>{link}</span>
                </a>
              </Box>
            </Box>
            <Box className={classes.group}>
              <Box id="notes" className={classes.notesField} data-testid="notes-view">
                <span className={classes.notesLabel}>Notes:</span>
                <span className={classes.notesValue}>
                  <ReactMarkdown>{notes}</ReactMarkdown>
                </span>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedPlayerCard;
