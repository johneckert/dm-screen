import { useState, useCallback, CSSProperties, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import Container from '@mui/material/Container';
import { ItemTypes } from '../constants';
import { DragItem } from '../interfaces';
import DraggableCard from './DraggableCard';

interface CardMap {
  [key: string]: { top: number; left: number; title: string };
}

const DEMO_CARDS = {
  a: { top: 20, left: 80, title: 'A Test' },
  b: { top: 180, left: 20, title: 'B Test' },
};

const ScreenArea = () => {
  const getScreenSize = () => {
    return { width: window.innerWidth, height: window.innerHeight };
  };
  const [screenSize, setScreenSize] = useState(getScreenSize());

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

  const [cards, setCards] = useState<CardMap>(DEMO_CARDS);

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
    <Container sx={{ background: 'pink', ...screenArea }} ref={drop}>
      {Object.keys(cards).map((key) => (
        <DraggableCard key={key} id={key} top={cards[key].top} left={cards[key].left} title={cards[key].title} />
      ))}
    </Container>
  );
};

export default ScreenArea;
