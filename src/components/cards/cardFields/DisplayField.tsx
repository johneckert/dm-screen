import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const DisplayField: React.FC<{ label: string; value: string | undefined; isVertical?: boolean }> = ({
  label,
  value,
  isVertical = false,
}) => {
  const theme = useTheme();
  const isUrl = value && /(http(s?)):\/\//i.test(value);
  const verticalStyles = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    width: theme.spacing(12),
    height: theme.spacing(12),
  };
  const horizontalStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: theme.spacing(1),
  };
  return (
    <Box sx={isVertical ? verticalStyles : horizontalStyles}>
      <Typography variant="fieldLabel" sx={{ marginRight: theme.spacing(1) }}>
        {label}:
      </Typography>
      {isUrl ? (
        <a href={value} target="_blank">
          <Typography variant="fieldValue">{value}</Typography>
        </a>
      ) : (
        <Typography variant="fieldValue">{value}</Typography>
      )}
    </Box>
  );
};

export default DisplayField;
