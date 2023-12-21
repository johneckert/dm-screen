import React from 'react';
import Box from '@mui/material/Box';
import { Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '@mui/material/styles';

const CardHeader: React.FC<{ title: string; handleEdit: () => void }> = ({ title, handleEdit }) => {
  const theme = useTheme();
  return (
    <Box
      id="card-header"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
        width: '100%',
      }}
    >
      <Typography id="card-title" variant="cardHeader" data-testid="title-view">
        {title}
      </Typography>
      <IconButton
        sx={{ width: 'fit-content', padding: theme.spacing(1), marginLeft: 'auto' }}
        aria-label="edit-save-button"
        data-testid="edit-button"
        onClick={handleEdit}
      >
        <EditIcon />
      </IconButton>
    </Box>
  );
};

export default CardHeader;
