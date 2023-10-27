import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles<Theme>((theme) => ({
  verticalField: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  horizontalField: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: theme.spacing(1),
  },
  label: {
    fontWeight: 900,
    marginRight: theme.spacing(1),
  },
}));

const DisplayField: React.FC<{ label: string; value: string | undefined; isVertical?: boolean }> = ({
  label,
  value,
  isVertical = false,
}) => {
  const classes = useStyles({ isEditing: false });

  return (
    <Box className={isVertical ? classes.verticalField : classes.horizontalField}>
      <span className={classes.label}>{label}:</span>
      {value && /(http(s?)):\/\//i.test(value) ? (
        <a href={value} target="_blank">
          <span>{value}</span>
        </a>
      ) : (
        <span>{value}</span>
      )}
    </Box>
  );
};

export default DisplayField;
