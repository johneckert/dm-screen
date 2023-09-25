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
    padding: theme.spacing(2),
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
  const cardContent = expandedCardData.content as GenericCardContent;
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(expandedCardData.title);
  const [content, setContent] = useState(cardContent.content);
  const classes = useStyles({ isEditing });
  const handleEdit = () => {
    if (isEditing) {
      updateCard({ ...expandedCardData, title: title, content: { content } });
    }
    setIsEditing(!isEditing);
  };

  return (
    <ExpandedCardLayout
      cardData={expandedCardData}
      closeExpandedCard={closeExpandedCard}
      deleteCard={deleteCard}
      isEditing={isEditing}
      handleEdit={handleEdit}
    >
      {isEditing ? (
        <>
          <Box className={classes.header}>
            <TextField
              id="modal-title"
              className={classes.titleInput}
              fullWidth
              variant="standard"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              data-testid="title-input"
            />
          </Box>
          <Box className={classes.body}>
            <TextField
              id="modal-content"
              fullWidth
              multiline
              rows={18}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              data-testid="content-input"
            />
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.header}>
            <Typography id="modal-title" className={classes.modalTitle} variant="h3" component="h3">
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
            <Typography id="modal-content" className={classes.modalContent}>
              {content}
            </Typography>
          </Box>
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedNoteCard;
