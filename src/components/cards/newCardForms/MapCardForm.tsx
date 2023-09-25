import { TextField } from '@mui/material';
import { GenericCardContent } from '../../../interfaces';

const MapCardForm: React.FC<{
  title: string;
  content: GenericCardContent;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<GenericCardContent>>;
}> = ({ title, content, setTitle, setContent }) => {
  return (
    <>
      <TextField
        id="modal-room-number"
        label="Room Number"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.roomNumber}
        onChange={(e) => setContent({ ...content, roomNumber: e.target.value })}
      />
      <TextField
        id="modal-title"
        label="Title"
        sx={{ paddingBottom: 2 }}
        fullWidth
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
        data-testid="content-input"
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
    </>
  );
};

export default MapCardForm;
