/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { CardData } from '../../interfaces';
import SmallCardLayout from '../cards/SmallCardLayout';
import { Draggable } from 'react-beautiful-dnd';

const DraggableCard: React.FC<{
  card: CardData;
  index: number;
  expandCard: (id: string) => void;
  handleContextMenuOpen: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => void;
}> = ({ card, index, expandCard, handleContextMenuOpen }) => {
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
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={handleClick}
            data-testid="draggable-card"
          >
            <SmallCardLayout
              key={card.id}
              id={card.id}
              type={card.type}
              content={card.content}
              handleContextMenuOpen={handleContextMenuOpen}
            />
          </div>
        )
      }
    </Draggable>
  );
};

export default DraggableCard;
