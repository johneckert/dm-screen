import { TextField } from '@mui/material';
import { GenericCardContent } from '../../../interfaces';

const NoteCardForm: React.FC<{
  title: string;
  content: GenericCardContent;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<GenericCardContent>>;
}> = ({ title, content, setTitle, setContent }) => {
  return (
    <div data-testid="note-form">
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
