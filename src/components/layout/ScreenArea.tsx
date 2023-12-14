import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { CardData, CardType, ContextMenuAction, ScreenSize } from '../../interfaces';
import Column from './Column';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { getScreenSize } from '../../utils';
import useCardStorage from '../../hooks/useCardStorage';
import ExpandedNoteCard from '../cards/expandedCards/ExpandedNoteCard';
import ExpandedMapCard from '../cards/expandedCards/ExpandedMapCard';
import ExpandedRuleCard from '../cards/expandedCards/ExpandedRuleCard';
import ExpandedPlayerCard from '../cards/expandedCards/ExpandedPlayerCard';
import ExpandedMonsterCard from '../cards/expandedCards/ExpandedMonsterCard';
import NewCardDialog from '../dialogs/NewCardDialog';
import { GREY } from '../../colors';
import SmallCardContextMenu from '../dialogs/SmallCardContextMenu';

interface StyleProps {
  screenSize: ScreenSize;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  screenArea: {
    width: ({ screenSize }) => screenSize.width,
    minHeight: ({ screenSize }) => screenSize.height,
    height: '100%',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: GREY[100],
  },
}));

interface ScreenAreaProps {
  activeTab: string;
  showNewCardDialog: boolean;
  setShowNewCardDialog: (showNewCardDialog: boolean) => void;
}

const ScreenArea: React.FC<ScreenAreaProps> = ({ activeTab, showNewCardDialog, setShowNewCardDialog }) => {
  const [cards, setCards] = useCardStorage();
  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize());
  const classes = useStyles({ screenSize: screenSize });
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [expandedCardData, setExpandedCardData] = useState<CardData | null>(null);
  const [contextId, setContextId] = useState<string | false>(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const allCards = Object.values(cards).flat();

  useEffect(() => {
    if (expandedCardId) {
      const expandedCard = allCards.find((card) => card.id === expandedCardId) ?? null;
      setExpandedCardData(expandedCard);
    }
  }, [expandedCardId]);

  const closeExpandedCard = () => {
    setExpandedCardId(null);
    setExpandedCardData(null);
  };

  const handleContextMenuOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => {
    event.preventDefault();
    setMenuPosition({ top: event.clientY, left: event.clientX });
    setContextId(id);
  };

  const handleContextMenuClose = () => {
    setContextId(false);
  };

  const findCardColumn = (cardId: string) => {
    const card = allCards.find((card) => card.id === cardId);
    if (!card) {
      console.error('card not found');
      return '';
    }
    return card.column;
  };

  const handleContextClick = (action: ContextMenuAction, tab: string | undefined) => {
    console.log(action, tab);
    if (!contextId) {
      console.error('Card ID not found.');
      return;
    }
    const targetColumn = findCardColumn(contextId);
    const updatedCards = Object.assign({}, cards);
    switch (action) {
      case ContextMenuAction.Open:
        setExpandedCardId(contextId);
        setContextId(false);
        break;
      case ContextMenuAction.Move:
        updatedCards[targetColumn].map((card) => {
          if (card.id === contextId) {
            card.tab = tab ?? '';
          }
        });
        setCards(updatedCards);
        setContextId(false);
        break;
      case ContextMenuAction.Delete:
        updatedCards[targetColumn] = updatedCards[targetColumn].filter((card) => card.id !== contextId);
        setCards(updatedCards);
        setContextId(false);
        break;
      default:
        break;
    }
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

  const closeNewCardDialog = () => {
    setShowNewCardDialog(false);
  };

  const createCard = (cardData: CardData) => {
    const columnKey = cardData.column;
    const targetColumn = cards[`${columnKey}`];
    targetColumn.push(cardData);
    setCards({
      ...cards,
      [`${columnKey}`]: targetColumn,
    });
    setShowNewCardDialog(false);
  };

  const updateCard = (cardData: CardData): void => {
    const targetCard = cards[cardData.column].find((card) => card.id === cardData.id);
    if (targetCard) {
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
        case CardType.Player:
          return (
            <ExpandedPlayerCard
              closeExpandedCard={closeExpandedCard}
              expandedCardData={expandedCardData}
              updateCard={updateCard}
              deleteCard={deleteCard}
            />
          );
        case CardType.Monster:
          return (
            <ExpandedMonsterCard
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
          <Column
            columnId={1}
            cards={activeTabCards(cards['droppable-1'])}
            expandCard={setExpandedCardId}
            handleContextMenuOpen={handleContextMenuOpen}
          />
          <Column
            columnId={2}
            cards={activeTabCards(cards['droppable-2'])}
            expandCard={setExpandedCardId}
            handleContextMenuOpen={handleContextMenuOpen}
          />
          <Column
            columnId={3}
            cards={activeTabCards(cards['droppable-3'])}
            expandCard={setExpandedCardId}
            handleContextMenuOpen={handleContextMenuOpen}
          />
          <Column
            columnId={4}
            cards={activeTabCards(cards['droppable-4'])}
            expandCard={setExpandedCardId}
            handleContextMenuOpen={handleContextMenuOpen}
          />
        </div>
      </DragDropContext>
      {renderCard()}
      {<NewCardDialog isVisible={showNewCardDialog} createCard={createCard} closeNewCardDialog={closeNewCardDialog} />}
      {contextId && (
        <SmallCardContextMenu
          handleContextMenuClose={handleContextMenuClose}
          handleContextClick={handleContextClick}
          menuPosition={menuPosition}
        />
      )}
    </>
  );
};

export default ScreenArea;
