import React from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

interface VerificationDialogProps {
  dialogMessage: string;
  handleCancel: () => void;
  handleConfirm: () => void;
  dialogOpen: boolean;
  confirmOnly?: boolean;
}

const VerificationDialog: React.FC<VerificationDialogProps> = ({
  dialogMessage,
  handleCancel,
  handleConfirm,
  dialogOpen,
  confirmOnly = false,
}) => {
  return (
    <Modal
      open={dialogOpen}
      onClose={handleCancel}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      data-testid="expanded-card"
    >
      <Box
        sx={(theme) => {
          return {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: theme.palette.background.paper,
            border: 'none',
            borderRadius: theme.spacing(1.5),
            boxShadow: '24px',
            padding: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '30%',
          };
        }}
      >
        <Box
          sx={(theme) => {
            return {
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              paddingBottom: theme.spacing(4),
            };
          }}
        >
          <Typography variant="h6">{dialogMessage}</Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignSelf: 'flex-end',
            justifyContent: () => (confirmOnly ? 'center' : 'space-between'),
            alignItems: 'center',
          }}
        >
          {!confirmOnly && (
            <Button
              variant="outlined"
              aria-label="cancel-button"
              onClick={handleCancel}
              data-testid="cancel-button"
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
            >
              Cancel
            </Button>
          )}
          <Button
            variant="contained"
            aria-label="edit-confirm-button"
            onClick={handleConfirm}
            data-testid="confirm-button"
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
