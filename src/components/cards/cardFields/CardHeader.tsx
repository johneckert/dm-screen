import React from 'react';
import Box from '@mui/material/Box';
import { Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { CardType } from '../../../interfaces';

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  modalTitle: {
    margin: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
  },
  editButton: {
    width: 'fit-content',
    padding: theme.spacing(1),
  },
}));

const CardHeader: React.FC<{ title: string; handleEdit: () => void; cardType?: CardType | null }> = ({
  title,
  handleEdit,
  cardType,
}) => {
  const classes = useStyles({ isEditing: false });

  return (
    <Box id="card-header" className={classes.container}>
      <Typography id="title-label" variant="h6" component="h6" data-testid="type-view">
        {(cardType && cardType === CardType.Monster) || (cardType && cardType === CardType.Player)
          ? 'Name: '
          : 'Title: '}
      </Typography>
      <Typography
        id="card-title"
        className={classes.modalTitle}
        sx={{ paddingTop: 0 }}
        variant="h6"
        component="h6"
        data-testid="title-view"
      >
        {title}
      </Typography>
      <IconButton
        sx={{ marginLeft: 'auto' }}
        className={classes.editButton}
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
