import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MainMenu from './MainMenu';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { act } from 'react-dom/test-utils';
import { mockCardDataMap, mockSaveData } from '../../mockData';
import { EMPTY_CARD_MAP } from '../../constants';

const mockSetCards = jest.fn();
jest.mock('../../hooks/useCardStorage', () => () => [mockCardDataMap, mockSetCards]);

const mockProps = {
  tabs: ['tab-1', 'tab-2', 'tab-3'],
  setTabs: jest.fn(),
  activeTab: 'tab-1',
  setActiveTab: jest.fn(),
  setShowNewCardModal: jest.fn(),
};

const blob = new Blob([JSON.stringify(mockSaveData)]);
const file = new File([blob], 'dmscreen.json', {
  type: 'application/JSON',
});

const fileWithWrongType = new File([blob], 'dmscreen.json', {
  type: 'image/jpeg',
});

describe('<MainMenu />', () => {
  describe('file actions', () => {
    beforeEach(() => {
      localStorage.clear();
      jest.clearAllMocks();
    });

    it('downloads cards when download button is clicked', () => {
      jest.spyOn(document, 'createElement');

      render(
        <ThemeProvider theme={theme}>
          <MainMenu {...mockProps} />
        </ThemeProvider>,
      );

      act(() => {
        screen.getByTestId('download-button').click();
      });
      expect(document.createElement).toHaveBeenCalledWith('a');
    });

    it('uploads file and saves to localStorage', async () => {
      render(
        <ThemeProvider theme={theme}>
          <MainMenu {...mockProps} />
        </ThemeProvider>,
      );

      const inputEl = screen.getByTestId('file-input');
      Object.defineProperty(inputEl, 'files', {
        value: [file],
      });
      await act(async () => {
        fireEvent.change(inputEl);
      });

      await waitFor(() => {
        expect(mockProps.setTabs).toHaveBeenCalled();
        expect(mockProps.setActiveTab).toHaveBeenCalledWith('welcome-info');
        expect(mockSetCards).toHaveBeenCalled();
      });
    });

    it('does not save file if file type is invalid', async () => {
      render(
        <ThemeProvider theme={theme}>
          <MainMenu {...mockProps} />
        </ThemeProvider>,
      );

      const inputEl = screen.getByTestId('file-input');

      Object.defineProperty(inputEl, 'files', {
        value: [fileWithWrongType],
      });
      fireEvent.change(inputEl);
      await waitFor(() => {
        expect(mockSetCards).not.toHaveBeenCalled();
      });
    });

    it('shows feedback modal if file type is invalid', async () => {
      render(
        <ThemeProvider theme={theme}>
          <MainMenu {...mockProps} />
        </ThemeProvider>,
      );

      const inputEl = screen.getByTestId('file-input');

      Object.defineProperty(inputEl, 'files', {
        value: [fileWithWrongType],
      });
      fireEvent.change(inputEl);
      await waitFor(() => {
        expect(screen.getByText(/Please upload a JSON file./i)).toBeInTheDocument();
      });
    });

    it('clears localStorage when reset button is clicked and choice is verified', () => {
      render(
        <ThemeProvider theme={theme}>
          <MainMenu {...mockProps} />
        </ThemeProvider>,
      );

      act(() => {
        screen.getByTestId('reset-button').click();
      });

      act(() => {
        screen.getByTestId('confirm-button').click();
      });
      expect(mockSetCards).toHaveBeenCalledWith(EMPTY_CARD_MAP);
    });
  });

  describe('new card', () => {
    it('opens new card modal when new card button is clicked', () => {
      render(
        <ThemeProvider theme={theme}>
          <MainMenu {...mockProps} />
        </ThemeProvider>,
      );

      act(() => {
        screen.getByTestId('new-card-button').click();
      });
      expect(mockProps.setShowNewCardModal).toHaveBeenCalledWith(true);
    });
  });
});
