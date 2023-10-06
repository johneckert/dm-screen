import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MainMenu from './MainMenu';
import { mockCardData } from '../../mockData';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { act } from 'react-dom/test-utils';

jest.spyOn(Storage.prototype, 'setItem');

const blob = new Blob([JSON.stringify(mockCardData)]);
const file = new File([blob], 'dmscreen.json', {
  type: 'application/JSON',
});

describe('<MainMenu />', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: jest.fn() },
    });
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

  it('uploads file and saves to localStorage', () => {
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
    waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });

  it('reloads the page when upload is complete', () => {
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
    waitFor(() => {
      expect(window.location.reload).toHaveBeenCalled();
    });
  });
});
