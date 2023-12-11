import React from 'react';
import { Divider, Menu, MenuItem, MenuList, ListItemText, ListItemIcon } from '@mui/material';
import { Check, Delete, Launch } from '@mui/icons-material';
import useTabStorage from '../../hooks/useTabStorage';
import useActiveTabStorage from '../../hooks/useActiveTabStorage';
import { ContextMenuAction } from '../../interfaces';
import { toUpper } from 'lodash';

interface SmallCardContextMenuProps {
  handleContextMenuClose: () => void;
  handleContextClick: (action: ContextMenuAction, tab?: string) => void;
  menuPosition: { top: number; left: number };
}

const SmallCardContextMenu: React.FC<SmallCardContextMenuProps> = ({
  handleContextMenuClose,
  handleContextClick,
  menuPosition,
}) => {
  const { top, left } = menuPosition;
  const [tabs, _] = useTabStorage();
  const [activeTab, __] = useActiveTabStorage();

  return (
    <Menu
      open={true}
      onClose={handleContextMenuClose}
      anchorReference="anchorPosition"
      anchorPosition={{ top, left }}
      data-testid="small-card-context-menu"
    >
      <MenuList sx={{ minWidth: 200 }}>
        <MenuItem key="open" onClick={() => handleContextClick(ContextMenuAction.Open)}>
          <ListItemIcon>
            <Launch />
          </ListItemIcon>
          <ListItemText>Open</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>Move</MenuItem>
        {tabs.map((tab) => (
          <MenuItem key={tab} onClick={() => handleContextClick(ContextMenuAction.Move, tab)} data-testid="tab-item">
            {tab === activeTab ? (
              <ListItemIcon>
                <Check />
              </ListItemIcon>
            ) : (
              <ListItemIcon></ListItemIcon>
            )}
            <ListItemText>{toUpper(tab)}</ListItemText>
          </MenuItem>
        ))}
        <Divider />
        <MenuItem key="delete" onClick={() => handleContextClick(ContextMenuAction.Delete)}>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SmallCardContextMenu;
