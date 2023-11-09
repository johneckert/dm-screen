import React, { useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Theme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import TabSelect from './cardFields/TabSelect';
import {
  GenericCardContent,
  MapCardContent,
  NoteCardContent,
  PlayerCardContent,
  MonsterCardContent,
  CardData,
  CardType,
  RuleCardContent,
} from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';
import MapCardform from './newCardForms/MapCardForm';
import NoteCardForm from './newCardForms/NoteCardForm';
import RuleCardForm from './newCardForms/RuleCardForm';
import PlayerCardForm from './newCardForms/PlayerCardForm';
import MonsterCardForm from './newCardForms/MonsterCardForm';
import { DEFAULT_TAB } from '../../constants';
import CardTypeSelect from './cardFields/CardTypeSelect';
import CardColumnSelect from './cardFields/CardColumnSelect';

const useStyles = makeStyles<Theme>((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '80%',
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: theme.spacing(1.5),
    boxShadow: '24px',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    overflowY: 'scroll',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    overflowY: 'scroll',
    fontSize: theme.spacing(6),
    fontWeight: 400,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  modalTitle: {
    margin: theme.spacing(4),
    paddingX: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
  },
  cancelButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: theme.spacing(1),
    marginLeft: 'auto',
  },
  saveButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: theme.spacing(1),
    marginLeft: 'auto',
    '& svg': {
      marginRight: theme.spacing(1),
    },
  },
}));

const NewCardModal: React.FC<{
  isVisible: boolean;
  closeNewCardModal: () => void;
  createCard: (cardData: CardData) => void;
}> = ({ isVisible, createCard, closeNewCardModal }) => {
  const classes = useStyles();
  const id = uuidv4();
  const activeTab = useReadLocalStorage<string>('activeTab') ?? DEFAULT_TAB;
  const [content, setContent] = useState({} as GenericCardContent);
  const [cardType, setCardType] = useState<CardType>(CardType.Note);
  const [cardTab, setCardTab] = useState<string>(activeTab);
  const [cardColumn, setCardColumn] = useState<string>('droppable-1');

  const handleSave = () => {
    createCard({ id, content, type: cardType, column: cardColumn, tab: cardTab });
    setContent({} as GenericCardContent);
  };

  const handleCancel = () => {
    setContent({} as GenericCardContent);
    closeNewCardModal();
  };

  const renderCardForm = () => {
    switch (cardType) {
      case CardType.Map:
        return <MapCardform content={content as MapCardContent} setContent={setContent} data-testid="map-form" />;
      case CardType.Player:
        return (
          <PlayerCardForm content={content as PlayerCardContent} setContent={setContent} data-testid="player-form" />
        );
      case CardType.Monster:
        return (
          <MonsterCardForm content={content as MonsterCardContent} setContent={setContent} data-testid="monster-form" />
        );
      case CardType.Note:
        return <NoteCardForm content={content as NoteCardContent} setContent={setContent} data-testid="note-form" />;
      case CardType.Rule:
        return <RuleCardForm content={content as RuleCardContent} setContent={setContent} data-testid="rule-form" />;
      default:
        return <div>default</div>;
    }
  };

  return (
    <Modal
      open={!!isVisible}
      onClose={handleCancel}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      data-testid="expanded-card"
    >
      <Box className={classes.modal}>
        <Typography
          id="modal-title"
          sx={{ alignSelf: 'center' }}
          className={classes.modalTitle}
          variant="h3"
          component="h3"
        >
          Create Card
        </Typography>
        <Box className={classes.content}>
          <Box className={classes.form}>
            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}>
              <CardTypeSelect cardType={cardType} setCardType={setCardType} />
              <TabSelect cardTab={cardTab} setCardTab={setCardTab} />
              <CardColumnSelect cardColumn={cardColumn} setCardColumn={setCardColumn} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>{renderCardForm()}</Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <Button
              variant="outlined"
              className={classes.cancelButton}
              aria-label="cancel-button"
              data-testid="cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={cardType === CardType.Rule && !content?.title}
              className={classes.saveButton}
              aria-label="save-button"
              data-testid="save-button"
              onClick={handleSave}
            >
              <CheckIcon />
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewCardModal;
