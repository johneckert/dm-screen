import { TextField } from '@mui/material';
import { MapCardContent } from '../../../interfaces';

const MapCardForm: React.FC<{
  content: MapCardContent;
  setContent: React.Dispatch<React.SetStateAction<MapCardContent>> | ((content: MapCardContent) => void);
}> = ({ content, setContent }) => {
  return (
    <div data-testid="map-form">
      <TextField
        id="map-form-room-number"
        label="Room Number"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.roomNumber}
        onChange={(e) => setContent({ ...content, roomNumber: e.target.value })}
        data-testid="room-number-input"
      />
      <TextField
        id="map-form-title"
        label="Title"
        sx={{ paddingBottom: 2 }}
        fullWidth
        variant="outlined"
        value={content.title}
        onChange={(e) => setContent({ ...content, title: e.target.value })}
        data-testid="title-input"
      />
      <TextField
        id="map-form-read-out-loud-text"
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
      <TextField
        id="map-form-notes"
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
    </div>
  );
};

export default MapCardForm;
