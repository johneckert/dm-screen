import { SelectChangeEvent } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { RULES } from '../../../ruleData';
import { splitAndTitleCase } from '../../../utils';
import { GenericCardContent } from '../../../interfaces';

const RuleCardForm: React.FC<{
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<GenericCardContent>> | ((content: GenericCardContent) => void);
}> = ({ title, setTitle, setContent }) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    setTitle(e.target.value);
    setContent({ content: splitAndTitleCase(e.target.value) });
  };
  return (
    <div data-testid="rule-form">
      <Select
        labelId="rule-select-label"
        sx={{ marginBottom: 2, width: '100%' }}
        id="rule-select"
        value={title}
        label="Rule"
        data-testid="rule-select"
        onChange={(e) => {
          handleChange(e);
        }}
      >
        {RULES.map((value) => (
          <MenuItem key={value} value={value} data-testid="select-option">
            {splitAndTitleCase(value)}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default RuleCardForm;
