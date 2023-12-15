import { Droppable } from 'react-beautiful-dnd';
import Box from '@mui/material/Box';
import { CardData } from '../../interfaces';
import DraggableCard from './DraggableCard';
import { NUMBER_OF_COLUMNS, BREAKPOINTS } from '../../constants';
import { getScreenSize, getBreakPoint } from '../../utils';
import { GREY } from '../../colors';

export interface ColumnProps {
  cards: CardData[];
  columnId: number;
  expandCard: (id: string) => void;
  handleContextMenuOpen: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => void;
}

const Column: React.FC<ColumnProps> = ({ cards, columnId, expandCard, handleContextMenuOpen }) => {
  const screenSize = getScreenSize();
  const breakPoint = getBreakPoint(screenSize);
  const numberOfColumns = NUMBER_OF_COLUMNS[breakPoint];
  return (
    <Box
      data-testid="column"
      sx={(theme) => {
        return {
          width: () => (screenSize.width - 16) / numberOfColumns,
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1),
          [theme.breakpoints.up(BREAKPOINTS.lg)]: {
            height: '100%',
          },
          [theme.breakpoints.down(BREAKPOINTS.lg)]: {
            borderBottom: `2px dashed ${GREY[300]}`,
          },
        };
      }}
    >
      <Droppable droppableId={`droppable-${columnId}`}>
        {(provided, _) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {cards.map((card, index) => (
              <DraggableCard
                key={card.id}
                card={card}
                index={index}
                expandCard={expandCard}
                handleContextMenuOpen={handleContextMenuOpen}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Box>
  );
};

export default Column;
