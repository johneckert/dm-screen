import { TextField } from '@mui/material';
import { NoteCardContent } from '../../../interfaces';

const NoteCardForm: React.FC<{
  content: NoteCardContent;
  setContent: React.Dispatch<React.SetStateAction<NoteCardContent>> | ((content: NoteCardContent) => void);
}> = ({ content, setContent }) => {
  return (
    <div data-testid="note-form">
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
        id="modal-content"
        label="Content"
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

export default NoteCardForm;
