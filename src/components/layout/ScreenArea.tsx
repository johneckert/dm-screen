import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { CardData, CardType, ScreenSize } from '../../interfaces';
import Column from './Column';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { getScreenSize } from '../../utils';
import useCardStorage from '../../hooks/useCardStorage';
import ExpandedNoteCard from '../cards/ExpandedNoteCard';
import ExpandedMapCard from '../cards/ExpandedMapCard';
import ExpandedRuleCard from '../cards/ExpandedRuleCard';
import NewCardModal from '../cards/NewCardModal';
import { GREY } from '../../colors';

interface StyleProps {
  screenSize: ScreenSize;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  screenArea: {
    width: ({ screenSize }) => screenSize.width,
    height: ({ screenSize }) => screenSize.height,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: GREY[100],
  },
}));

interface ScreenAreaProps {
  activeTab: string;
  showNewCardModal: boolean;
  setShowNewCardModal: (showNewCardModal: boolean) => void;
}

const ScreenArea: React.FC<ScreenAreaProps> = ({ activeTab, showNewCardModal, setShowNewCardModal }) => {
  const [cards, setCards] = useCardStorage();
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

  const closeNewCardModal = () => {
    setShowNewCardModal(false);
  };

  const createCard = (cardData: CardData) => {
    const columnKey = cardData.column;
    const targetColumn = cards[`${columnKey}`];
    targetColumn.push(cardData);
    setCards({
      ...cards,
      [`${columnKey}`]: targetColumn,
    });
    setShowNewCardModal(false);
  };

  const updateCard = (cardData: CardData): void => {
    const targetCard = cards[cardData.column].find((card) => card.id === cardData.id);
    if (targetCard) {
      targetCard.title = cardData.title;
      targetCard.tab = cardData.tab;
      targetCard.content = cardData.content;
      setCards(cards);
    }
    if (cardData.tab !== activeTab) {
      closeExpandedCard();
    }
  };

  const deleteCard = (cardData: CardData): void => {
    const targetColumn = cards[cardData.column];
    const targetCard = targetColumn.find((card) => card.id === cardData.id);
    if (targetCard) {
      const targetIndex = targetColumn.indexOf(targetCard);
      targetColumn.splice(targetIndex, 1);
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

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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

  const activeTabCards = (cards: CardData[]) => cards.filter((card) => card.tab === activeTab);

  const renderCard = () => {
    if (expandedCardData) {
      switch (expandedCardData.type) {
        case CardType.Note:
          return (
            <ExpandedNoteCard
              closeExpandedCard={closeExpandedCard}
              expandedCardData={expandedCardData}
              updateCard={updateCard}
              deleteCard={deleteCard}
            />
          );
        case CardType.Map:
          return (
            <ExpandedMapCard
              closeExpandedCard={closeExpandedCard}
              expandedCardData={expandedCardData}
              updateCard={updateCard}
              deleteCard={deleteCard}
            />
          );
        case CardType.Rule:
          return (
            <ExpandedRuleCard
              closeExpandedCard={closeExpandedCard}
              expandedCardData={expandedCardData}
              updateCard={updateCard}
              deleteCard={deleteCard}
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
          <Column columnId={1} cards={activeTabCards(cards['droppable-1'])} expandCard={setExpandedCardId} />
          <Column columnId={2} cards={activeTabCards(cards['droppable-2'])} expandCard={setExpandedCardId} />
          <Column columnId={3} cards={activeTabCards(cards['droppable-3'])} expandCard={setExpandedCardId} />
          <Column columnId={4} cards={activeTabCards(cards['droppable-4'])} expandCard={setExpandedCardId} />
        </div>
      </DragDropContext>
      {renderCard()}
      {<NewCardModal isVisible={showNewCardModal} createCard={createCard} closeNewCardModal={closeNewCardModal} />}
    </>
  );
};

export default ScreenArea;
