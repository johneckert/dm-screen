import React from 'react';
import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import RowLayout from './RowLayout';

const ButtonArea: React.FC<{ isEdit?: boolean; handleLeftButton: () => void; handleRightButton: () => void }> = ({
  isEdit,
  handleLeftButton,
  handleRightButton,
}) => {
  return (
    <RowLayout id="card-actions" sxOverrides={(theme) => ({ padding: theme.spacing(2) })}>
      <Button
        variant="outlined"
        sx={(theme) => {
          return {
            justifyContent: 'center',
            width: theme.spacing(15),
            '& svg': {
              marginLeft: theme.spacing(1),
            },
          };
        }}
        aria-label={isEdit ? 'delete-button' : 'cancel-button'}
        onClick={handleLeftButton}
        data-testid="left-button"
      >
        {isEdit ? 'Delete' : 'Cancel'}
        {isEdit && <DeleteIcon />}
      </Button>
      <Button
        variant="contained"
        sx={(theme) => {
          return {
            alignSelf: 'center',
            justifyContent: 'center',
            width: theme.spacing(15),
            marginLeft: 'auto',
            '& svg': {
              marginLeft: theme.spacing(1),
            },
          };
        }}
        aria-label="edit-save-button"
        onClick={handleRightButton}
        data-testid="right-button"
      >
        Save
        <CheckIcon />
      </Button>
    </RowLayout>
  );
};

export default ButtonArea;
