import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Theme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import { GenericCardContent, CardData, CardType } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import MapCardform from './newCardForms/MapCardForm';
import NoteCardForm from './newCardForms/NoteCardForm';

const useStyles = makeStyles<Theme>((theme) => ({
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    overflowY: 'scroll',
  },
  content: {
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
  cancelButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: theme.spacing(1),
    marginLeft: 'auto',
  },
  saveButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: theme.spacing(1),
    marginLeft: 'auto',
    '& svg': {
      marginRight: theme.spacing(1),
    },
  },
}));

const NewCardModal: React.FC<{
  showNewCard: boolean;
  columnId: string;
  closeNewCardModal: () => void;
  createCard: (cardData: CardData) => void;
}> = ({ showNewCard, columnId, createCard, closeNewCardModal }) => {
  const classes = useStyles();
  const id = uuidv4();
  const [title, setTitle] = React.useState('');
  const [content, setContent] = useState({} as GenericCardContent);
  const [cardType, setCardType] = React.useState<CardType>(CardType.Note);

  const handleSave = () => {
    createCard({ id, title, content, type: cardType, column: columnId });
    setTitle('');
    setContent({} as GenericCardContent);
  };

  const handleCancel = () => {
    setTitle('');
    setContent({} as GenericCardContent);
    closeNewCardModal();
  };

  const renderForm = () => {
    switch (cardType) {
      case CardType.Map:
        return <MapCardform title={title} content={content} setTitle={setTitle} setContent={setContent} />;
      case CardType.Note:
        return <NoteCardForm title={title} content={content} setTitle={setTitle} setContent={setContent} />;
      default:
        return <div>default</div>;
    }
  };

  return (
    <Modal
      open={showNewCard}
      onClose={handleCancel}
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
        <Box className={classes.content}>
          <Box className={classes.form}>
            <InputLabel id="card-type-select-label">Type</InputLabel>
            <Select
              labelId="card-type-select-label"
              sx={{ marginBottom: 2 }}
              id="card-type-select"
              value={cardType}
              label="Type"
              onChange={(e) => setCardType(e.target.value as CardType)}
            >
              {Object.values(CardType).map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
            {renderForm()}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <Button
              variant="outlined"
              className={classes.cancelButton}
              aria-label="cancel-button"
              data-testid="cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              className={classes.saveButton}
              aria-label="save-button"
              data-testid="save-button"
              onClick={handleSave}
            >
              <CheckIcon />
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewCardModal;
