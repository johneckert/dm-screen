import React, { ReactNode } from 'react';
import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardData } from '../../interfaces';
import CardErrorBoundry from './CardErrorBoundry';
import CardBodyLayout from '../layout/CardBodyLayout';
import RowLayout from '../layout/RowLayout';
import ModalLayout from '../layout/ModalLayout';

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
    <ModalLayout isVisible={cardData.id !== null} close={handleClose}>
      <CardBodyLayout sxOverrides={{ width: '100%' }}>
        <CardErrorBoundry deleteCard={handleDelete}>{children}</CardErrorBoundry>
      </CardBodyLayout>
      {isEditing && (
        <RowLayout id="card-actions" sxOverrides={(theme) => ({ padding: theme.spacing(2) })}>
          <Button
            variant="outlined"
            sx={(theme) => {
              return {
                justifyContent: 'center',
                width: theme.spacing(15),
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
        </RowLayout>
      )}
    </ModalLayout>
  );
};

export default ExpandedCardLayout;
