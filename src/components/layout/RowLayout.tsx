import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material';

const RowLayout: React.FC<{ id?: string; sxOverrides?: SxProps<Theme>; children: ReactNode }> = ({
  id,
  sxOverrides = {},
  children,
}) => {
  const styles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  };
  return (
    <Box id={id} sx={{ ...styles, ...sxOverrides }}>
      {children}
    </Box>
  );
};

export default RowLayout;
