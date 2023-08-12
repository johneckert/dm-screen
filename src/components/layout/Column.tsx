import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { CardData, ScreenSize } from '../../interfaces';
import DraggableCard from './DraggableCard';
import { NUMBER_OF_COLUMNS, HEADER_HEIGHT } from '../../constants';
import makeStyles from '@mui/styles/makeStyles';
import { getScreenSize, getBreakPoint } from '../../utils';
import { Box } from '@mui/material';

interface StyleProps {
  screenSize: ScreenSize;
  numberOfColumns: number;
}

const useStyles = makeStyles((theme) => ({
  column: (props: StyleProps) => ({
    width: props.screenSize.width / props.numberOfColumns,
    height: props.screenSize.height - HEADER_HEIGHT,
    paddingLeft: '8px',
    paddingRight: '8px',
  }),
}));

const Column: React.FC<{ cards: CardData[]; columnId: number }> = ({ cards, columnId }) => {
  const screenSize = getScreenSize();
  const breakPoint = getBreakPoint(screenSize);
  const numberOfColumns = NUMBER_OF_COLUMNS[breakPoint];
  const styleProps: StyleProps = { screenSize, numberOfColumns };
  const classes = useStyles(styleProps);
  return (
    <div className={classes.column}>
      <Droppable droppableId={`droppable-${columnId}`}>
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {cards.map((card, index) => (
              <DraggableCard key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
