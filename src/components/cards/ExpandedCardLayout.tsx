import React, { ReactNode } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { Theme } from '@mui/material/styles';
import { CardData } from '../../interfaces';
import CardErrorBoundry from './CardErrorBoundry';

const useStyles = makeStyles<Theme, { isEditing: boolean }>((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '80%',
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    outline: 'none',
    borderRadius: theme.spacing(1.5),
    boxShadow: '24px',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    overflowY: 'scroll',
  },
  buttonArea: {
    width: '100%',
    display: 'flex',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  editButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: theme.spacing(15),
    marginLeft: 'auto',
    '& svg': {
      marginLeft: theme.spacing(1),
    },
  },
}));

const ExpandedCardLayout: React.FC<{
  cardData: CardData;
  closeExpandedCard: () => void;
  deleteCard: (cardData: CardData) => void;
  isEditing: boolean;
  saveCard: () => void;
  children: ReactNode;
}> = ({ cardData, closeExpandedCard, deleteCard, isEditing, saveCard, children }) => {
  const classes = useStyles({ isEditing: isEditing });
  const handleDelete = () => {
    deleteCard(cardData);
    closeExpandedCard();
  };
  const handleClose = () => {
    closeExpandedCard();
  };

  return (
    <Modal
      open={cardData.id !== null}
      onClose={handleClose}
      aria-labelledby="card-title"
      aria-describedby="card-data"
      data-testid="expanded-card"
    >
      <Box className={classes.modal}>
        <Box id="card-data" className={classes.body}>
          <CardErrorBoundry deleteCard={handleDelete}>{children}</CardErrorBoundry>
        </Box>
        {isEditing && (
          <Box id="card-actions" className={classes.buttonArea}>
            <Button
              variant="outlined"
              className={classes.editButton}
              aria-label="delete-button"
              onClick={handleDelete}
              data-testid="delete-button"
            >
              Delete
              <DeleteIcon />
            </Button>
            <Button
              variant="contained"
              className={classes.editButton}
              aria-label="edit-save-button"
              onClick={saveCard}
              data-testid="save-button"
            >
              Save
              <CheckIcon />
            </Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ExpandedCardLayout;
