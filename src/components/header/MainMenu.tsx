import React, { useRef, useState } from 'react';
import { Typography, List, ListItem, Divider } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { WHITE, GREY } from '../../colors';
import { styled } from '@mui/material/styles';
import { validateFileType } from '../../utils';
import VerificationDialog from '../modals/VerificationDialog';
import { DialogTypes, CardData } from '../../interfaces';
import { DIALOG_MESSAGES, DEFAULT_TAB } from '../../constants';
import useCardStorage from '../../hooks/useCardStorage';
import { mapCards } from '../../utils';

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
    width: '100%',
    paddingX: theme.spacing(4),
    paddingY: theme.spacing(1),
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.light,
    },
  },
  tab: {
    justifyContent: 'space-between',
  },
  destructive: {
    color: theme.palette.error.light,
  },
  isActive: {
    fontWeight: 'bold',
  },
  notActive: {
    color: GREY[500],
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

interface MainMenuProps {
  tabs: string[];
  setTabs: (tabs: string[]) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setShowNewCardModal: (showNewCardModal: boolean) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ tabs, setTabs, activeTab, setActiveTab, setShowNewCardModal }) => {
  const classes = useStyles();
  const fileUploadRef = useRef<null | HTMLInputElement>(null);
  const [dialogType, setDialogType] = useState<DialogTypes | null>(null);
  const passClickToInput = () => {
    fileUploadRef.current?.click();
  };
  const [cards, setCards] = useCardStorage();

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
        const cards = JSON.parse(JSON.parse(event.target?.result as string)) as CardData[];
        const tabs = cards.map((card: CardData) => card.tab) ?? [DEFAULT_TAB];
        setTabs([...new Set(tabs)]);
        setCards(mapCards(cards));
        setActiveTab(tabs[0]);
      } else {
        setDialogType(DialogTypes.FileType);
      }
    };
    reader.readAsText(file as Blob);
  };

  const handleCancel = () => {
    setDialogType(null);
  };

  const handleConfirm = () => {
    if (dialogType === DialogTypes.Upload) {
      passClickToInput();
    } else if (dialogType === DialogTypes.Reset) {
      setCards(mapCards([]));
      setActiveTab(activeTab);
    }
    setDialogType(null);
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
        <ListItem onClick={() => setDialogType(DialogTypes.Upload)} className={classes.menuOption}>
          <VisuallyHiddenInput ref={fileUploadRef} type="file" onChange={uploadCards} data-testid="file-input" />
          <CloudUploadIcon sx={{ pr: 1, width: 40 }} />
          <Typography variant="body2">Upload file</Typography>
        </ListItem>
        <ListItem
          onClick={() => setDialogType(DialogTypes.Reset)}
          className={`${classes.menuOption} ${classes.destructive}`}
          data-testid="reset-button"
        >
          <DeleteIcon sx={{ pr: 1, width: 40 }} />
          <Typography variant="body2">Reset cards</Typography>
        </ListItem>
      </List>
      <Divider />
      <Typography variant="h6" component="div" className={classes.menuSectionHeader}>
        New Card
      </Typography>
      <List className={classes.menuList}>
        <ListItem
          onClick={() => setShowNewCardModal(true)}
          className={classes.menuOption}
          data-testid="new-card-button"
        >
          <AddBoxIcon sx={{ pr: 1, width: 40 }} />
          <Typography variant="body2">New Card</Typography>
        </ListItem>
      </List>
      {dialogType && (
        <VerificationDialog
          dialogOpen={!!dialogType}
          dialogMessage={dialogType ? DIALOG_MESSAGES[dialogType] : ''}
          handleCancel={handleCancel}
          handleConfirm={handleConfirm}
          confirmOnly={dialogType === DialogTypes.FileType}
        />
      )}
    </>
  );
};

export default MainMenu;
