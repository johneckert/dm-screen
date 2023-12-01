import { TextField } from '@mui/material';
import { NoteCardContent, CardType } from '../../../interfaces';
import FormDivider from '../cardFields/FormDivider';

const NoteCardForm: React.FC<{
  content: NoteCardContent;
  setContent: React.Dispatch<React.SetStateAction<NoteCardContent>> | ((content: NoteCardContent) => void);
}> = ({ content, setContent }) => {
  return (
    <div data-testid="note-form">
      <FormDivider type={CardType.Note} />
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
      <FormDivider type={CardType.Note} />
      <TextField
        id="notes"
        label="Notes"
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

export default NoteCardForm;
