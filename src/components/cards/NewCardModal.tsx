import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Theme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import { MapContent, CardData, CardType } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';

export const useStyles = makeStyles<Theme>((theme) => ({
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
    background: 'rgb(223, 200, 221)',
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
  avatar: {
    color: 'rgb(85, 47, 77)',
  },
}));

const NewCardModal: React.FC<{
  showNewCard: boolean;
  columnId: string;
  createCard: (cardData: CardData) => void;
}> = ({ showNewCard, columnId, createCard }) => {
  const classes = useStyles();
  const [title, setTitle] = React.useState('');
  const [content, setContent] = useState({} as MapContent);

  const handleSave = () => {
    const id = uuidv4();
    createCard({ id, title, content, type: CardType.Map, column: columnId });
    setTitle('');
    setContent({} as MapContent);
  };

  return (
    <Modal
      open={showNewCard}
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
        <Box className={classes.editView}>
          <TextField
            id="modal-room-number"
            label="Room Number"
            className={classes.modalInput}
            sx={{ paddingBottom: 2 }}
            variant="outlined"
            value={content.roomNumber}
            onChange={(e) => setContent({ ...content, roomNumber: e.target.value })}
          />
          <TextField
            id="modal-title"
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
            id="modal-description"
            label="Read Out Loud"
            fullWidth
            className={classes.modalInput}
            sx={{ paddingBottom: 2 }}
            variant="outlined"
            multiline
            rows={18}
            value={content.description}
            onChange={(e) => setContent({ ...content, description: e.target.value })}
            data-testid="content-input"
          />
          <TextField
            id="modal-content"
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
          <Button
            variant="contained"
            className={classes.editButton}
            aria-label="edit-save-button"
            data-testid="save-button"
            onClick={handleSave}
          >
            Save
            <CheckIcon />
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewCardModal;
