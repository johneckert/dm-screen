import React, { useState, useCallback, CSSProperties, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { ItemTypes } from '../constants';
import { DragItem, CardData } from '../interfaces';
import DraggableCard from './DraggableCard';
import { getScreenSize, getGrid, snapToGrid } from '../utils';
import { useLocalStorage } from 'usehooks-ts';
import { v4 as uuidv4 } from 'uuid';
import { grid } from '@mui/system';

const DEMO_CARDS: CardData[] = [
  { id: uuidv4(), top: 20, left: 80, title: 'A Test', content: 'Content A.' },
  { id: uuidv4(), top: 180, left: 20, title: 'B Test', content: 'Content B.' },
];

const ScreenArea = () => {
  const [cards, setCards] = useLocalStorage('cards', DEMO_CARDS || ([] as CardData[]));
  const [screenSize, setScreenSize] = useState(getScreenSize());
  const [gridSize, setGridSize] = useState(getGrid(screenSize));

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
        setGridSize(getGrid(screenSize));
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

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

  const screenArea: CSSProperties = {
    width: screenSize.width,
    height: screenSize.height,
  };

  return (
    <Container maxWidth={false} sx={{ px: 0, ...screenArea }} ref={drop} data-testid="screen-area">
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
    </Container>
  );
};

export default ScreenArea;
