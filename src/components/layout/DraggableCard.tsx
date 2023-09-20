import React from 'react';
import { CardData } from '../../interfaces';
import SmallCard from './SmallCard';
import { Draggable } from 'react-beautiful-dnd';

const DraggableCard: React.FC<{ card: CardData; index: number; expandCard: (id: string) => void }> = ({
  card,
  index,
  expandCard,
}) => {
  const handleClick = () => {
    expandCard(card.id);
  };

  return (
    <Draggable key={card.id} draggableId={card.id} index={index}>
      {(provided, _snapshot) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onClick={handleClick}>
          <SmallCard key={card.id} type={card.type} title={card.title} content={card.content} />
        </div>
      )}
    </Draggable>
  );
};

export default DraggableCard;
