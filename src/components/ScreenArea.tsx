import { useState, useCallback, CSSProperties, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import Container from '@mui/material/Container';
import { ItemTypes } from '../constants';
import { DragItem } from '../interfaces';
import DraggableCard from './DraggableCard';
import { getScreenSize } from '../utils';

interface CardMap {
  [key: string]: { top: number; left: number; title: string; content: string };
}

const DEMO_CARDS = {
  a: { top: 20, left: 80, title: 'A Test', content: 'Content A.' },
  b: { top: 180, left: 20, title: 'B Test', content: 'Content B.' },
};

const ScreenArea = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize());
  const [cards, setCards] = useState<CardMap>(DEMO_CARDS);

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

  const moveCard = useCallback((id: string, left: number, top: number) => {
    setCards((prevCards) => ({
      ...prevCards,
      [id]: {
        ...prevCards[id],
        left,
        top,
      },
    }));
  }, []);

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number;
          y: number;
        };

        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
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
      {Object.keys(cards).map((key) => (
        <DraggableCard
          key={key}
          id={key}
          top={cards[key].top}
          left={cards[key].left}
          title={cards[key].title}
          content={cards[key].content}
        />
      ))}
    </Container>
  );
};

export default ScreenArea;
