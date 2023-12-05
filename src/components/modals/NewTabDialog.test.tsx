import { render, screen, fireEvent } from '@testing-library/react';
import NewTabDialog from './NewTabDialog';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

const createNewTab = jest.fn();
const setShowTabDialog = jest.fn();
const showTabDialog = true;
const tabs = ['test1', 'test2'];

describe('<NewTabDialog />', () => {
  it('renders the correct text', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewTabDialog
          showNewTabDialog={showTabDialog}
          setshowNewTabDialog={setShowTabDialog}
          createNewTab={createNewTab}
          tabs={tabs}
        />
      </ThemeProvider>,
    );
    expect(screen.getByText(/Create New Tab/i)).toBeInTheDocument();
  });

  it('does not allow the user to create a tab if the name field is empty', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewTabDialog
          showNewTabDialog={showTabDialog}
          setshowNewTabDialog={setShowTabDialog}
          createNewTab={createNewTab}
          tabs={tabs}
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('create-tab-btn')).toBeDisabled();
  });

  it('does not allow the user to create a tab with a duplicate name', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewTabDialog
          showNewTabDialog={showTabDialog}
          setshowNewTabDialog={setShowTabDialog}
          createNewTab={createNewTab}
          tabs={tabs}
        />
      </ThemeProvider>,
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test1' } });
    expect(screen.getByTestId('create-tab-btn')).toBeDisabled();
  });

  it('allows the user to create a tab with a unique name', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewTabDialog
          showNewTabDialog={showTabDialog}
          setshowNewTabDialog={setShowTabDialog}
          createNewTab={createNewTab}
          tabs={tabs}
        />
      </ThemeProvider>,
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test3' } });

    const button = screen.getByTestId('create-tab-btn');
    expect(button).toBeEnabled();

    fireEvent.click(button);
    expect(createNewTab).toHaveBeenCalledWith('test3');
  });

  it('closes the dialog when the cancel button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewTabDialog
          showNewTabDialog={showTabDialog}
          setshowNewTabDialog={setShowTabDialog}
          createNewTab={createNewTab}
          tabs={tabs}
        />
      </ThemeProvider>,
    );
    const button = screen.getByText(/cancel/i);
    fireEvent.click(button);
    expect(setShowTabDialog).toHaveBeenCalledWith(false);
  });
});
