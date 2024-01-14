import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import SmallCardLayout from './SmallCardLayout';
import { CardType } from '../../interfaces';

const mockCardData = { id: 'ABC-123', content: { title: 'Pikachu', content: 'I am Pikachu' } };
const mockHandleContextMenuOpen = jest.fn();

jest.mock('react-markdown', () => (props: { children: string }) => <div>{props.children}</div>);

describe('<SmallCardLayout />', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <SmallCardLayout
          id={mockCardData.id}
          content={mockCardData.content}
          type={CardType.Note}
          handleContextMenuOpen={mockHandleContextMenuOpen}
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('basic-card')).toBeInTheDocument();
  });

  it('renders an avatar', () => {
    render(
      <ThemeProvider theme={theme}>
        <SmallCardLayout
          id={mockCardData.id}
          content={mockCardData.content}
          type={CardType.Note}
          handleContextMenuOpen={mockHandleContextMenuOpen}
        />
      </ThemeProvider>,
    );
    expect(screen.getByLabelText('avatar')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(
      <ThemeProvider theme={theme}>
        <SmallCardLayout
          id={mockCardData.id}
          content={mockCardData.content}
          type={CardType.Note}
          handleContextMenuOpen={mockHandleContextMenuOpen}
        />
      </ThemeProvider>,
    );
    expect(screen.getByText(mockCardData.content.title)).toBeInTheDocument();
  });

  it('opens a custom menu when right clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <SmallCardLayout
          id={mockCardData.id}
          content={mockCardData.content}
          type={CardType.Note}
          handleContextMenuOpen={mockHandleContextMenuOpen}
        />
      </ThemeProvider>,
    );
    const card = screen.getByTestId('basic-card');
    card.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true }));
    expect(mockHandleContextMenuOpen).toHaveBeenCalledWith(expect.anything(), mockCardData.id);
  });
});
