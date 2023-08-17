import React from 'react';
import { CardData } from '../../interfaces';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import ExpandedNoteCard from '../cards/ExpandedNoteCard';
import { CardType } from '../../interfaces';

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
        {expandedCardData.type === CardType.Note && (
          <ExpandedNoteCard title={expandedCardData.title} content={expandedCardData.content} />
        )}
      </Box>
    </Modal>
  );
};

export default ExpandedCard;
