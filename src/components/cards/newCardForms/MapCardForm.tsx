import { Box, TextField } from '@mui/material';
import { MapCardContent, CardType } from '../../../interfaces';
import FormDivider from '../cardFields/FormDivider';

const MapCardForm: React.FC<{
  content: MapCardContent;
  setContent: React.Dispatch<React.SetStateAction<MapCardContent>> | ((content: MapCardContent) => void);
}> = ({ content, setContent }) => {
  return (
    <Box sx={{ width: '100%' }} data-testid="map-form">
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextField
          id="room-number"
          label="Room Number"
          sx={{ paddingBottom: 2, paddingRight: 2, maxWidth: 150 }}
          variant="outlined"
          value={content.roomNumber}
          onChange={(e) => setContent({ ...content, roomNumber: e.target.value })}
          data-testid="room-number-input"
        />
        <TextField
          id="title"
          label="Title"
          sx={{ paddingBottom: 2 }}
          fullWidth
          variant="outlined"
          value={content.title}
          onChange={(e) => setContent({ ...content, title: e.target.value })}
          data-testid="title-input"
        />
      </Box>
      <FormDivider type={CardType.Map} />
      <TextField
        id="read-out-loud-text"
        label="Read Out Loud"
        fullWidth
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        multiline
        rows={18}
        value={content.readOutLoudText}
        onChange={(e) => setContent({ ...content, readOutLoudText: e.target.value })}
        data-testid="read-out-loud-text-input"
      />
      <FormDivider type={CardType.Map} />
      <TextField
        id="notes"
        label="DM Notes"
        fullWidth
        variant="outlined"
        sx={{ paddingBottom: 2 }}
        multiline
        rows={18}
        value={content.notes}
        onChange={(e) => setContent({ ...content, notes: e.target.value })}
        data-testid="notes-input"
      />
    </Box>
  );
};

export default MapCardForm;
