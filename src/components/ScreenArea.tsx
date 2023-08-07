import React, { useState, useCallback, CSSProperties, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import makeStyles from '@mui/styles/makeStyles';
import { HEADER_HEIGHT, ItemTypes } from '../constants';
import { DragItem, CardData, ScreenSize, Grid, GridTemplate } from '../interfaces';
import DraggableCard from './DraggableCard';
import { getScreenSize, getGrid, getGridTemplate, snapToGrid } from '../utils';
import { useLocalStorage } from 'usehooks-ts';
import theme from '../theme';
import { v4 as uuidv4 } from 'uuid';

const DEMO_CARDS: CardData[] = [
  { id: uuidv4(), top: 20, left: 80, title: 'A Test', content: 'Content A.' },
  { id: uuidv4(), top: 180, left: 20, title: 'B Test', content: 'Content B.' },
];

interface StyleProps {
  screenSize: ScreenSize;
  gridTemplate: GridTemplate;
}

const useStyles = makeStyles((theme) => ({
  screenArea: (props: StyleProps) => ({
    width: props.screenSize.width,
    height: props.screenSize.height - HEADER_HEIGHT,
    paddingLeft: '8px',
    paddingRight: '8px',
  }),
  gridContainer: {
    display: 'grid',
    width: '100%',
    height: '100%',
    gridTemplateColumns: (props: StyleProps) => props.gridTemplate.columnDefinition,
    gridTemplateRows: (props: StyleProps) => props.gridTemplate.rowDefinition,
  },
}));

const ScreenArea = () => {
  const [cards, setCards] = useLocalStorage('cards', DEMO_CARDS || ([] as CardData[]));
  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize());
  const [gridSize, setGridSize] = useState<Grid>(getGrid(screenSize));
  const [GridTemplate, setGridTemplate] = useState<GridTemplate>(getGridTemplate(screenSize));
  const styleProps: StyleProps = { screenSize: screenSize, gridTemplate: GridTemplate };
  const classes = useStyles(styleProps);

  const createCard = () => {
    const id = uuidv4();
    setCards((prevCards: CardData[]) => [
      ...prevCards,
      { id, top: 20, left: 20, title: 'New Card', content: 'Content' },
    ]);
  };

  const updateCardData = (id: string, title: string, content: string): void => {
    const targetCard = cards.find((card) => card.id === id);
    if (targetCard) {
      targetCard.title = title;
      targetCard.content = content;
      setCards(cards);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenSize(getScreenSize());
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    setGridSize(getGrid(screenSize));
    setGridTemplate(getGridTemplate(screenSize));
  }, [screenSize]);

  const moveCard = useCallback(
    (id: string, left: number, top: number) => {
      const targetCard = cards.find((card) => card.id === id);
      if (!targetCard) {
        return;
      }
      targetCard.left = left;
      targetCard.top = top;
      setCards(cards);
    },
    [cards],
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number;
          y: number;
        };

        const rawLeft = Math.round(item.left + delta.x);
        const rawTop = Math.round(item.top + delta.y);

        const [left, top] = snapToGrid(rawLeft, rawTop, gridSize);
        moveCard(item.id, left, top);
        return undefined;
      },
    }),
    [moveCard],
  );

  return (
    <Container maxWidth={false} disableGutters className={classes.screenArea} ref={drop} data-testid="screen-area">
      <Box className={classes.gridContainer} ref={drop} data-testid="screen-area">
        {cards.map((card) => (
          <DraggableCard
            key={card.id}
            id={card.id}
            top={card.top}
            left={card.left}
            title={card.title}
            content={card.content}
            updateCardData={updateCardData}
          />
        ))}
        <Fab
          color="primary"
          aria-label="add-card"
          onClick={createCard}
          sx={{ position: 'absolute', bottom: '1em', right: '1em' }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Container>
  );
};

export default ScreenArea;
