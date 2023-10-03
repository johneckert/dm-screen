import useCardStorage from './useCardStorage';
import { render, screen, act } from '@testing-library/react';
import { useLocalStorage } from 'usehooks-ts';
import { WELCOME_CARDS } from '../welcomeCard';
import { mockCardData, mockCardDataMap } from '../mockData';
import { CardDataMap } from '../interfaces';
import React, { useEffect } from 'react';

const mockSetLocalStorage = jest.fn();

jest.mock('usehooks-ts', () => ({
  useLocalStorage: jest.fn(() => [[], mockSetLocalStorage]),
}));

const MockComponent: React.FC<{ dataToSave?: CardDataMap }> = ({ dataToSave }) => {
  const [cards, setCards] = useCardStorage();
  useEffect(() => {
    if (dataToSave) {
      setCards(dataToSave);
    }
  }, [dataToSave]);
  return <div>{JSON.stringify(cards)}</div>;
};

describe('useCardStorage hook', () => {
  it('it creates welcome cards if the user has no stored data', async () => {
    render(<MockComponent />);
    act(() => {
      expect(useLocalStorage).toHaveBeenCalledWith('cards', WELCOME_CARDS);
    });
  });

  it('returns stored data in CardDataMap format.', async () => {
    (useLocalStorage as jest.Mock).mockReturnValueOnce([mockCardData, jest.fn()]);
    render(<MockComponent dataToSave={mockCardDataMap} />);

    expect(screen.getByText(JSON.stringify(mockCardDataMap))).toBeInTheDocument();
  });

  it('stores card data as an array.', () => {
    render(<MockComponent dataToSave={mockCardDataMap} />);
    expect(mockSetLocalStorage).toHaveBeenCalledWith(mockCardData);
  });
});
