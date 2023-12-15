import React, { useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import { Modal, Box, Typography, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
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
import MapCardform from '../cards/newCardForms/MapCardForm';
import NoteCardForm from '../cards/newCardForms/NoteCardForm';
import RuleCardForm from '../cards/newCardForms/RuleCardForm';
import PlayerCardForm from '../cards/newCardForms/PlayerCardForm';
import MonsterCardForm from '../cards/newCardForms/MonsterCardForm';
import { DEFAULT_TABS } from '../../constants';
import CardTypeSelect from '../cards/cardFields/CardTypeSelect';
import CardColumnSelect from '../cards/cardFields/CardColumnSelect';
import CardBodyLayout from '../layout/CardBodyLayout';
import RowLayout from '../layout/RowLayout';

const NewCardDialog: React.FC<{
  isVisible: boolean;
  closeNewCardDialog: () => void;
  createCard: (cardData: CardData) => void;
}> = ({ isVisible, createCard, closeNewCardDialog }) => {
  const id = uuidv4();
  const activeTab = useReadLocalStorage<string>('activeTab') ?? DEFAULT_TABS[0];
  const [content, setContent] = useState({} as GenericCardContent);
  const [cardType, setCardType] = useState<CardType>(CardType.Note);
  const [cardColumn, setCardColumn] = useState<string>('droppable-1');

  const handleSave = () => {
    createCard({ id, content, type: cardType, column: cardColumn, tab: activeTab });
    setContent({} as GenericCardContent);
  };

  const handleCancel = () => {
    setContent({} as GenericCardContent);
    closeNewCardDialog();
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
      <Box
        sx={(theme) => {
          return {
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
          };
        }}
      >
        <Typography
          id="modal-title"
          variant="h3"
          component="h3"
          sx={(theme) => {
            return {
              margin: theme.spacing(4),
              paddingX: theme.spacing(2),
              paddingTop: theme.spacing(1.5),
              alignSelf: 'center',
            };
          }}
        >
          Create Card
        </Typography>
        <Box
          sx={(theme) => {
            return {
              display: 'flex',
              flexDirection: 'column',
              padding: theme.spacing(2),
              overflowY: 'scroll',
              fontSize: theme.spacing(6),
              fontWeight: 400,
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            };
          }}
        >
          <CardBodyLayout
            sxOverrides={{
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}>
              <CardTypeSelect cardType={cardType} setCardType={setCardType} />
              <CardColumnSelect cardColumn={cardColumn} setCardColumn={setCardColumn} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>{renderCardForm()}</Box>
          </CardBodyLayout>
          <RowLayout sxOverrides={{ justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              aria-label="cancel-button"
              data-testid="cancel-button"
              onClick={handleCancel}
              sx={(theme) => {
                return {
                  alignSelf: 'center',
                  justifyContent: 'center',
                  width: 'fit-content',
                  padding: theme.spacing(1),
                  marginLeft: 'auto',
                };
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={cardType === CardType.Rule && !content?.title}
              aria-label="save-button"
              data-testid="save-button"
              onClick={handleSave}
              sx={(theme) => {
                return {
                  alignSelf: 'center',
                  justifyContent: 'center',
                  width: 'fit-content',
                  padding: theme.spacing(1),
                  marginLeft: 'auto',
                };
              }}
            >
              <CheckIcon />
              Save
            </Button>
          </RowLayout>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewCardDialog;
