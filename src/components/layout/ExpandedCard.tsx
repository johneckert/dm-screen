import React, { useState } from 'react';
import { CardData } from '../../interfaces';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Theme } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

interface StyleProps {
  isEditing: boolean;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
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

interface ExpandedCardProps {
  closeExpandedCard: () => void;
  expandedCardData: CardData;
  updateCard: (cardData: CardData) => void;
}

const ExpandedCard: React.FC<ExpandedCardProps> = ({ closeExpandedCard, expandedCardData, updateCard }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(expandedCardData.title);
  const [content, setContent] = useState(expandedCardData.content);
  const classes = useStyles({ isEditing });
  const handleClose = () => {
    closeExpandedCard();
  };
  const handleEdit = () => {
    if (isEditing) {
      updateCard({ ...expandedCardData, title: title, content: content });
    }
    setIsEditing(!isEditing);
  };

  return (
    <Modal
      open={expandedCardData.id !== null}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      data-testid="expanded-card"
    >
      <Box className={classes.modal}>
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
              <IconButton
                className={classes.editButton}
                aria-label="edit-save-button"
                data-testid="save-button"
                onClick={handleEdit}
              >
                <CheckIcon />
              </IconButton>
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
      </Box>
    </Modal>
  );
};

export default ExpandedCard;
