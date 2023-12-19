import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

const GroupLayout: React.FC<{ sxOverrides?: SxProps<Theme>; children: ReactNode }> = ({
  sxOverrides = {},
  children,
}) => {
  return (
    <Box
      sx={(theme) => {
        const styles: SxProps<Theme> = {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          width: '100%',
          padding: theme.spacing(3),
        };
        return { ...styles, ...sxOverrides };
      }}
    >
      {children}
    </Box>
  );
};

export default GroupLayout;
