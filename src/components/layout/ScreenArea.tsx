import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext } from 'react-beautiful-dnd';
import { CardData, CardType, ScreenSize } from '../../interfaces';
import Column from './Column';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { HEADER_HEIGHT } from '../../constants';
import { getScreenSize } from '../../utils';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
import ExpandedNoteCard from '../cards/ExpandedNoteCard';
import ExpandedMapCard from '../cards/ExpandedMapCard';

interface CardDataMap {
  [key: string]: CardData[];
}

const createDemoCards = () => {
  const cards = Array.from({ length: 10 }, () => {
    const id = uuidv4();
    return {
      id: id,
      title: `Performers’ Quarters`,
      content: {
        roomNumber: 'M6',
        description:
          'The walls of this gloomy chamber are lined with black-veiled compartments that contain makeshift beds. The furniture is sparse: a few wooden tables and chairs, a box of junk in one corner, and flickering lanterns resting here and there. Five performers occupy the room. Two of them pace nervously while the others weep.',
        content:
          'The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows: The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows: The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows: The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows: The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows: The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows: The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows: The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows: The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows: The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows: The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows: The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows: The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows: The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows: The actors here perform their roles reluctantly and are eager to leave, but cannot do so yet; each either has an unfulfilled bargain with the hag or has displeased her somehow and is working to win back her favor. All five performers are unarmed commoners (neutral), and the nonhuman ones have darkvision out to a range of 60 feet. They are as follows:',
      },
      column: `droppable-${Math.floor(Math.random() * 4 + 1)}`,
      type: CardType.Map,
    };
  });
  const cardDataMap: CardDataMap = { 'droppable-1': [], 'droppable-2': [], 'droppable-3': [], 'droppable-4': [] };
  cards.forEach((card) => {
    cardDataMap[card.column].push(card);
  });
  return cardDataMap;
};

const DEMO_CARDS = createDemoCards();

interface StyleProps {
  screenSize: ScreenSize;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  screenArea: {
    width: ({ screenSize }) => screenSize.width,
    height: ({ screenSize }) => screenSize.height - HEADER_HEIGHT,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const ScreenArea: React.FC = () => {
  const savedCards = useReadLocalStorage('cards');
  const [cards, setCards] = useLocalStorage('cards', DEMO_CARDS);
  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize());
  const classes = useStyles({ screenSize: screenSize });
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [expandedCardData, setExpandedCardData] = useState<CardData | null>(null);

  useEffect(() => {
    if (expandedCardId) {
      const allCards = Object.values(cards).flat();
      const expandedCard = allCards.find((card) => card.id === expandedCardId) ?? null;
      setExpandedCardData(expandedCard);
    }
  }, [expandedCardId]);

  const closeExpandedCard = () => {
    setExpandedCardId(null);
    setExpandedCardData(null);
  };

  const reorder = (
    targetCard: CardData,
    sourceColumnId: string,
    dropColumnId: string,
    sourceIndex: number,
    dropIndex: number,
  ) => {
    const updatedList = Object.assign({}, cards);
    const fromColumn = updatedList[sourceColumnId];
    const targetColumn = updatedList[dropColumnId];
    if (dropColumnId == targetCard?.column) {
      const [removed] = targetColumn.splice(sourceIndex, 1);
      targetColumn.splice(dropIndex, 0, removed);
    } else {
      const [movedCard] = fromColumn.splice(sourceIndex, 1);
      movedCard.column = dropColumnId;

      targetColumn.splice(dropIndex, 0, movedCard);
      updatedList[dropColumnId] = targetColumn;
    }
    return updatedList;
  };

  // const createCard = () => {
  //   const id = uuidv4();
  //   const [row, column] = findFirstEmptySpace();
  //   setCards((prevCards: CardData[]) => [
  //     ...prevCards,
  //     { id, column: column, row: row, title: 'New Card', content: 'Content' },
  //   ]);
  // };

  const updateCard = (cardData: CardData): void => {
    const targetCard = cards[cardData.column].find((card) => card.id === cardData.id);
    if (targetCard) {
      targetCard.title = cardData.title;
      targetCard.content = cardData.content;
      setCards(cards);
    }
  };

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

  //@ts-ignore no-implicit-any
  const onDragEnd = (result) => {
    if (!result.destination) {
      console.error('outside of droppable area');
      return;
    }
    const sourceColumnId = result.source.droppableId;
    const dropColumnId = result.destination.droppableId;
    const sourceIndex = result.source.index;
    const dropIndex = result.destination.index;
    const cardId = result.draggableId;
    const targetCard = cards[sourceColumnId].find((card) => card.id === cardId);
    if (!targetCard) {
      console.error('targetCard not found');
      return;
    }
    const updatedList = reorder(targetCard, sourceColumnId, dropColumnId, sourceIndex, dropIndex);
    setCards(updatedList);
  };

  const renderCard = () => {
    if (expandedCardData) {
      switch (expandedCardData.type) {
        case CardType.Note:
          return (
            <ExpandedNoteCard
              closeExpandedCard={closeExpandedCard}
              expandedCardData={expandedCardData}
              updateCard={updateCard}
            />
          );
        case CardType.Map:
          return (
            <ExpandedMapCard
              closeExpandedCard={closeExpandedCard}
              expandedCardData={expandedCardData}
              updateCard={updateCard}
            />
          );
        default:
          return null;
      }
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={classes.screenArea} data-testid="screen-area">
          <Column columnId={1} cards={cards['droppable-1']} expandCard={setExpandedCardId} />
          <Column columnId={2} cards={cards['droppable-2']} expandCard={setExpandedCardId} />
          <Column columnId={3} cards={cards['droppable-3']} expandCard={setExpandedCardId} />
          <Column columnId={4} cards={cards['droppable-4']} expandCard={setExpandedCardId} />
        </div>
      </DragDropContext>
      {renderCard()}
    </>
  );
};

export default ScreenArea;
