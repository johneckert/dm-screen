import React, { ReactNode } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import theme from '../../theme';
import IconButton from '@mui/material/IconButton';
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
}));

const ExpandedCardLayout: React.FC<{
  cardData: CardData;
  closeExpandedCard: () => void;
  deleteCard: (cardData: CardData) => void;
  isEditing: boolean;
  children: ReactNode;
}> = ({ cardData, closeExpandedCard, deleteCard, isEditing, children }) => {
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
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton sx={{ bottom: 0 }} onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ExpandedCardLayout;
