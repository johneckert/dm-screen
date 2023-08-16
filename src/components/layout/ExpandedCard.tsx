import React from 'react';
import { CardData } from '../../interfaces';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
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
  },
}));

const ExpandedCard: React.FC<{ closeExpandedCard: () => void; expandedCardData: CardData }> = ({
  closeExpandedCard,
  expandedCardData,
}) => {
  const classes = useStyles();
  const handleClose = () => {
    closeExpandedCard();
  };
  return (
    <Modal
      open={expandedCardData.id !== null}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modal}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {expandedCardData?.title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {expandedCardData?.content}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ExpandedCard;
