import React, { useState } from 'react';
import { CardData, NoteCardContent } from '../../../interfaces';
import ExpandedCardLayout from '../ExpandedCardLayout';
import { Box, Typography } from '@mui/material';
import BlockField from '../cardFields/BlockField';
import CardHeader from '../cardFields/CardHeader';
import NoteCardForm from '../newCardForms/NoteCardForm';
import CardBodyLayout from '../../layout/CardBodyLayout';

interface ExpandedNoteCardProps {
  closeExpandedCard: () => void;
  expandedCardData: CardData;
  updateCard: (cardData: CardData) => void;
  deleteCard: (cardData: CardData) => void;
}

const ExpandedNoteCard: React.FC<ExpandedNoteCardProps> = ({
  closeExpandedCard,
  expandedCardData,
  updateCard,
  deleteCard,
}) => {
  const cardContent = expandedCardData.content as NoteCardContent;
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(cardContent.title);
  const [notes, setNotes] = useState(cardContent.notes);
  const formContent = {
    title,
    notes,
  };
  const handleEdit = () => {
    if (isEditing) {
      updateCard({ ...expandedCardData, content: { ...formContent } });
    }
    setIsEditing(!isEditing);
  };

  const handleContentUpdate = (content: NoteCardContent) => {
    setTitle(content.title);
    setNotes(content.notes);
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
            sx={(theme) => {
              return {
                alignSelf: 'center',
                margin: theme.spacing(4),
                paddingX: theme.spacing(2),
                paddingTop: theme.spacing(1.5),
              };
            }}
            component="h3"
          >
            Editing
          </Typography>
          <Box>
            <NoteCardForm content={formContent} setContent={handleContentUpdate} />
          </Box>
        </>
      ) : (
        <>
          <CardHeader title={title} handleEdit={handleEdit} />
          <CardBodyLayout>
            <BlockField label="Notes" value={notes} />
          </CardBodyLayout>
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedNoteCard;
