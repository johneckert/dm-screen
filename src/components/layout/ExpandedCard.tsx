import React, { useState } from 'react';
import { CardData } from '../../interfaces';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Theme } from '@mui/material/styles';
import { update } from 'lodash';

const useStyles = makeStyles<Theme>((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '80%',
    backgroundColor: '#ffffff',
    border: '2px solid #000',
    boxShadow: '24px',
    padding: '4px',
    display: 'flex',
    flexDirection: 'column',
  },
  editButton: {
    alignSelf: 'flex-end',
    margin: theme.spacing(4),
    width: 'fit-content',
  },
}));

interface ExpandedCardProps {
  closeExpandedCard: () => void;
  expandedCardData: CardData;
  updateCard: (cardData: CardData) => void;
}

const ExpandedCard: React.FC<ExpandedCardProps> = ({ closeExpandedCard, expandedCardData, updateCard }) => {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(expandedCardData.title);
  const [content, setContent] = useState(expandedCardData.content);
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
            <TextField
              id="modal-title"
              label="title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="modal-content"
              label="content"
              multiline
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </>
        ) : (
          <>
            <Typography id="modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography id="modal-content" sx={{ mt: 2 }}>
              {content}
            </Typography>
          </>
        )}
        <Button variant="contained" className={classes.editButton} onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </Button>
      </Box>
    </Modal>
  );
};

export default ExpandedCard;
