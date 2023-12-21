import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { SxProps, Theme, useTheme } from '@mui/material/styles';

const RowLayout: React.FC<{ id?: string; sxOverrides?: SxProps<Theme>; children: ReactNode }> = ({
  id,
  sxOverrides = {},
  children,
}) => {
  const theme = useTheme();
  const styles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: theme.spacing(3),
  };
  return (
    <Box id={id} sx={{ ...styles, ...sxOverrides }}>
      {children}
    </Box>
  );
};

export default RowLayout;
