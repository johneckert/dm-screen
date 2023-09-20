/* eslint-disable @typescript-eslint/no-unused-vars */
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
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore-next-line
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onClick={handleClick}>
            <SmallCard key={card.id} type={card.type} title={card.title} content={card.content} />
          </div>
        )
      }
    </Draggable>
  );
};

export default DraggableCard;
