import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext } from 'react-beautiful-dnd';
import { CardData, ScreenSize, GridTemplate } from '../interfaces';
import Column from './layout/Column';
import makeStyles from '@mui/styles/makeStyles';
import { HEADER_HEIGHT } from '../constants';
import { getScreenSize, getGridTemplate } from '../utils';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';

const DEMO_CARDS = Array.from({ length: 10 }, () => {
  const id = uuidv4();
  return {
    id: id,
    title: `Item ${id}`,
    content: `Content ${id}`,
    column: `droppable-${Math.floor(Math.random() * 4 + 1)}`,
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
    display: 'flex',
  }),
}));

const ScreenArea: React.FC = () => {
  const savedCards = useReadLocalStorage('cards');
  const [cards, setCards] = useLocalStorage('cards', DEMO_CARDS);
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
    if (!savedCards) {
      setCards(DEMO_CARDS);
    }
  }, []);

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
    const cardId = result.draggableId;
    const targetCard = cards.find((card) => card.id === cardId);
    if (targetCard) {
      targetCard.column = result.destination.droppableId;
      setCards(cards);
    }
    const updatedList = reorder(cards, result.source.index, result.destination.index);

    setCards(updatedList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.screenArea} data-testid="screen-area">
        <Column columnId={1} cards={cards.filter((card) => card.column === 'droppable-1')} />
        <Column columnId={2} cards={cards.filter((card) => card.column === 'droppable-2')} />
        <Column columnId={3} cards={cards.filter((card) => card.column === 'droppable-3')} />
        <Column columnId={4} cards={cards.filter((card) => card.column === 'droppable-4')} />
      </div>
    </DragDropContext>
  );
};

export default ScreenArea;
