import React, { useState } from 'react';
import { CardData, CardType, MapCardContent } from '../../interfaces';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import { Theme } from '@mui/material/styles';
import ExpandedCardLayout from './ExpandedCardLayout';
import { Avatar } from '@mui/material';
import { avatarColor } from '../../utils';
import MenuItem from '@mui/material/MenuItem';
import { DEFAULT_TAB } from '../../constants';
import { useReadLocalStorage } from 'usehooks-ts';
import BlockField from './cardFields/BlockField';
import CardHeader from './cardFields/CardHeader';
import MapCardForm from './newCardForms/MapCardForm';

const useStyles = makeStyles<Theme>((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
  },
  editView: {
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
}));

interface ExpandedMapCardProps {
  closeExpandedCard: () => void;
  expandedCardData: CardData;
  updateCard: (cardData: CardData) => void;
  deleteCard: (cardData: CardData) => void;
}

const ExpandedMapCard: React.FC<ExpandedMapCardProps> = ({
  closeExpandedCard,
  expandedCardData,
  updateCard,
  deleteCard,
}) => {
  const cardContent = expandedCardData.content as MapCardContent;
  const [isEditing, setIsEditing] = useState(false);
  const tabs = useReadLocalStorage<string[]>('tabs') ?? [DEFAULT_TAB];
  const [title, setTitle] = useState(expandedCardData.title);
  const [notes, setNotes] = useState(cardContent.content);
  const [roomNumber, setRoomNumber] = useState(cardContent.roomNumber);
  const [description, setDescription] = useState(cardContent.description);
  const [cardTab, setCardTab] = useState(expandedCardData.tab);
  const classes = useStyles();
  const formContent = {
    roomNumber,
    description,
    content: notes,
  };
  const handleContentUpdate = (content: MapCardContent) => {
    setNotes(content.content);
    setRoomNumber(content.roomNumber);
    setDescription(content.description);
  };
  const handleEdit = () => {
    if (isEditing) {
      updateCard({ ...expandedCardData, title: title, content: { ...formContent }, tab: cardTab });
    }
    setIsEditing(!isEditing);
  };

  return (
    <ExpandedCardLayout
      cardData={expandedCardData}
      closeExpandedCard={closeExpandedCard}
      deleteCard={deleteCard}
      isEditing={isEditing}
      saveCard={handleEdit}
    >
      {isEditing ? (
        <>
          <Typography id="map-card-title" sx={{ alignSelf: 'center' }} className={classes.modalTitle} component="h3">
            Editing
          </Typography>
          <Box className={classes.editView}>
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
                <MenuItem key={value} value={value} data-testid="select-option">
                  {value}
                </MenuItem>
              ))}
            </Select>
            <MapCardForm title={title} setTitle={setTitle} content={formContent} setContent={handleContentUpdate} />
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.header}>
            <Avatar
              aria-label="avatar"
              sx={{ bgcolor: avatarColor(CardType.Map), width: 60, height: 60 }}
              data-testid="room-number-view"
            >
              {roomNumber}
            </Avatar>
            <CardHeader title={title} handleEdit={handleEdit} />
          </Box>
          <Box className={classes.body}>
            <BlockField label="Read Out Loud" value={description} />
            <BlockField label="DM Info" value={notes} />
          </Box>
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedMapCard;
