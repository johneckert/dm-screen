import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { CardData, ScreenSize, GridTemplate } from '../interfaces';
import DraggableCard from './DraggableCard';
import Container from '@mui/material/Container';
import makeStyles from '@mui/styles/makeStyles';
import { HEADER_HEIGHT } from '../constants';
import { getScreenSize, getGridTemplate } from '../utils';

const DEMO_ITEMS = Array.from({ length: 10 }, () => {
  const id = uuidv4();
  return {
    id: id,
    title: `Item ${id}`,
    content: `Content ${id}`,
    column: Math.floor(Math.random() * 4 + 1),
  };
});

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
}));

const List: React.FC<{ cards: CardData[]; columnId: number }> = ({ cards, columnId }) => {
  console.log(`list ${columnId}`, cards);
  return (
    <Droppable droppableId={`droppable-${columnId}`}>
      {(provided, snapshot) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {cards.map((card, index) => (
            <DraggableCard key={card.id} card={card} index={index} />
          ))}
        </div>
      )}
    </Droppable>
  );
};

const ScreenArea: React.FC = () => {
  console.log('DEMO_ITEMS', DEMO_ITEMS);
  const [cards, setCards] = useState<CardData[]>(DEMO_ITEMS);
  // const [cards, setCards] = useLocalStorage('cards', DEMO_CARDS || ([] as CardData[]));
  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize());
  const [GridTemplate, setGridTemplate] = useState<GridTemplate>(getGridTemplate(screenSize));
  const styleProps: StyleProps = { screenSize: screenSize, gridTemplate: GridTemplate };
  const classes = useStyles(styleProps);
  const reorder = (list: CardData[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  // const createCard = () => {
  //   const id = uuidv4();
  //   const [row, column] = findFirstEmptySpace();
  //   setCards((prevCards: CardData[]) => [
  //     ...prevCards,
  //     { id, column: column, row: row, title: 'New Card', content: 'Content' },
  //   ]);
  // };
  // const updateCardData = (id: string, title: string, content: string): void => {
  //   const targetCard = cards.find((card) => card.id === id);
  //   if (targetCard) {
  //     targetCard.title = title;
  //     targetCard.content = content;
  //     setCards(cards);
  //   }
  // };
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
    setGridTemplate(getGridTemplate(screenSize));
  }, [screenSize]);

  //@ts-ignore no-implicit-any
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const updatedList = reorder(cards, result.source.index, result.destination.index);

    setCards(updatedList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container maxWidth={false} disableGutters className={classes.screenArea} data-testid="screen-area">
        <List columnId={1} cards={cards.filter((card) => card.column === 1)} />
        <List columnId={2} cards={cards.filter((card) => card.column === 2)} />
        <List columnId={3} cards={cards.filter((card) => card.column === 3)} />
        <List columnId={4} cards={cards.filter((card) => card.column === 4)} />
      </Container>
    </DragDropContext>
  );
};

export default ScreenArea;
