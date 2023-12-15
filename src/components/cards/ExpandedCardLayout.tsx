import React, { ReactNode } from 'react';
import { Modal, Box, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardData } from '../../interfaces';
import CardErrorBoundry from './CardErrorBoundry';
import CardBodyLayout from '../layout/CardBodyLayout';

const ExpandedCardLayout: React.FC<{
  cardData: CardData;
  closeExpandedCard: () => void;
  deleteCard: (cardData: CardData) => void;
  isEditing: boolean;
  saveCard: () => void;
  children: ReactNode;
}> = ({ cardData, closeExpandedCard, deleteCard, isEditing, saveCard, children }) => {
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
      <Box
        sx={(theme) => {
          return {
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
          };
        }}
      >
        <CardBodyLayout sxOverrides={{ width: '100%' }}>
          <CardErrorBoundry deleteCard={handleDelete}>{children}</CardErrorBoundry>
        </CardBodyLayout>
        {isEditing && (
          <Box
            id="card-actions"
            sx={(theme) => {
              return {
                width: '100%',
                display: 'flex',
                alignSelf: 'flex-end',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: theme.spacing(2),
              };
            }}
          >
            <Button
              variant="outlined"
              sx={(theme) => {
                return {
                  alignSelf: 'center',
                  justifyContent: 'center',
                  width: theme.spacing(15),
                  marginLeft: 'auto',
                  '& svg': {
                    marginLeft: theme.spacing(1),
                  },
                };
              }}
              aria-label="delete-button"
              onClick={handleDelete}
              data-testid="delete-button"
            >
              Delete
              <DeleteIcon />
            </Button>
            <Button
              variant="contained"
              sx={(theme) => {
                return {
                  alignSelf: 'center',
                  justifyContent: 'center',
                  width: theme.spacing(15),
                  marginLeft: 'auto',
                  '& svg': {
                    marginLeft: theme.spacing(1),
                  },
                };
              }}
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
