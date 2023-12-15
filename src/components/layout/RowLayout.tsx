import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

const RowLayout: React.FC<{ id?: string; sxOverrides?: SxProps<Theme>; children: ReactNode }> = ({
  id,
  sxOverrides = {},
  children,
}) => {
  return (
    <Box
      id={id}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        ...sxOverrides,
      }}
    >
      {children}
    </Box>
  );
};

export default RowLayout;
