import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MainMenu from './MainMenu';
import { mockCardData } from '../../mockData';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { act } from 'react-dom/test-utils';

jest.spyOn(Storage.prototype, 'setItem');
jest.spyOn(Storage.prototype, 'removeItem');

const mockProps = {
  tabs: ['tab-1', 'tab-2', 'tab-3'],
  setTabs: jest.fn(),
  activeTab: 'tab-1',
  setActiveTab: jest.fn(),
};

const blob = new Blob([JSON.stringify(mockCardData)]);
const file = new File([blob], 'dmscreen.json', {
  type: 'application/JSON',
});

const fileWithWrongType = new File([blob], 'dmscreen.json', {
  type: 'image/jpeg',
});

describe('<MainMenu />', () => {
  describe('file actions', () => {
    beforeAll(() => {
      Object.defineProperty(window, 'location', {
        configurable: true,
        value: { reload: jest.fn() },
      });
    });

    beforeEach(() => {
      localStorage.clear();
      jest.clearAllMocks();
    });

    afterAll(() => {
      Object.defineProperty(window, 'location', { configurable: true, value: window.location });
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
      fireEvent.change(inputEl);
      await waitFor(() => {
        expect(localStorage.setItem).toHaveBeenCalled();
      });
    });

    it('reloads the page when upload is complete', async () => {
      render(
        <ThemeProvider theme={theme}>
          <MainMenu {...mockProps} />
        </ThemeProvider>,
      );

      const inputEl = screen.getByTestId('file-input');

      Object.defineProperty(inputEl, 'files', {
        value: [file],
      });
      fireEvent.change(inputEl);
      await waitFor(() => {
        expect(window.location.reload).toHaveBeenCalled();
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
        expect(localStorage.setItem).not.toHaveBeenCalled();
        expect(window.location.reload).not.toHaveBeenCalled();
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
      expect(localStorage.removeItem).toHaveBeenCalledWith('cards');
      expect(window.location.reload).toHaveBeenCalled();
    });
  });

  describe('tabs', () => {
    it('adds a new tab when add tab button is clicked', () => {
      render(
        <ThemeProvider theme={theme}>
          <MainMenu {...mockProps} />
        </ThemeProvider>,
      );

      act(() => {
        screen.getByTestId('add-tab-button').click();
      });
      expect(mockProps.setTabs).toHaveBeenCalledWith(['tab-1', 'tab-2', 'tab-3', 'tab-4']);
    });

    it('renders a button for each tab', () => {
      render(
        <ThemeProvider theme={theme}>
          <MainMenu {...mockProps} />
        </ThemeProvider>,
      );

      expect(screen.getAllByTestId('tab-button')).toHaveLength(3);
    });

    it('sets the active tab when a tab button is clicked', () => {
      render(
        <ThemeProvider theme={theme}>
          <MainMenu {...mockProps} />
        </ThemeProvider>,
      );

      act(() => {
        screen.queryAllByTestId('tab-button')[1].click();
      });
      expect(mockProps.setActiveTab).toHaveBeenCalledWith('tab-2');
    });
  });
});
