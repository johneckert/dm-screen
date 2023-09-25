import React, { ReactNode } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import theme from '../../theme';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { Theme } from '@mui/material/styles';
import { CardData } from '../../interfaces';

const useStyles = makeStyles<Theme, { isEditing: boolean }>((theme) => ({
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
  body: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(4),
    width: '100%',
    height: ({ isEditing }) => (isEditing ? '92%' : '100%'),
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
  handleEdit: () => void;
  children: ReactNode;
}> = ({ cardData, closeExpandedCard, deleteCard, isEditing, handleEdit, children }) => {
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
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      data-testid="expanded-card"
    >
      <Box className={classes.modal}>
        <Box className={classes.body}>{children}</Box>
        {isEditing && (
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignSelf: 'flex-end',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: theme.spacing(2),
            }}
          >
            <Button
              variant="outlined"
              className={classes.editButton}
              aria-label="delete-button"
              data-testid="save-button"
              onClick={handleDelete}
            >
              Delete
              <DeleteIcon />
            </Button>
            <Button
              variant="contained"
              className={classes.editButton}
              aria-label="edit-save-button"
              data-testid="save-button"
              onClick={handleEdit}
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
