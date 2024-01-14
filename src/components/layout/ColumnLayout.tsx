import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

const ColumnLayout: React.FC<{ sxOverrides?: SxProps<Theme>; children: ReactNode }> = ({
  sxOverrides = {},
  children,
}) => {
  const styles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
  };
  return <Box sx={{ ...styles, ...sxOverrides }}>{children}</Box>;
};

export default ColumnLayout;
