import React from 'react';
import { Divider, Menu, MenuItem, MenuList, ListItemText, ListItemIcon } from '@mui/material';
import { Check } from '@mui/icons-material';
import useTabStorage from '../../hooks/useTabStorage';
import useActiveTabStorage from '../../hooks/useActiveTabStorage';
import { ContextMenuAction } from '../../interfaces';
import { toUpper } from 'lodash';

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
  const [activeTab, __] = useActiveTabStorage();
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
        <MenuItem>Move</MenuItem>
        {tabs.map((tab) => (
          <MenuItem onClick={() => handleContextClick(ContextMenuAction.Move, tab)}>
            {tab === activeTab ? (
              <ListItemIcon>
                <Check />
              </ListItemIcon>
            ) : (
              <ListItemIcon></ListItemIcon>
            )}
            <ListItemText sx={{ pl: 2 }}>{toUpper(tab)}</ListItemText>
          </MenuItem>
        ))}
        <Divider />
        <MenuItem onClick={() => handleContextClick(ContextMenuAction.Delete)}>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SmallCardContextMenu;
