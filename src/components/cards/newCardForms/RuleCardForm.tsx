import { SelectChangeEvent } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { RULES } from '../../../ruleData';
import { splitAndTitleCase } from '../../../utils';
import { GenericCardContent } from '../../../interfaces';

const RuleCardForm: React.FC<{
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<GenericCardContent>>;
}> = ({ title, setTitle, setContent }) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    setTitle(e.target.value);
    setContent({ content: splitAndTitleCase(e.target.value) });
  };
  return (
    <div data-testid="rule-form">
      <Select
        labelId="card-type-select-label"
        sx={{ marginBottom: 2 }}
        id="card-type-select"
        value={title}
        label="Type"
        data-testid="card-type-select"
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
