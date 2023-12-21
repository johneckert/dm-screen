import React from 'react';
import Box from '@mui/material/Box';

const DisplayField: React.FC<{ label: string; value: string | undefined; variant?: string; isVertical?: boolean }> = ({
  label,
  value,
  variant,
  isVertical = false,
}) => {
  return (
    <Box
      sx={(theme) => {
        return isVertical
          ? {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: theme.spacing(3),
              width: theme.spacing(12),
              height: theme.spacing(12),
            }
          : {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: theme.spacing(1),
            };
      }}
    >
      <Box
        component="span"
        sx={(theme) => {
          return {
            fontWeight: 900,
            marginRight: theme.spacing(1),
          };
        }}
      >
        {label}:
      </Box>
      {value && /(http(s?)):\/\//i.test(value) ? (
        <a href={value} target="_blank">
          <Box component="span">{value}</Box>
        </a>
      ) : (
        <Box component="span">{value}</Box>
      )}
    </Box>
  );
};

export default DisplayField;
