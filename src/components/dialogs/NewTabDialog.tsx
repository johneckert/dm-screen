import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField } from '@mui/material';

interface NewTabDialogProps {
  showNewTabDialog: boolean;
  setshowNewTabDialog: (show: boolean) => void;
  createNewTab: (name: string) => void;
  tabs: string[];
}

const NewTabDialog: React.FC<NewTabDialogProps> = ({ showNewTabDialog, setshowNewTabDialog, createNewTab, tabs }) => {
  const [name, setName] = useState<string>('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleClose = () => {
    setName('');
    setshowNewTabDialog(false);
  };
  const handleCreate = () => {
    createNewTab(name);
    handleClose();
  };

  return (
    <Dialog open={showNewTabDialog} onClose={handleClose}>
      <DialogTitle>Create New Tab</DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter a name for your new tab.</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="tab-name"
          label="Tab Name"
          fullWidth
          variant="standard"
          onChange={handleInputChange}
          value={name}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button disabled={tabs.includes(name) || name === ''} data-testid="create-tab-btn" onClick={handleCreate}>
          Create Tab
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewTabDialog;
