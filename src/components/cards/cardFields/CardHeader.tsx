import React from 'react';
import RowLayout from '../../layout/RowLayout';
import { Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const CardHeader: React.FC<{ title: string; handleEdit: () => void }> = ({ title, handleEdit }) => {
  return (
    <RowLayout id="card-header" sxOverrides={{ padding: 0 }}>
      <Typography id="card-title" variant="cardHeader" data-testid="title-view">
        {title}
      </Typography>
      <IconButton
        sx={{ width: 'fit-content', marginLeft: 'auto' }}
        aria-label="edit-save-button"
        data-testid="edit-button"
        onClick={handleEdit}
      >
        <EditIcon />
      </IconButton>
    </RowLayout>
  );
};

export default CardHeader;
