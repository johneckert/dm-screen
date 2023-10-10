import React, { useRef } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { WHITE, RED } from '../../colors';
import { styled } from '@mui/material/styles';
import { validateFileType } from '../../utils';

const useStyles = makeStyles<Theme>((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    '& svg': {
      fill: WHITE,
    },
  },
  menuList: {
    width: 300,
    '&:first-child': {
      marginTop: theme.spacing(6),
    },
  },
  menuSectionHeader: {
    padding: theme.spacing(2),
    alignSelf: 'center',
  },
  menuOption: {
    display: 'flex',
    flexDirection: 'row',
    paddingX: theme.spacing(4),
    paddingY: theme.spacing(1),
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.light,
    },
    '&:first-child': {
      paddingRight: theme.spacing(4),
    },
  },
  destructive: {
    color: theme.palette.error.light,
  },
}));

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const MainMenu = () => {
  const classes = useStyles();
  const fileUploadRef = useRef<null | HTMLInputElement>(null);
  const passClickToInput = () => {
    fileUploadRef.current?.click();
  };

  const downloadCards = () => {
    const saveData = localStorage.getItem('cards');
    const json = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(saveData))}`;
    const link = document.createElement('a');
    link.setAttribute('href', json);
    link.setAttribute('download', 'dmscreen.json');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const uploadCards = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (file && validateFileType(file)) {
        const cards = JSON.parse(event.target?.result as string);
        localStorage.setItem('cards', cards);
        window.location.reload();
      } else {
        console.log('Invalid file type!');
      }
    };
    reader.readAsText(file as Blob);
  };

  const resetCards = () => {
    localStorage.removeItem('cards');
    window.location.reload();
  };

  return (
    <>
      <Typography variant="h6" component="div" className={classes.menuSectionHeader}>
        Menu
      </Typography>
      <List className={classes.menuList}>
        <ListItem onClick={downloadCards} className={classes.menuOption} data-testid="download-button">
          <SaveAltIcon sx={{ pr: 1, width: 40 }} />
          <Typography variant="body2">Download file</Typography>
        </ListItem>
        <ListItem onClick={passClickToInput} className={classes.menuOption}>
          <VisuallyHiddenInput ref={fileUploadRef} type="file" onChange={uploadCards} data-testid="file-input" />
          <CloudUploadIcon sx={{ pr: 1, width: 40 }} />
          <Typography variant="body2">Upload file</Typography>
        </ListItem>
        <ListItem
          onClick={resetCards}
          className={`${classes.menuOption} ${classes.destructive}`}
          data-testid="reset-button"
        >
          <DeleteIcon sx={{ pr: 1, width: 40 }} />
          <Typography variant="body2">Reset cards</Typography>
        </ListItem>
      </List>
      <Divider />
    </>
  );
};

export default MainMenu;
