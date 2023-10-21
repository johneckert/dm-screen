import React, { useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Theme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import { GenericCardContent, CardData, CardType } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import MapCardform from './newCardForms/MapCardForm';
import NoteCardForm from './newCardForms/NoteCardForm';
import RuleCardForm from './newCardForms/RuleCardForm';
import { DEFAULT_TAB } from '../../constants';

const useStyles = makeStyles<Theme>((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '80%',
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: theme.spacing(1.5),
    boxShadow: '24px',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    overflowY: 'scroll',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    overflowY: 'scroll',
    fontSize: theme.spacing(6),
    fontWeight: 400,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  modalTitle: {
    margin: theme.spacing(4),
    paddingX: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
  },
  cancelButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: theme.spacing(1),
    marginLeft: 'auto',
  },
  saveButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: theme.spacing(1),
    marginLeft: 'auto',
    '& svg': {
      marginRight: theme.spacing(1),
    },
  },
}));

const NewCardModal: React.FC<{
  isVisible: boolean;
  closeNewCardModal: () => void;
  createCard: (cardData: CardData) => void;
}> = ({ isVisible, createCard, closeNewCardModal }) => {
  const classes = useStyles();
  const id = uuidv4();
  const activeTab = useReadLocalStorage<string>('activeTab') ?? DEFAULT_TAB;
  const tabs = useReadLocalStorage<string[]>('tabs') ?? [DEFAULT_TAB];
  const [title, setTitle] = useState('');
  const [content, setContent] = useState({} as GenericCardContent);
  const [cardType, setCardType] = useState<CardType>(CardType.Note);
  const [cardTab, setCardTab] = useState<string>(activeTab);
  const [cardColumn, setCardColumn] = useState<string>('droppable-1');

  const columnDisplayName = (column: string) => {
    switch (column) {
      case 'droppable-1':
        return 'Column 1';
      case 'droppable-2':
        return 'Column 2';
      case 'droppable-3':
        return 'Column 3';
      case 'droppable-4':
        return 'Column 4';
      default:
        return 'Column 1';
    }
  };

  const handleSave = () => {
    createCard({ id, title, content, type: cardType, column: cardColumn, tab: cardTab });
    setTitle('');
    setContent({} as GenericCardContent);
  };

  const handleCancel = () => {
    setTitle('');
    setContent({} as GenericCardContent);
    closeNewCardModal();
  };

  const renderForm = () => {
    switch (cardType) {
      case CardType.Map:
        return (
          <MapCardform
            title={title}
            content={content}
            setTitle={setTitle}
            setContent={setContent}
            data-testid="map-form"
          />
        );
      case CardType.Note:
        return (
          <NoteCardForm
            title={title}
            content={content}
            setTitle={setTitle}
            setContent={setContent}
            data-testid="note-form"
          />
        );
      case CardType.Rule:
        return <RuleCardForm title={title} setTitle={setTitle} setContent={setContent} data-testid="rule-form" />;
      default:
        return <div>default</div>;
    }
  };

  return (
    <Modal
      open={!!isVisible}
      onClose={handleCancel}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      data-testid="expanded-card"
    >
      <Box className={classes.modal}>
        <Typography
          id="modal-title"
          sx={{ alignSelf: 'center' }}
          className={classes.modalTitle}
          variant="h3"
          component="h3"
        >
          Create Card
        </Typography>
        <Box className={classes.content}>
          <Box className={classes.form}>
            <InputLabel id="card-type-select-label">Type</InputLabel>
            <Select
              labelId="card-type-select-label"
              sx={{ marginBottom: 2 }}
              id="card-type-select"
              value={cardType}
              label="Type"
              data-testid="card-type-select"
              onChange={(e) => setCardType(e.target.value as CardType)}
            >
              {Object.values(CardType).map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
            <Select
              labelId="card-tab-select-label"
              sx={{ marginBottom: 2 }}
              id="card-tab-select"
              value={cardTab}
              label="Tab"
              data-testid="card-tab-select"
              onChange={(e) => setCardTab(e.target.value)}
            >
              {tabs.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
            <Select
              labelId="card-column-select-label"
              sx={{ marginBottom: 2 }}
              id="card-column-select"
              value={cardColumn}
              label="Column"
              data-testid="card-column-select"
              onChange={(e) => setCardColumn(e.target.value)}
            >
              {['droppable-1', 'droppable-2', 'droppable-3', 'droppable-4'].map((value) => (
                <MenuItem key={value} value={value}>
                  {columnDisplayName(value)}
                </MenuItem>
              ))}
            </Select>
            {renderForm()}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <Button
              variant="outlined"
              className={classes.cancelButton}
              aria-label="cancel-button"
              data-testid="cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              className={classes.saveButton}
              aria-label="save-button"
              data-testid="save-button"
              onClick={handleSave}
            >
              <CheckIcon />
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewCardModal;
