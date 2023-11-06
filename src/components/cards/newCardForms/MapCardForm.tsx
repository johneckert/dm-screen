import { TextField } from '@mui/material';
import { MapCardContent } from '../../../interfaces';

const MapCardForm: React.FC<{
  content: MapCardContent;
  setContent: React.Dispatch<React.SetStateAction<MapCardContent>> | ((content: MapCardContent) => void);
}> = ({ content, setContent }) => {
  return (
    <div data-testid="map-form">
      <TextField
        id="modal-room-number"
        label="Room Number"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.roomNumber}
        onChange={(e) => setContent({ ...content, roomNumber: e.target.value })}
        data-testid="room-number-input"
      />
      <TextField
        id="modal-title"
        label="Title"
        sx={{ paddingBottom: 2 }}
        fullWidth
        variant="outlined"
        value={content.title}
        onChange={(e) => setContent({ ...content, title: e.target.value })}
        data-testid="title-input"
      />
      <TextField
        id="modal-description"
        label="Read Out Loud"
        fullWidth
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        multiline
        rows={18}
        value={content.description}
        onChange={(e) => setContent({ ...content, description: e.target.value })}
        data-testid="description-input"
      />
      <TextField
        id="modal-content"
        label="DM Info"
        fullWidth
        variant="outlined"
        sx={{ paddingBottom: 2 }}
        multiline
        rows={18}
        value={content.content}
        onChange={(e) => setContent({ ...content, content: e.target.value })}
        data-testid="content-input"
      />
    </div>
  );
};

export default MapCardForm;
