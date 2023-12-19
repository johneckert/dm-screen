import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

const CardBodyLayout: React.FC<{ sxOverrides?: SxProps<Theme>; children: ReactNode }> = ({
  sxOverrides = {},
  children,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        ...sxOverrides,
      }}
    >
      {children}
    </Box>
  );
};

export default CardBodyLayout;
