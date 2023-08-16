import React, { useState, useContext } from 'react';
import { CardData, CardType } from '../../interfaces';
import makeStyles from '@mui/styles/makeStyles';
import NoteCard from '../cards/NoteCard';
import { Draggable } from 'react-beautiful-dnd';

interface StyleProps {
  left: number;
  top: number;
  column: number;
  row: number;
  isDragging: boolean;
}

const useStyles = makeStyles((theme) => ({
  draggableCard: {
    // position: 'absolute',
    transform: (props: StyleProps) => `translate3d(${props.left}px, ${props.top}px, 0)`,
    WebkitTransform: (props: StyleProps) => `translate3d(${props.left}px, ${props.top}px, 0)`,
    opacity: (props: StyleProps) => (props.isDragging ? 0.3 : 1),
    height: (props: StyleProps) => (props.isDragging ? 0 : ''),
    gridColumnStart: (props: StyleProps) => props.column,
    gridRowStart: (props: StyleProps) => props.row,
  },
}));

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
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onClick={handleClick}>
          {card.type === CardType.Note && <NoteCard key={card.id} title={card.title} content={card.content} />}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableCard;
