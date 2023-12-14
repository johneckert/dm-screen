import React from 'react';
import Box from '@mui/material/Box';
import { Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { CardType } from '../../../interfaces';

const CardHeader: React.FC<{ title: string; handleEdit: () => void; cardType?: CardType | null }> = ({
  title,
  handleEdit,
  cardType,
}) => {
  return (
    <Box
      id="card-header"
      sx={(theme) => {
        return {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'left',
          marginBottom: theme.spacing(2),
          width: '100%',
        };
      }}
    >
      <Typography id="title-label" variant="h6" component="h6" data-testid="type-view">
        {(cardType && cardType === CardType.Monster) || (cardType && cardType === CardType.Player)
          ? 'Name: '
          : 'Title: '}
      </Typography>
      <Typography
        id="card-title"
        sx={(theme) => {
          return {
            margin: theme.spacing(4),
            paddingLeft: theme.spacing(2),
            paddingTop: theme.spacing(0),
          };
        }}
        variant="h6"
        component="h6"
        data-testid="title-view"
      >
        {title}
      </Typography>
      <IconButton
        sx={(theme) => {
          return {
            width: 'fit-content',
            padding: theme.spacing(1),
            marginLeft: 'auto',
          };
        }}
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
