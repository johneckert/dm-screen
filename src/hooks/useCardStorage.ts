import { useLocalStorage } from 'usehooks-ts';
import { CardDataMap } from '../interfaces';
import { WELCOME_CARDS } from '../welcomeCard';

const useCardStorage: () => [CardDataMap, (cards: CardDataMap) => void] = () => {
  const [storedCards, setStoredCards] = useLocalStorage('cards', WELCOME_CARDS);

  const filterCards = () => {
    const filteredCards: CardDataMap = { 'droppable-1': [], 'droppable-2': [], 'droppable-3': [], 'droppable-4': [] };
    storedCards.forEach((card) => {
      filteredCards[card.column].push(card);
    });
    return filteredCards;
  };

  const setCards = (cards: CardDataMap) => {
    setStoredCards(Object.values(cards).flat());
  };

  return [filterCards(), setCards];
};

export default useCardStorage;
