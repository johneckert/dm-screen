import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { CardType } from '../../../interfaces';

const useStyles = makeStyles<Theme>((theme) => ({
  modalTitle: {
    margin: theme.spacing(4),
    paddingX: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
  },
  editButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: theme.spacing(1),
    marginLeft: 'auto',
  },
}));

const CardHeader: React.FC<{ title: string; handleEdit: () => void; cardType?: CardType | null }> = ({
  title,
  handleEdit,
  cardType,
}) => {
  const classes = useStyles({ isEditing: false });

  return (
    <>
      <Typography id="title-label" variant="h6" component="h6" data-testid="type-view">
        {(cardType && cardType === CardType.Monster) || (cardType && cardType === CardType.Player)
          ? 'Name: '
          : 'Title: '}
      </Typography>
      <Typography id="card-title" className={classes.modalTitle} variant="h6" component="h6" data-testid="title-view">
        {title}
      </Typography>
      <IconButton
        className={classes.editButton}
        aria-label="edit-save-button"
        data-testid="edit-button"
        onClick={handleEdit}
      >
        <EditIcon />
      </IconButton>
    </>
  );
};

export default CardHeader;
