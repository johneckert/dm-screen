import React, { ReactNode } from 'react';
import { CardData } from '../../interfaces';
import CardErrorBoundry from './CardErrorBoundry';
import CardBodyLayout from '../layout/CardBodyLayout';
import ModalLayout from '../layout/ModalLayout';
import ButtonArea from '../layout/ButtonArea';

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
      {isEditing && <ButtonArea isEdit handleLeftButton={handleDelete} handleRightButton={saveCard} />}
    </ModalLayout>
  );
};

export default ExpandedCardLayout;
