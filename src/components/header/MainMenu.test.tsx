import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MainMenu from './MainMenu';
import { mockCardData } from '../../mockData';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { act } from 'react-dom/test-utils';

jest.spyOn(Storage.prototype, 'setItem');
jest.spyOn(Storage.prototype, 'removeItem');

const blob = new Blob([JSON.stringify(mockCardData)]);
const file = new File([blob], 'dmscreen.json', {
  type: 'application/JSON',
});

const fileWithWrongType = new File([blob], 'dmscreen.json', {
  type: 'image/jpeg',
});

describe('<MainMenu />', () => {
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
        <MainMenu />
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
        <MainMenu />
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
        <MainMenu />
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
        <MainMenu />
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

  it('clears localStorage when reset button is clicked and choice is verified', () => {
    render(
      <ThemeProvider theme={theme}>
        <MainMenu />
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
