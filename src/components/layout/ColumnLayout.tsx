import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { SxProps, Theme, useTheme } from '@mui/material/styles';

const ColumnLayout: React.FC<{ sxOverrides?: SxProps<Theme>; children: ReactNode }> = ({
  sxOverrides = {},
  children,
}) => {
  const theme = useTheme();
  const styles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    padding: theme.spacing(3),
  };
  return <Box sx={{ ...styles, ...sxOverrides }}>{children}</Box>;
};

export default ColumnLayout;
