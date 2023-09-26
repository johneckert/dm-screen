import React, { useState } from 'react';
import { CardData, CardType, GenericCardContent } from '../../interfaces';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Theme } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import ExpandedCardLayout from './ExpandedCardLayout';
import ReactMarkdown from 'react-markdown';
import { Avatar } from '@mui/material';
import { avatarColor } from '../../utils';
import { PURPLE } from '../../colors';

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
  editView: {
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
  modalDescription: {
    margin: theme.spacing(4),
    padding: theme.spacing(2),
    background: PURPLE[200],
  },
  modalContent: {
    margin: theme.spacing(4),
    paddingX: theme.spacing(2),
    paddingTop: theme.spacing(3),
  },
}));

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
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(expandedCardData.title);
  const [content, setContent] = useState(expandedCardData.content as GenericCardContent);
  const classes = useStyles({ isEditing });

  const handleEdit = () => {
    if (isEditing) {
      updateCard({ ...expandedCardData, title: title, content: content });
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
            id="map-card-title"
            sx={{ alignSelf: 'center' }}
            className={classes.modalTitle}
            variant="h3"
            component="h3"
          >
            Editing
          </Typography>
          <Box className={classes.editView}>
            <TextField
              id="map-card-room-number"
              label="Room Number"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              value={content.roomNumber}
              onChange={(e) => setContent({ ...content, roomNumber: e.target.value })}
              data-testid="room-number-input"
            />
            <TextField
              id="map-card-title"
              label="Title"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              fullWidth
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              data-testid="title-input"
            />
            <TextField
              id="map-card-description"
              label="Read Out Loud"
              fullWidth
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              variant="outlined"
              multiline
              rows={18}
              value={content.description}
              onChange={(e) => setContent({ ...content, description: e.target.value })}
              data-testid="description-input"
            />
            <TextField
              id="map-card-content"
              label="DM Info"
              fullWidth
              variant="outlined"
              className={classes.modalInput}
              sx={{ paddingBottom: 2 }}
              multiline
              rows={18}
              value={content.content}
              onChange={(e) => setContent({ ...content, content: e.target.value })}
              data-testid="content-input"
            />
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.header}>
            <Avatar
              aria-label="avatar"
              sx={{ bgcolor: avatarColor(CardType.Map), width: 60, height: 60 }}
              data-testid="room-number-view"
            >
              {content.roomNumber}
            </Avatar>
            <Typography
              id="map-card-title"
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
            <Box
              id="map-card-description"
              className={classes.modalDescription}
              sx={{ boxShadow: 3 }}
              data-testid="description-view"
            >
              <ReactMarkdown>{content.description as string}</ReactMarkdown>
            </Box>
            <Box id="map-card-content" className={classes.modalContent} data-testid="content-view">
              <ReactMarkdown>{content.content}</ReactMarkdown>
            </Box>
          </Box>
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedMapCard;
