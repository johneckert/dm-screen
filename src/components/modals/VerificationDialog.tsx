import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import { Theme } from '@mui/material/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles<Theme>((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: theme.spacing(1.5),
    boxShadow: '24px',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '30%',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingBottom: theme.spacing(4),
  },
  buttonArea: {
    width: '100%',
    display: 'flex',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: theme.spacing(15),
    marginLeft: 'auto',
    '& svg': {
      marginLeft: theme.spacing(1),
    },
  },
}));

interface VerificationDialogProps {
  dialogMessage: string;
  handleCancel: () => void;
  handleConfirm: () => void;
  dialogOpen: boolean;
}

const VerificationDialog: React.FC<VerificationDialogProps> = ({
  dialogMessage,
  handleCancel,
  handleConfirm,
  dialogOpen,
}) => {
  const classes = useStyles();
  return (
    <Modal
      open={dialogOpen}
      onClose={handleCancel}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      data-testid="expanded-card"
    >
      <Box className={classes.modal}>
        <Box className={classes.body}>
          <Typography variant="h6">{dialogMessage}</Typography>
        </Box>
        <Box className={classes.buttonArea}>
          <Button
            variant="outlined"
            className={classes.modalButton}
            aria-label="cancel-button"
            onClick={handleCancel}
            data-testid="cancel-button"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            className={classes.modalButton}
            aria-label="edit-confirm-button"
            onClick={handleConfirm}
            data-testid="confirm-button"
          >
            Confirm
            <CheckIcon />
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default VerificationDialog;
