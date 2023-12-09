import React from 'react';
import { Divider, Menu, MenuItem, MenuList, ListItemText } from '@mui/material';
import useTabStorage from '../../../hooks/useTabStorage';
import { ContextMenuAction } from '../../../interfaces';

interface SmallCardContextMenuProps {
  cardId: string;
  handleContextMenuClose: () => void;
  handleContextClick: (action: ContextMenuAction, tab?: string) => void;
  menuPosition: { top: number; left: number };
}

const SmallCardContextMenu: React.FC<SmallCardContextMenuProps> = ({
  cardId,
  handleContextMenuClose,
  handleContextClick,
  menuPosition,
}) => {
  const { top, left } = menuPosition;
  const [tabs, _] = useTabStorage();
  console.log(cardId);
  return (
    <Menu
      open={true}
      onClose={handleContextMenuClose}
      anchorReference="anchorPosition"
      anchorPosition={{ top, left }}
      data-testid="custom-menu"
    >
      <MenuList sx={{ minWidth: 200 }}>
        <MenuItem onClick={() => handleContextClick(ContextMenuAction.Open)}>Open</MenuItem>
        <Divider />
        <MenuItem>Move Tab</MenuItem>
        {tabs.map((tab) => (
          <MenuItem onClick={() => handleContextClick(ContextMenuAction.Move, tab)}>
            <ListItemText sx={{ pl: 2 }}>{tab}</ListItemText>
          </MenuItem>
        ))}
        <Divider />
        <MenuItem onClick={() => handleContextClick(ContextMenuAction.Delete)}>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SmallCardContextMenu;
