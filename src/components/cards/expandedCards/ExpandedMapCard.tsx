import React, { useState } from 'react';
import { CardData, CardType, MapCardContent } from '../../../interfaces';
import { Typography, Avatar } from '@mui/material';
import ExpandedCardLayout from '../ExpandedCardLayout';
import { avatarColor } from '../../../utils';
import BlockField from '../cardFields/BlockField';
import CardHeader from '../cardFields/CardHeader';
import MapCardForm from '../newCardForms/MapCardForm';
import CardBodyLayout from '../../layout/CardBodyLayout';

interface ExpandedMapCardProps {
  closeExpandedCard: () => void;
  expandedCardData: CardData;
  updateCard: (cardData: CardData) => void;
  deleteCard: (cardData: CardData) => void;
}

const ExpandedMapCard: React.FC<ExpandedMapCardProps> = ({
  closeExpandedCard,
  expandedCardData,
  updateCard,
  deleteCard,
}) => {
  const cardContent = expandedCardData.content as MapCardContent;
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(cardContent.title);
  const [notes, setNotes] = useState(cardContent.notes);
  const [roomNumber, setRoomNumber] = useState(cardContent.roomNumber);
  const [readOutLoudText, setReadOutLoudText] = useState(cardContent.readOutLoudText);
  const formContent = {
    title,
    roomNumber,
    readOutLoudText,
    notes,
  };
  const handleContentUpdate = (content: MapCardContent) => {
    setTitle(content.title);
    setNotes(content.notes);
    setRoomNumber(content.roomNumber);
    setReadOutLoudText(content.readOutLoudText);
  };
  const handleEdit = () => {
    if (isEditing) {
      updateCard({ ...expandedCardData, content: { ...formContent } });
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
          <Typography id="map-card-title" variant="cardHeader">
            Editing
          </Typography>
          <CardBodyLayout>
            <MapCardForm content={formContent} setContent={handleContentUpdate} />
          </CardBodyLayout>
        </>
      ) : (
        <>
          <CardHeader title={title} handleEdit={handleEdit}>
            <Avatar
              aria-label="avatar"
              sx={{ bgcolor: avatarColor(CardType.Map), width: 60, height: 60 }}
              data-testid="room-number-view"
            >
              {roomNumber || 'X'}
            </Avatar>
          </CardHeader>
          <CardBodyLayout>
            <BlockField label="Read Out Loud" value={readOutLoudText} cardType={CardType.Map} bgFill />
            <BlockField label="DM Notes" value={notes} cardType={CardType.Map} />
          </CardBodyLayout>
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedMapCard;
