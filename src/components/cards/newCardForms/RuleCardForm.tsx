import { SelectChangeEvent } from '@mui/material';
import { Select, InputLabel, MenuItem } from '@mui/material';
import { RULES } from '../../../ruleData';
import { splitAndTitleCase } from '../../../utils';
import { RuleCardContent } from '../../../interfaces';
import ColumnLayout from '../../layout/ColumnLayout';

const RuleCardForm: React.FC<{
  content: RuleCardContent;
  setContent: React.Dispatch<React.SetStateAction<RuleCardContent>> | ((content: RuleCardContent) => void);
}> = ({ content, setContent }) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    setContent({ title: e.target.value });
  };
  return (
    <div data-testid="rule-form">
      <ColumnLayout sxOverrides={{ p: 0 }}>
        <InputLabel id="rule-select-label">Rule*</InputLabel>
        <Select
          labelId="rule-select-label"
          sx={{ marginBottom: 2, width: '100%' }}
          id="rule-select"
          value={content.title}
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
      </ColumnLayout>
    </div>
  );
};

export default RuleCardForm;
