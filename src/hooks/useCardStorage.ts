import { useLocalStorage } from 'usehooks-ts';
import { CardDataMap } from '../interfaces';
import { WELCOME_CARDS } from '../welcomeCard';

const useCardStorage: () => [CardDataMap, (cards: CardDataMap) => void] = () => {
  const [storedCards, setStoredCards] = useLocalStorage('cards', WELCOME_CARDS);
  const emptyCardMap = { 'droppable-1': [], 'droppable-2': [], 'droppable-3': [], 'droppable-4': [] } as CardDataMap;

  const mappedCards = storedCards.reduce((filteredCards: CardDataMap, card) => {
    filteredCards[card.column].push(card);
    return filteredCards;
  }, emptyCardMap);

  const setCards = (cards: CardDataMap) => {
    setStoredCards(Object.values(cards).flat());
  };

  return [mappedCards, setCards];
};

export default useCardStorage;
