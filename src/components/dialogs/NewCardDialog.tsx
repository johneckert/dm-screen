import React, { useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import { Box, Typography } from '@mui/material';
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
import ModalLayout from '../layout/ModalLayout';
import ButtonArea from '../layout/ButtonArea';

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
    <ModalLayout isVisible={!!isVisible} close={handleCancel}>
      <Typography id="modal-title" variant="cardHeader">
        Create Card
      </Typography>
      <CardBodyLayout>
        <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}>
          <CardTypeSelect cardType={cardType} setCardType={setCardType} />
          <CardColumnSelect cardColumn={cardColumn} setCardColumn={setCardColumn} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>{renderCardForm()}</Box>
      </CardBodyLayout>
      <ButtonArea handleLeftButton={handleCancel} handleRightButton={handleSave} data-testid="button-area" />
    </ModalLayout>
  );
};

export default NewCardDialog;
