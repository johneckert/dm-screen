import React, { useState } from 'react';
import { CardData, NoteCardContent } from '../../interfaces';
import ExpandedCardLayout from './ExpandedCardLayout';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
import TabSelect from './cardFields/TabSelect';
import BlockField from './cardFields//BlockField';
import CardHeader from './cardFields/CardHeader';
import NoteCardForm from './newCardForms/NoteCardForm';

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
  const [cardTab, setCardTab] = useState(expandedCardData.tab);
  const classes = useStyles({ isEditing });
  const formContent = {
    title,
    notes,
  };
  const handleEdit = () => {
    if (isEditing) {
      updateCard({ ...expandedCardData, content: { ...formContent }, tab: cardTab });
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
          <Typography id="note-card-title" sx={{ alignSelf: 'center' }} className={classes.modalTitle} component="h3">
            Editing
          </Typography>
          <Box className={classes.editView}>
            <TabSelect cardTab={cardTab} setCardTab={setCardTab} />
            <NoteCardForm content={formContent} setContent={handleContentUpdate} />
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.header}>
            <CardHeader title={title} handleEdit={handleEdit} />
          </Box>
          <Box className={classes.body}>
            <BlockField label="Notes" value={notes} />
          </Box>
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedNoteCard;
