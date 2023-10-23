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
  modalContent: {
    margin: theme.spacing(4),
    paddingX: theme.spacing(2),
    paddingTop: theme.spacing(3),
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
  const [hp, setHp] = useState(cardContent.hp);
  const [ac, setAc] = useState(cardContent.ac);
  const [passivePerception, setPassivePerception] = useState(cardContent.passivePerception);
  const [passiveInvestigation, setPassiveInvestigation] = useState(cardContent.passiveInvestigation);
  const [passiveStealth, setPassiveStealth] = useState(cardContent.passiveStealth);
  const [passiveInsight, setPassiveInsight] = useState(cardContent.passiveInsight);
  const [speed, setSpeed] = useState(cardContent.speed);
  const [spellSaveDC, setSpellSaveDC] = useState(cardContent.spellSaveDC);
  const [spellAttackBonus, setSpellAttackBonus] = useState(cardContent.spellAttackBonus);
  const [link, setLink] = useState(cardContent.link);
  const [languages, setLanguages] = useState(cardContent.languages);
  const [cardTab, setCardTab] = useState(expandedCardData.tab);
  const classes = useStyles({ isEditing });
  const handleEdit = () => {
    if (isEditing) {
      updateCard({
        ...expandedCardData,
        title: title,
        content: {
          hp: hp,
          ac: ac,
          passivePerception: passivePerception,
          passiveStealth: passiveStealth,
          passiveInsight: passiveInsight,
          speed: speed,
          spellSaveDC: spellSaveDC,
          spellAttackBonus: spellAttackBonus,
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
            id="note-card-title"
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
            <TextField
              id="player-card-name"
              label="Name"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              fullWidth
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              data-testid="name-input"
            />
            <TextField
              id="player-card-hp"
              label="HP"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              data-testid="hp-input"
            />
            <TextField
              id="player-card-ac"
              label="AC"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={ac}
              onChange={(e) => setAc(e.target.value)}
              data-testid="ac-input"
            />
            <TextField
              id="player-card-speed"
              label="Speed"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              data-testid="speed-input"
            />
            <TextField
              id="player-card-passive-perception"
              label="Passive Perception"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={passivePerception}
              onChange={(e) => setPassivePerception(e.target.value)}
              data-testid="passive-perception-input"
            />
            <TextField
              id="player-card-passive-investigation"
              label="Passive Investigation"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={passiveInvestigation}
              onChange={(e) => setPassiveInvestigation(e.target.value)}
              data-testid="passive-investigation-input"
            />
            <TextField
              id="player-card-passive-stealth"
              label="Passive Stealth"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={passiveStealth}
              onChange={(e) => setPassiveStealth(e.target.value)}
              data-testid="passive-stealth-input"
            />
            <TextField
              id="player-card-passive-insight"
              label="Passive Insight"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={passiveInsight}
              onChange={(e) => setPassiveInsight(e.target.value)}
              data-testid="passive-insight-input"
            />
            <TextField
              id="player-card-spell-save-dc"
              label="Spell Save DC"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={spellSaveDC}
              onChange={(e) => setSpellSaveDC(e.target.value)}
              data-testid="spell-save-dc-input"
            />
            <TextField
              id="player-card-spell-attack"
              label="Spell Attack"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={spellAttackBonus}
              onChange={(e) => setSpellAttackBonus(e.target.value)}
              data-testid="spell-attack-input"
            />
            <TextField
              id="player-card-languages"
              label="Languages"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              fullWidth
              variant="outlined"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              data-testid="languages-input"
            />
            <TextField
              id="player-card-character-sheet"
              label="Character Sheet"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              fullWidth
              variant="outlined"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              data-testid="character-sheet-input"
            />
            <TextField
              id="player-card-content"
              label="Notes"
              fullWidth
              variant="outlined"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              multiline
              rows={18}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              data-testid="content-input"
            />
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.header}>
            <Typography
              id="note-card-title"
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
            <Box id="player-card-hp" className={classes.modalContent} data-testid="hp-view">
              HP: {hp}
            </Box>
            <Box id="player-card-ac" className={classes.modalContent} data-testid="ac-view">
              AC: {ac}
            </Box>
            <Box
              id="player-card-passive-perception"
              className={classes.modalContent}
              data-testid="passive-perception-view"
            >
              Passive Perception: {passivePerception}
            </Box>
            <Box id="player-card-passive-stealth" className={classes.modalContent} data-testid="passive-stealth-view">
              Passive Stealth: {passiveStealth}
            </Box>
            <Box id="player-card-passive-insight" className={classes.modalContent} data-testid="passive-insight-view">
              Passive Insight: {passiveInsight}
            </Box>
            <Box id="player-card-speed" className={classes.modalContent} data-testid="speed-view">
              Speed: {speed}
            </Box>
            <Box id="player-card-spell-save-dc" className={classes.modalContent} data-testid="spell-save-dc-view">
              Spell Save DC: {spellSaveDC}
            </Box>
            <Box
              id="player-card-spell-attack-bonus"
              className={classes.modalContent}
              data-testid="spell-attack-bonus-view"
            >
              Spell Attack Bonus: {spellAttackBonus}
            </Box>
            <Box id="player-card-character-sheet" className={classes.modalContent} data-testid="character-sheet-view">
              Character Sheet{' '}
              <a href={link} target="_blank">
                {link}
              </a>
            </Box>
            <Box id="player-card-notes" className={classes.modalContent} data-testid="notes-view">
              <ReactMarkdown>{notes}</ReactMarkdown>
            </Box>
          </Box>
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedPlayerCard;
