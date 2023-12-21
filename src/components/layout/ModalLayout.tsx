import React, { ReactNode } from 'react';
import { Modal, Box } from '@mui/material';

const ModalLayout: React.FC<{ isVisible: boolean; close: () => void; children: ReactNode }> = ({
  isVisible,
  close,
  children,
}) => {
  return (
    <Modal open={!!isVisible} onClose={close} data-testid="expanded-card">
      <Box
        sx={(theme) => {
          return {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '80%',
            backgroundColor: theme.palette.background.paper,
            border: 'none',
            borderRadius: theme.spacing(1.5),
            boxShadow: '24px',
            padding: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
          };
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default ModalLayout;
