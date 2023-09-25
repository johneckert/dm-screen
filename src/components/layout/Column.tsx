import { Droppable } from 'react-beautiful-dnd';
import { CardData, ScreenSize } from '../../interfaces';
import DraggableCard from './DraggableCard';
import { NUMBER_OF_COLUMNS, BREAKPOINTS } from '../../constants';
import makeStyles from '@mui/styles/makeStyles';
import { getScreenSize, getBreakPoint } from '../../utils';
import { Theme } from '@mui/material/styles';
import Button from '@mui/material/Button';

interface StyleProps {
  screenSize: ScreenSize;
  numberOfColumns: number;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  column: {
    width: ({ screenSize, numberOfColumns }) => (screenSize.width - 16) / numberOfColumns,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up(BREAKPOINTS.lg)]: {
      height: '100%',
    },
  },
}));

const Column: React.FC<{
  cards: CardData[];
  columnId: number;
  expandCard: (id: string) => void;
  openCreateCard: (columnId: number) => void;
}> = ({ cards, columnId, expandCard, openCreateCard }) => {
  const screenSize = getScreenSize();
  const breakPoint = getBreakPoint(screenSize);
  const numberOfColumns = NUMBER_OF_COLUMNS[breakPoint];
  const styleProps: StyleProps = { screenSize, numberOfColumns };
  const classes = useStyles(styleProps);
  return (
    <div className={classes.column} data-testid="column">
      <Button sx={{ marginY: 1, width: '100%' }} variant="contained" onClick={() => openCreateCard(columnId)}>
        New Card
      </Button>
      <Droppable droppableId={`droppable-${columnId}`}>
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore-next-line
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          (provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map((card, index) => (
                <DraggableCard key={card.id} card={card} index={index} expandCard={expandCard} />
              ))}
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
    </div>
  );
};

export default Column;
