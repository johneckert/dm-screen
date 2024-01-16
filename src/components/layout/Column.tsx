import { Droppable } from 'react-beautiful-dnd';
import { Box, useTheme } from '@mui/material';
import { CardData } from '../../interfaces';
import DraggableCard from './DraggableCard';
import useScreenSize from '../../hooks/useScreenSize';
import { NUMBER_OF_COLUMNS, BREAKPOINTS } from '../../constants';
import { getBreakPoint } from '../../utils';

export interface ColumnProps {
  cards: CardData[];
  columnId: number;
  expandCard: (id: string) => void;
  handleContextMenuOpen: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => void;
}

const Column: React.FC<ColumnProps> = ({ cards, columnId, expandCard, handleContextMenuOpen }) => {
  const screenSize = useScreenSize();
  const theme = useTheme();
  const breakPoint = getBreakPoint(screenSize);
  const numberOfColumns = NUMBER_OF_COLUMNS[breakPoint];
  return (
    <Box
      data-testid="column"
      sx={{
        width: (screenSize.width - 16) / numberOfColumns,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        [theme.breakpoints.up(BREAKPOINTS.lg)]: {
          height: '100%',
        },
        [theme.breakpoints.down(BREAKPOINTS.lg)]: {
          borderBottom: `2px dashed ${theme.palette.grey[300]}`,
        },
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
