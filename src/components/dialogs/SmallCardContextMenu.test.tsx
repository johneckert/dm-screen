import { render, screen, fireEvent } from '@testing-library/react';
import SmallCardContextMenu from './SmallCardContextMenu';
import { ContextMenuAction } from '../../interfaces';
import { DEFAULT_TABS } from '../../constants';

const mockHandleContextMenuClose = jest.fn();
const mockHandleContextClick = jest.fn();
const mockMenuPosition = { top: 0, left: 0 };

describe('<SmallCardContextMenu />', () => {
  it('renders', () => {
    render(
      <SmallCardContextMenu
        handleContextMenuClose={mockHandleContextMenuClose}
        handleContextClick={mockHandleContextClick}
        menuPosition={mockMenuPosition}
      />,
    );
    expect(screen.getByTestId('small-card-context-menu')).toBeInTheDocument();
  });

  it('renders the correct number of tab menu items', () => {
    render(
      <SmallCardContextMenu
        handleContextMenuClose={mockHandleContextMenuClose}
        handleContextClick={mockHandleContextClick}
        menuPosition={mockMenuPosition}
      />,
    );
    expect(screen.getAllByTestId('tab-item')).toHaveLength(DEFAULT_TABS.length);
  });

  it('calls handleContextClick with Open when clicking the Open menu item', () => {
    render(
      <SmallCardContextMenu
        handleContextMenuClose={mockHandleContextMenuClose}
        handleContextClick={mockHandleContextClick}
        menuPosition={mockMenuPosition}
      />,
    );
    fireEvent.click(screen.getByText('Open'));
    expect(mockHandleContextClick).toHaveBeenCalledWith(ContextMenuAction.Open);
  });

  it('calls handleContextClick with Move and the tab name when clicking a tab menu item', () => {
    render(
      <SmallCardContextMenu
        handleContextMenuClose={mockHandleContextMenuClose}
        handleContextClick={mockHandleContextClick}
        menuPosition={mockMenuPosition}
      />,
    );
    fireEvent.click(screen.getAllByTestId('tab-item')[0]);
    expect(mockHandleContextClick).toHaveBeenCalledWith(ContextMenuAction.Move, DEFAULT_TABS[0]);
  });

  it('calls handleContextClick with Delete when clicking the Delete menu item', () => {
    render(
      <SmallCardContextMenu
        handleContextMenuClose={mockHandleContextMenuClose}
        handleContextClick={mockHandleContextClick}
        menuPosition={mockMenuPosition}
      />,
    );
    fireEvent.click(screen.getByText('Delete'));
    expect(mockHandleContextClick).toHaveBeenCalledWith(ContextMenuAction.Delete);
  });
});
