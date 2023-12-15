import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

const RowLayout: React.FC<{ sxOverrides?: SxProps<Theme>; children: ReactNode }> = ({ sxOverrides = {}, children }) => {
  return (
    <Box
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
